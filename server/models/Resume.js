import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    education: [
      {
        degree: String,
        college: String,
        year: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        techStack: String,
        github: String,
      },
    ],
    template: {
      type: String,
      default: "Modern",
    },

    // ✅ ATS fields
    atsScore: {
      type: Number,
      default: null,
    },

    atsAnalysis: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },

    lastAnalyzed: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Resume", resumeSchema);
