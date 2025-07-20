const CreatorProfile = require("../models/creatorProfile.js");

const createProfile = async (data) => {
  return await CreatorProfile.create(data);
};

const getAllProfiles = async () => {
  return await CreatorProfile.find();
};

const getProfileByUserId = async (userId) => {
  return await CreatorProfile.findOne({ userId });
};

const updateProfile = async (userId, updates) => {
  return await CreatorProfile.findOneAndUpdate({ userId }, updates, {
    new: true,
  });
};

const deleteProfile = async (userId) => {
  return await CreatorProfile.findOneAndDelete({ userId });
};

const syncInstagramData = async (userId, data) => {
  return await CreatorProfile.findOneAndUpdate(
    { userId },
    {
      "instagramDetails.followersCount": data.followersCount,
      "instagramDetails.mediaCount": data.mediaCount,
      "instagramDetails.lastSync": new Date(),
    },
    { new: true }
  );
};


module.exports = {
  createProfile,
  getAllProfiles,
  getProfileByUserId,
  updateProfile,
  deleteProfile,
  syncInstagramData
};
