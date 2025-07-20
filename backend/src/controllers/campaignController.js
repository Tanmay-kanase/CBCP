const campaignService = require("../services/campaignService");

const create = async (req, res) => {
  try {
    const campaign = await campaignService.createCampaign(req.body);
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const campaigns = await campaignService.getAllCampaigns();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const campaign = await campaignService.getCampaignById(req.params.id);
    if (!campaign) return res.status(404).json({ error: "Campaign not found" });
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const campaign = await campaignService.updateCampaignStatus(
      req.params.id,
      req.body.status
    );
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadProof = async (req, res) => {
  try {
    const campaign = await campaignService.uploadProof(
      req.params.id,
      req.body.url
    );
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const adminVerify = async (req, res) => {
  try {
    const campaign = await campaignService.verifyByAdmin(
      req.params.id,
      req.body.status
    );
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  create,
  getAll,
  getById,
  updateStatus,
  uploadProof,
  adminVerify
};
