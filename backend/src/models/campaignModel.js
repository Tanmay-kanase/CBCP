const mongoose = require("mongoose");

const proofOfPromotionSchema = new mongoose.Schema({
  url: String,
  uploadedAt: Date,
});

const campaignSchema = new mongoose.Schema(
  {
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    typeOfPromotion: {
      type: String,
      enum: ["post", "story", "video"],
      required: true,
    },
    campaignDetails: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed"],
      default: "pending",
    },
    proofOfPromotion: proofOfPromotionSchema,
    adminVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", campaignSchema);
