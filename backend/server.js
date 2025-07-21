const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./src/app");
const path = require("path");
const express = require("express");
dotenv.config();
connectDB();
// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
