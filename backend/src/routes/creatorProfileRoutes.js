import express from "express";
import * as creatorController from "../controllers/creatorProfileController.js";
import { verifyAccessToken } from "../middleware/verifyAccessToken.js";

const router = express.Router();

router.post("/", verifyAccessToken, creatorController.createProfile);
router.get("/", verifyAccessToken, creatorController.getProfiles);
router.get("/:userId", verifyAccessToken, creatorController.getProfile);
router.put("/:userId", verifyAccessToken, creatorController.updateProfile);
router.delete("/:userId", verifyAccessToken, creatorController.deleteProfile);
router.patch(
  "/:userId/sync-instagram",
  verifyAccessToken,
  creatorController.syncInstagram
);

export default router;
