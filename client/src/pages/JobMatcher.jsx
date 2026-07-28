import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function JobMatcher() {
  const navigate = useNavigate();

  const [resumeSource, setResumeSource] = useState("saved");
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data } = await api.get("/resume");

        setResumes(data.resumes);

        if (data.resumes.length > 0) {
          setSelectedResume(data.resumes[0]._id);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchResumes();
  }, []);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert("Please paste a Job Description.");
      return;
    }

    try {
      setLoading(true);

      let data;

      if (resumeSource === "saved") {
        const resumeData = resumes.find(
          (resume) => resume._id === selectedResume
        );

        if (!resumeData) {
          alert("Please select a resume.");
          return;
        }

        const response = await api.post("/job-match", {
          resumeData,
          jobDescription,
        });

        data = response.data;
      } else {
        if (!resumeFile) {
          alert("Please upload a resume.");
          return;
        }

        const formData = new FormData();

        formData.append("resume", resumeFile);
        formData.append("jobDescription", jobDescription);

        const response = await api.post(
          "/job-match/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        data = response.data;
      }

      setResult(data.result);
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Failed to analyze job match."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-5xl px-6">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 rounded-lg border bg-white px-4 py-2 transition hover:bg-gray-100"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-4xl font-bold text-slate-800">
          🎯 AI Job Matcher
        </h1>

        <p className="mt-2 text-gray-500">
          Compare your resume with any job description using AI.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">

          <h2 className="mb-5 text-xl font-bold">
            Choose Resume Source
          </h2>

          <div className="space-y-4">

            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={resumeSource === "saved"}
                onChange={() => setResumeSource("saved")}
              />
              My Saved Resume
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={resumeSource === "upload"}
                onChange={() => setResumeSource("upload")}
              />
              Upload Resume
            </label>

          </div>

          {resumeSource === "saved" && (
            <div className="mt-6">

              <label className="mb-2 block font-semibold">
                Select Resume
              </label>

              {resumes.length > 0 ? (
                <select
                  value={selectedResume}
                  onChange={(e) =>
                    setSelectedResume(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 p-3"
                >
                  {resumes.map((resume) => (
                    <option
                      key={resume._id}
                      value={resume._id}
                    >
                      {resume.title}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="text-gray-500">
                  No saved resumes found.
                </p>
              )}

            </div>
          )}

          {resumeSource === "upload" && (
            <div className="mt-6">

              <label className="mb-2 block font-semibold">
                Upload Resume
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) return;

                  const allowedTypes = [
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ];

                  if (!allowedTypes.includes(file.type)) {
                    alert("Please upload only PDF or DOCX files.");
                    return;
                  }

                  if (file.size > 10 * 1024 * 1024) {
                    alert("Maximum file size is 10MB.");
                    return;
                  }

                  setResumeFile(file);
                }}
                className="w-full rounded-xl border border-gray-300 p-3"
              />

              {resumeFile && (
                <p className="mt-3 text-green-600">
                  Selected: {resumeFile.name}
                </p>
              )}

            </div>
          )}

          <div className="mt-8">

            <label className="mb-3 block text-lg font-semibold">
              Paste Job Description
            </label>

            <textarea
              rows={12}
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
              placeholder="Paste the complete job description here..."
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading
              ? "🤖 AI is analyzing..."
              : "🚀 Analyze Job Match"}
          </button>

        </div>

        {result && (
          <div className="mt-10 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold text-slate-800">
              Analysis Result
            </h2>

            <div className="mt-6">

              <h3 className="text-xl font-semibold">
                🎯 Match Score
              </h3>

              <p className="mt-2 text-5xl font-bold text-blue-600">
                {result.matchScore}%
              </p>

            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">

              <div>

                <h3 className="mb-4 text-xl font-semibold text-green-600">
                  ✅ Matching Skills
                </h3>

                <ul className="space-y-2">
                  {(result.matchingSkills || []).map((skill, index) => (
                    <li
                      key={index}
                      className="rounded-lg bg-green-50 px-4 py-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>

              <div>

                <h3 className="mb-4 text-xl font-semibold text-red-600">
                  ❌ Missing Skills
                </h3>

                <ul className="space-y-2">
                  {(result.missingSkills || []).map((skill, index) => (
                    <li
                      key={index}
                      className="rounded-lg bg-red-50 px-4 py-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>

            </div>

            <div className="mt-10">

              <h3 className="mb-4 text-xl font-semibold text-yellow-600">
                💡 AI Suggestions
              </h3>

              <ul className="space-y-3">
                {(result.suggestions || []).map((item, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-yellow-50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default JobMatcher;