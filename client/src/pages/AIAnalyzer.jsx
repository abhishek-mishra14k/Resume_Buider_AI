import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";

import AnalyzerForm from "../components/analyzer/AnalyzerForm";
import WelcomeScreen from "../components/analyzer/WelcomeScreen";
import AnalyzerStats from "../components/analyzer/AnalyzerStats";
import ATSScore from "../components/analyzer/ATSScore";
import SectionScores from "../components/analyzer/SectionScores";
import KeywordAnalysis from "../components/analyzer/KeywordAnalysis";
import Strengths from "../components/analyzer/Strengths";
import Suggestions from "../components/analyzer/Suggestions";

function AIAnalyzer() {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const [resumeSource, setResumeSource] = useState("upload");
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const { data } = await api.get("/resume");

      setResumes(data.resumes);

      if (data.resumes.length > 0) {
        setSelectedResume(data.resumes[0]._id);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load saved resumes.");
    }
  };

  const analyzeResume = async () => {
    try {
      if (resumeSource === "upload" && !resumeFile) {
        toast.error("Please upload a resume.");
        return;
      }

      if (resumeSource === "saved" && !selectedResume) {
        toast.error("Please select a saved resume.");
        return;
      }

      setAnalysis(null);
      setLoading(true);

      let data;

      if (resumeSource === "upload") {
        const formData = new FormData();
        formData.append("resume", resumeFile);

        const response = await api.post(
          "/analyzer/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        data = response.data;
      } else {
        const response = await api.post(
          `/analyzer/${selectedResume}`
        );

        data = response.data;
      }

      setAnalysis(data.analysis);

      toast.success("Resume analyzed successfully!");

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 200);

    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message ||
        "Analysis failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <div className="mb-12 text-center">

          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-5xl text-white shadow-xl">
            🤖
          </div>

          <h1 className="text-5xl font-extrabold text-slate-800">
            AI Resume Analyzer
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Upload your resume or select one from your saved resumes and receive
            an AI-powered ATS score, keyword analysis, section-wise evaluation,
            and personalized recommendations to improve your chances of getting shortlisted.
          </p>

        </div>

        {/* Stats */}

        <AnalyzerStats />

        {/* Upload Form */}

        <div className="mt-10">
          <AnalyzerForm
            resumeSource={resumeSource}
            setResumeSource={setResumeSource}
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
            resumes={resumes}
            selectedResume={selectedResume}
            setSelectedResume={(id) => {
              setSelectedResume(id);
              setAnalysis(null);
            }}
            loading={loading}
            analyzeResume={analyzeResume}
          />
        </div>

        {/* Results */}

        {analysis ? (
          <>
            <ATSScore analysis={analysis} />
            <SectionScores analysis={analysis} />
            <KeywordAnalysis analysis={analysis} />
            <Strengths analysis={analysis} />
            <Suggestions analysis={analysis} />
          </>
        ) : (
          <WelcomeScreen />
        )}

      </div>

    </div>
  );
}

export default AIAnalyzer;