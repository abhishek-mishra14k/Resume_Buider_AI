import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function InterviewQuestions() {
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const generateQuestions = async () => {
    if (!jobDescription.trim()) {
      alert("Please paste a Job Description.");
      return;
    }

    const resumeData = resumes.find(
      (resume) => resume._id === selectedResume
    );

    if (!resumeData) {
      alert("Please select a resume.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/interview", {
        resumeData,
        jobDescription,
      });

      setResult(data.result);

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Failed to generate interview questions."
      );
    } finally {
      setLoading(false);
    }
  };

  const copyQuestions = async () => {
    if (!result) return;

    const text = `
Technical Questions

${(result.technicalQuestions || []).join("\n")}

HR Questions

${(result.hrQuestions || []).join("\n")}

Project Questions

${(result.projectQuestions || []).join("\n")}
`;

    await navigator.clipboard.writeText(text);

    alert("Questions copied!");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-6">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 rounded-lg border bg-white px-4 py-2 hover:bg-gray-100"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-4xl font-bold">
          🎤 AI Interview Questions
        </h1>

        <p className="mt-2 text-gray-500">
          Generate interview questions from your resume.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

          <label className="font-semibold">
            Select Resume
          </label>

          <select
            value={selectedResume}
            onChange={(e) =>
              setSelectedResume(e.target.value)
            }
            className="mt-2 w-full rounded-xl border p-3"
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

          <label className="mt-6 block font-semibold">
            Job Description
          </label>

          <textarea
            rows={8}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            className="mt-2 w-full rounded-xl border p-4"
          />

          <button
            onClick={generateQuestions}
            disabled={loading}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            {loading
              ? "🤖 Generating..."
              : "✨ Generate Questions"}
          </button>

        </div>

        {result && (

          <div className="mt-10 rounded-2xl bg-white p-8 shadow">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-3xl font-bold">
                Generated Questions
              </h2>

              <button
                onClick={copyQuestions}
                className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white"
              >
                📋 Copy All
              </button>

            </div>

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="mb-4 text-xl font-bold text-blue-600">
                  Technical
                </h3>

                <ul className="space-y-3">
                  {(result.technicalQuestions || []).map(
                    (q, i) => (
                      <li
                        key={i}
                        className="rounded-lg bg-blue-50 p-3"
                      >
                        {q}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-green-600">
                  HR
                </h3>

                <ul className="space-y-3">
                  {(result.hrQuestions || []).map(
                    (q, i) => (
                      <li
                        key={i}
                        className="rounded-lg bg-green-50 p-3"
                      >
                        {q}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-purple-600">
                  Project
                </h3>

                <ul className="space-y-3">
                  {(result.projectQuestions || []).map(
                    (q, i) => (
                      <li
                        key={i}
                        className="rounded-lg bg-purple-50 p-3"
                      >
                        {q}
                      </li>
                    )
                  )}
                </ul>
              </div>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}

export default InterviewQuestions;