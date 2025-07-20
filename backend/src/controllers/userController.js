const { registerUser, loginUser } = require("../services/userService");
const { sendOTP } = require("../utils/otp");
const otpStore = {};

const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);
    res.status(200).json(data);
  } catch (err) {
    const statusCode = err.code || 500;
    res.status(statusCode).json({ message: err.message });
  }
};

const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (otpStore[email] && otpStore[email] == otp) {
      delete otpStore[email];
      res.status(200).json({ success: true, message: "OTP verified" });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (err) {
    next(err);
  }
};

const sendOtpToEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp;
    await sendOTP(email, otp);
    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};


module.exports = {
  register,
  login,
  verifyOtp,
  sendOtpToEmail
};
