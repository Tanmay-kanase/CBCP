const profileService = require("../services/creatorProfile.js");
const createProfile = async (req, res) => {
  try {
    const newProfile = await profileService.createProfile(req.body);
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProfiles = async (_req, res) => {
  try {
    const profiles = await profileService.getAllProfiles();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await profileService.getProfileByUserId(req.params.userId);
    if (!profile) return res.status(404).json({ error: "Not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updated = await profileService.updateProfile(
      req.params.userId,
      req.body
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    await profileService.deleteProfile(req.params.userId);
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const syncInstagram = async (req, res) => {
  try {
    const updated = await profileService.syncInstagramData(
      req.params.userId,
      req.body
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
  syncInstagram
};
