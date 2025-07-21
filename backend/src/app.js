const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/creatorProfileRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // allow cookies/authorization header
  })
);
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/creator-profiles", profileRoutes);
app.use("/api/campaigns", campaignRoutes);
module.exports = app;
