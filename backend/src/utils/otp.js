import nodemailer from "nodemailer";

export const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Verify Email" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "OTP for Verification",
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  };

  await transporter.sendMail(mailOptions);
};
