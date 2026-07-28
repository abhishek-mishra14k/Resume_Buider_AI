import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateCard from "../components/templates/TemplateCard";
import TemplateThumbnail from "../components/templates/TemplateThumbnail";

function Templates() {
    const navigate = useNavigate();

    const [selectedTemplate, setSelectedTemplate] =
        useState("ats");

    const templates = [
        {
            value: "ats",
            title: "ATS Classic",
            description: "Best for Jobs",
        },
        {
            value: "modern",
            title: "Modern Blue",
            description: "Professional",
        },
        {
            value: "sidebar",
            title: "Sidebar",
            description: "Creative",
        },
        {
            value: "professional",
            title: "Professional",
            description: "Corporate",
        },
        {
            value: "minimal",
            title: "Minimal",
            description: "Simple",
        },
    ];

    const handleContinue = () => {
        navigate(`/resume-builder?template=${selectedTemplate}`);
    };

    return (
        <div className="min-h-screen bg-slate-50">

            <div className="mx-auto max-w-7xl px-6 py-12">

                <h1 className="text-5xl font-black">
                    Choose a Resume Template
                </h1>

                <p className="mt-3 text-slate-500">
                    Pick a professional resume template to begin.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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

                <div className="mt-10 flex justify-center">

                    <button
                        onClick={handleContinue}
                        className="rounded-xl bg-blue-600 px-10 py-4 font-bold text-white transition hover:bg-blue-700"
                    >
                        Use This Template
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Templates;