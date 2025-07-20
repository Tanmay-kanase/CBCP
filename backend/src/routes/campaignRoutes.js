const express = require("express");
const campaignController = require("../controllers/campaignController");
const { verifyAccessToken } = require("../middleware/verifyAccessToken");

const router = express.Router();

router.post("/", verifyAccessToken, campaignController.create);
router.get("/", verifyAccessToken, campaignController.getAll);
router.get("/:id", verifyAccessToken, campaignController.getById);
router.patch("/:id/status", verifyAccessToken, campaignController.updateStatus);
router.patch("/:id/proof", verifyAccessToken, campaignController.uploadProof);
router.patch("/:id/verify", verifyAccessToken, campaignController.adminVerify);

module.exports = router;
