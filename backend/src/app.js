const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/creatorProfileRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const app = express();
app.use(
  cors({
    origin: "https://cbcp.onrender.com", // ✅ Allow only your frontend
    credentials: true, // ✅ If you're using cookies/auth
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/creator-profiles", profileRoutes);
app.use("/api/campaigns", campaignRoutes);
module.exports = app;
