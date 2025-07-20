const express = require("express");
const creatorController = require("../controllers/creatorProfileController");
const profileRoutes = express.Router();
const { verifyAccessToken } = require("../middleware/verifyAccessToken");

profileRoutes.post("/", verifyAccessToken, creatorController.createProfile);
profileRoutes.get("/", verifyAccessToken, creatorController.getProfiles);
profileRoutes.get("/:userId", verifyAccessToken, creatorController.getProfile);
profileRoutes.put(
  "/:userId",
  verifyAccessToken,
  creatorController.updateProfile
);
profileRoutes.delete(
  "/:userId",
  verifyAccessToken,
  creatorController.deleteProfile
);
profileRoutes.patch(
  "/:userId/sync-instagram",
  verifyAccessToken,
  creatorController.syncInstagram
);

module.exports = profileRoutes;
