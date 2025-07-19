import express from "express";
import {
  register,
  login,
  sendOtpToEmail,
  verifyOtp,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otp/send", sendOtpToEmail);
router.post("/otp/verify", verifyOtp);

export default router;
