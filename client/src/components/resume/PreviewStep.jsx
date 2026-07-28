import ResumePreview from "./ResumePreview";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function PreviewStep({
    resumeData,
    selectedTemplate,
    downloadPDF,
    prevStep,
}) {

    const saveResume = async () => {
        try {
            const payload = {
                ...resumeData,
                title: resumeData.title || `${resumeData.fullName}'s Resume`,
                template: selectedTemplate,
            };

            // If editing an existing resume
            if (resumeData._id) {
                await api.put(`/resume/${resumeData._id}`, payload);
            } else {
                // Creating a new resume
                const { data } = await api.post("/resume", payload);

                // Store the generated _id so future saves update instead of creating duplicates
                resumeData._id = data.resume._id;
            }

            toast.success("Resume Saved Successfully!");

            // Automatically download after saving
            if (downloadPDF) {
                await downloadPDF();
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to Save Resume");
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
                        onClick={() => {
                            alert("Button Clicked");
                            console.log("downloadPDF prop:", downloadPDF);

                            if (downloadPDF) {
                                downloadPDF();
                            }
                        }}
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