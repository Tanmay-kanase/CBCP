const Campaign = require("../models/campaignModel.js");

const createCampaign = async (data) => {
  return await Campaign.create(data);
};

const getAllCampaigns = async () => {
  return await Campaign.find().populate(
    "businessId creatorId",
    "fullName email"
  );
};

const getCampaignById = async (id) => {
  return await Campaign.findById(id).populate(
    "businessId creatorId",
    "fullName email"
  );
};

const updateCampaignStatus = async (id, status) => {
  return await Campaign.findByIdAndUpdate(id, { status }, { new: true });
};

const uploadProof = async (id, proofUrl) => {
  return await Campaign.findByIdAndUpdate(
    id,
    {
      proofOfPromotion: {
        url: proofUrl,
        uploadedAt: new Date(),
      },
    },
    { new: true }
  );
};

const verifyByAdmin = async (id, status) => {
  return await Campaign.findByIdAndUpdate(
    id,
    { adminVerified: status },
    { new: true }
  );
};


module.exports = {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaignStatus,
  uploadProof,
  verifyByAdmin
};
