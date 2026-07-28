
import { motion } from "framer-motion";
import {
    HiOutlineDocumentText,
    HiOutlineSparkles,
    HiOutlineBriefcase,
    HiOutlineRectangleGroup,
    HiOutlinePaintBrush,
} from "react-icons/hi2";

const templates = [
    { id: "ats", label: "ATS", icon: HiOutlineDocumentText },
    { id: "modern", label: "Modern", icon: HiOutlineSparkles },
    { id: "professional", label: "Professional", icon: HiOutlineBriefcase },
    { id: "minimal", label: "Minimal", icon: HiOutlineRectangleGroup },
    { id: "creative", label: "Creative", icon: HiOutlinePaintBrush },
];

export default function TemplateTabs({
    selectedTemplate,
    setSelectedTemplate,
}) {
    return (
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-5">
            <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-800">
                    Resume Templates
                </h3>
                <p className="text-sm text-slate-500">
                    Switch templates instantly. Your data stays the same.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {templates.map((template) => {
                    const Icon = template.icon;
                    const active = selectedTemplate === template.id;

                    return (
                        <motion.button
                            whileHover={{ y: -2, scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            key={template.id}
                            onClick={() => setSelectedTemplate(template.id)}
                            className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all
                ${active
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                        >
                            <Icon size={18} />
                            {template.label}

                            {active && (
                                <motion.div
                                    layoutId="activeTemplate"
                                    className="absolute inset-0 rounded-full border-2 border-blue-300"
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
