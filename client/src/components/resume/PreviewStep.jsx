import ResumePreview from "./ResumePreview";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PreviewStep({
    resumeData,
    selectedTemplate,
    downloadPDF,
    prevStep,
}) {
    const navigate = useNavigate();
    const { user } = useAuth();

    // Check if user is logged in
    const requireLogin = () => {
        if (!user) {
            toast.error("Please login to continue");
            navigate("/login", {
                state: {
                    from: "/resume-builder",
                },
            });
            return false;
        }
        return true;
    };

    // Save Resume
    const saveResume = async () => {
        if (!requireLogin()) return;

        try {
            const payload = {
                ...resumeData,
                title:
                    resumeData.title || `${resumeData.fullName}'s Resume`,
                template: selectedTemplate,
            };

            // Update existing resume
            if (resumeData._id) {
                await api.put(`/resume/${resumeData._id}`, payload);
            } else {
                // Create new resume
                const { data } = await api.post("/resume", payload);

                // Store generated ID
                resumeData._id = data.resume._id;
            }

            toast.success("Resume Saved Successfully!");

            // Download after saving
            if (downloadPDF) {
                downloadPDF();
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to Save Resume");
        }
    };

    // Download Resume
    const handleDownload = () => {
        if (!requireLogin()) return;

        if (downloadPDF) {
            downloadPDF();
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-800">
                    Resume Preview
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={prevStep}
                        className="rounded-lg border border-slate-300 px-5 py-2 hover:bg-slate-100"
                    >
                        Previous
                    </button>

                    <button
                        onClick={saveResume}
                        className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
                    >
                        Save Resume
                    </button>

                    <button
                        type="button"
                        onClick={handleDownload}
                        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                    >
                        Download PDF
                    </button>
                </div>
            </div>

            <ResumePreview
                resumeData={resumeData}
                selectedTemplate={selectedTemplate}
                downloadPDF={downloadPDF}
            />
        </div>
    );
}