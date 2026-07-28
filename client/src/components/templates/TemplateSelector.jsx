import { FaPalette, FaCheckCircle } from "react-icons/fa";
import TemplateCard from "./TemplateCard";
import TemplateThumbnail from "./TemplateThumbnail";

function TemplateSelector({
    selectedTemplate,
    setSelectedTemplate,
}) {
    const templates = [
        {
            value: "ats",
            title: "ATS Classic",
            description: "ATS-friendly resume optimized for recruiters.",
        },
        {
            value: "modern",
            title: "Modern Blue",
            description: "Professional resume with a modern appearance.",
        },
        {
            value: "sidebar",
            title: "Creative Sidebar",
            description: "Creative resume with a stylish sidebar layout.",
        },
        {
            value: "professional",
            title: "Professional",
            description: "Elegant corporate resume for experienced professionals.",
        },
        {
            value: "minimal",
            title: "Minimal",
            description: "Simple, clean and distraction-free resume.",
        },
    ];

    const selected =
        templates.find((t) => t.value === selectedTemplate)?.title || "None";

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">

                <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>
                        <div className="flex items-center gap-3">
                            <FaPalette size={28} />
                            <h2 className="text-3xl font-bold">
                                Choose Your Template
                            </h2>
                        </div>

                        <p className="mt-3 max-w-2xl text-blue-100">
                            Select a professionally designed resume template.
                            You can switch between templates anytime without
                            losing your resume data.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                        <p className="text-sm text-blue-100">
                            Available Templates
                        </p>

                        <h3 className="text-4xl font-bold">
                            {templates.length}
                        </h3>

                    </div>

                </div>

            </div>

            {/* Selected Template */}

            <div className="flex flex-wrap items-center justify-between border-b bg-slate-50 px-8 py-4">

                <div className="flex items-center gap-2">

                    <FaCheckCircle className="text-green-600" />

                    <span className="font-medium text-slate-700">
                        Selected:
                    </span>

                    <span className="font-semibold text-blue-600">
                        {selected}
                    </span>

                </div>

                <span className="text-sm text-slate-500">
                    Click any template below to preview it.
                </span>

            </div>

            {/* Template Grid */}

            <div className="p-8">

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {templates.map((template) => (
                        <TemplateCard
                            key={template.value}
                            title={template.title}
                            description={template.description}
                            value={template.value}
                            selectedTemplate={selectedTemplate}
                            setSelectedTemplate={setSelectedTemplate}
                            preview={
                                <TemplateThumbnail
                                    type={template.value}
                                />
                            }
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default TemplateSelector;