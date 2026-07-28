import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import analysisRoutes from "./routes/analysisRoutes.js";
import improveResumeRoutes from "./routes/improveResumeRoutes.js";
import jobMatchRoutes from "./routes/jobMatchRoutes.js";
import coverLetterRoutes from "./routes/coverLetterRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import analyzerRoutes from "./routes/analyzerRoutes.js";


import connectDB from "./config/database.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/analyze", analysisRoutes);
app.use("/api/improve", improveResumeRoutes);
app.use("/api/job-match", jobMatchRoutes);
app.use("/api/cover-letter", coverLetterRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/analyzer", analyzerRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Resume Builder API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});