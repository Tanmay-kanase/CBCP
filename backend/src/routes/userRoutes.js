const express = require("express");

const {
  register,
  login,
  sendOtpToEmail,
  verifyOtp,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otp/send", sendOtpToEmail);
router.post("/otp/verify", verifyOtp);

module.exports = router;
