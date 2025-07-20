import CreatorProfile from "../models/creatorProfile.js";

export const createProfile = async (data) => {
  return await CreatorProfile.create(data);
};

export const getAllProfiles = async () => {
  return await CreatorProfile.find();
};

export const getProfileByUserId = async (userId) => {
  return await CreatorProfile.findOne({ userId });
};

export const updateProfile = async (userId, updates) => {
  return await CreatorProfile.findOneAndUpdate({ userId }, updates, {
    new: true,
  });
};

export const deleteProfile = async (userId) => {
  return await CreatorProfile.findOneAndDelete({ userId });
};

export const syncInstagramData = async (userId, data) => {
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
