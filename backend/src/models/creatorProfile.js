import mongoose from "mongoose";

const creatorProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: { type: String, required: true },
    profilePicUrl: String,
    bio: String,
    socialLinks: {
      instagram: String,
      youtube: String,
      others: [String],
    },
    instagramDetails: {
      igUserId: String,
      followersCount: Number,
      mediaCount: Number,
      accessToken: { type: String, required: true },
      tokenExpiresAt: Date,
      lastSync: Date,
    },
    categories: [String],
    pricing: {
      post: Number,
      story: Number,
      video: Number,
    },
    availableLocation: String,
    workSamples: [String],
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("CreatorProfile", creatorProfileSchema);
