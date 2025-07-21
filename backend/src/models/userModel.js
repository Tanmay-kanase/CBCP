const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, sparse: true },
    phone: { type: String, sparse: true },
    role: {
      type: String,
      enum: ["admin", "creator", "business"],
      required: true,
    },
    password: { type: String, required: true },
    companyName: { type: String, default: null },
    industry: { type: String, default: null },
    promotionNeeds: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
