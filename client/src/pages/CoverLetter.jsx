import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import jsPDF from "jspdf";


function CoverLetter() {
    const navigate = useNavigate();

    const [resumes, setResumes] = useState([]);
    const [selectedResume, setSelectedResume] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const { data } = await api.get("/resume");

                setResumes(data.resumes);

                if (data.resumes.length > 0) {
                    setSelectedResume(data.resumes[0]._id);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchResumes();
    }, []);

    const generateCoverLetter = async () => {
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

            const { data } = await api.post("/cover-letter", {
                resumeData,
                jobDescription,
            });

            setCoverLetter(data.coverLetter);

        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                "Failed to generate cover letter."
            );
        } finally {
            setLoading(false);
        }
    };


    const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(coverLetter);
                alert("✅ Cover letter copied to clipboard!");
            } catch (error) {
                console.error(error);
                alert("Failed to copy cover letter.");
            }
        };

        const downloadPDF = () => {
            const doc = new jsPDF();

            doc.setFont("times", "normal");
            doc.setFontSize(12);

            const lines = doc.splitTextToSize(coverLetter, 180);

            doc.text(lines, 15, 20);

            doc.save("Cover_Letter.pdf");
        };

        
    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <div className="mx-auto max-w-5xl px-6">

                <button
                    onClick={() => navigate("/dashboard")}
                    className="mb-6 rounded-lg border bg-white px-4 py-2 hover:bg-gray-100"
                >
                    ← Back to Dashboard
                </button>

                <h1 className="text-4xl font-bold text-slate-800">
                    ✉️ AI Cover Letter Generator
                </h1>

                <p className="mt-2 text-gray-500">
                    Generate a personalized cover letter using AI.
                </p>

                <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">

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
                            No resumes found.
                        </p>
                    )}

                    <div className="mt-6">

                        <label className="mb-2 block font-semibold">
                            Job Description
                        </label>

                        <textarea
                            rows={10}
                            value={jobDescription}
                            onChange={(e) =>
                                setJobDescription(e.target.value)
                            }
                            placeholder="Paste the complete job description here..."
                            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                    </div>

                    <button
                        onClick={generateCoverLetter}
                        disabled={loading}
                        className="mt-6 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                    >
                        {loading
                            ? "🤖 Generating..."
                            : "✨ Generate Cover Letter"}
                    </button>

                </div>

                {coverLetter && (
                    <div className="mt-10 rounded-2xl bg-white p-8 shadow-md">

                        <h2 className="mb-6 text-3xl font-bold">
                            Generated Cover Letter
                        </h2>

                        <textarea
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            rows={18}
                            className="w-full rounded-xl border border-gray-300 bg-gray-50 p-5 leading-7 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                        <div className="mt-6 flex flex-wrap gap-4">

                            <button
                                onClick={copyToClipboard}
                                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                            >
                                📋 Copy
                            </button>

                            <button
                                onClick={downloadPDF}
                                className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                            >
                                📄 Download PDF
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default CoverLetter;