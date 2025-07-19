import nodemailer from "nodemailer";

export const welcomeMessage = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Welcome👋" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Welcome ",
    html: `
      <h1>Welcome</h1>
         
    `,
  };

  await transporter.sendMail(mailOptions);
};
