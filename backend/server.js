import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
