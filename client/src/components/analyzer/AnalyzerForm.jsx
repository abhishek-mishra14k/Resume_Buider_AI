import {
    FaCloudUploadAlt,
    FaFilePdf,
    FaFileWord,
    FaFolderOpen,
    FaCheckCircle,
    FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionCard from "../resume/SectionCard";

function AnalyzerForm({
    resumeSource,
    setResumeSource,
    resumeFile,
    setResumeFile,
    resumes,
    selectedResume,
    setSelectedResume,
    loading,
    analyzeResume,
}) {
    const handleFile = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Only PDF, DOC and DOCX files are allowed.");
            e.target.value = "";
            return;
        }

        setResumeFile(file);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <SectionCard
                title="Choose Resume Source"
                subtitle="Upload a new resume or analyze one of your saved resumes."
            >
                <div className="flex flex-wrap gap-6">

                    <label
                        className={`cursor-pointer rounded-xl border px-5 py-3 transition ${resumeSource === "upload"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-300"
                            }`}
                    >
                        <input
                            type="radio"
                            className="mr-2"
                            checked={resumeSource === "upload"}
                            onChange={() => setResumeSource("upload")}
                        />
                        Upload Resume
                    </label>

                    <label
                        className={`cursor-pointer rounded-xl border px-5 py-3 transition ${resumeSource === "saved"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-300"
                            }`}
                    >
                        <input
                            type="radio"
                            className="mr-2"
                            checked={resumeSource === "saved"}
                            onChange={() => setResumeSource("saved")}
                        />
                        Saved Resume
                    </label>

                </div>

                {resumeSource === "upload" ? (

                    <label className="mt-8 block cursor-pointer">

                        <input
                            hidden
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFile}
                        />

                        <div className="rounded-3xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 text-center transition hover:border-blue-500">

                            <FaCloudUploadAlt className="mx-auto text-6xl text-blue-600" />

                            <h3 className="mt-5 text-xl font-bold">
                                Drag & Drop Resume
                            </h3>

                            <p className="mt-2 text-slate-500">
                                or click anywhere to browse files
                            </p>

                            <div className="mt-6 flex justify-center gap-4">

                                <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
                                    <FaFilePdf className="mr-2 inline" />
                                    PDF
                                </span>

                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                                    <FaFileWord className="mr-2 inline" />
                                    DOC
                                </span>

                                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
                                    DOCX
                                </span>

                            </div>

                        </div>

                    </label>

                ) : resumes.length > 0 ? (

                    <div className="mt-8">

                        <label className="mb-2 block font-semibold">
                            Select Resume
                        </label>

                        <div className="relative">

                            <FaFolderOpen className="absolute left-4 top-4 text-slate-400" />

                            <select
                                value={selectedResume}
                                onChange={(e) => setSelectedResume(e.target.value)}
                                className="w-full rounded-2xl border border-slate-300 py-3 pl-12 pr-4"
                            >
                                {resumes.map((resume) => (
                                    <option key={resume._id} value={resume._id}>
                                        {resume.title}
                                    </option>
                                ))}
                            </select>

                        </div>

                    </div>

                ) : (

                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-slate-500">
                        No saved resumes found.
                    </div>

                )}

                {resumeFile && resumeSource === "upload" && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 flex items-center justify-between rounded-2xl border bg-green-50 p-4"
                    >

                        <div>

                            <p className="font-semibold">
                                {resumeFile.name}
                            </p>

                            <p className="text-sm text-slate-500">
                                {(resumeFile.size / 1024).toFixed(1)} KB
                            </p>

                        </div>

                        <FaCheckCircle className="text-3xl text-green-600" />

                    </motion.div>

                )}

                <button
                    onClick={analyzeResume}
                    disabled={loading}
                    className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-50"
                >
                    <FaRocket />

                    {loading
                        ? "Analyzing Resume..."
                        : "Analyze Resume"}
                </button>

            </SectionCard>
        </motion.div>
    );
}

export default AnalyzerForm;