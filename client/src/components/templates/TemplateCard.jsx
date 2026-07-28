import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function TemplateCard({
    title,
    description,
    preview,
    value,
    selectedTemplate,
    setSelectedTemplate,
}) {
    const active = selectedTemplate === value;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedTemplate(value)}
            className={`group relative cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-300
      ${active
                    ? "border-blue-600 shadow-2xl ring-4 ring-blue-200"
                    : "border-slate-200 shadow-md hover:border-blue-300 hover:shadow-2xl"
                }`}
        >
            {/* Selected Badge */}

            {active && (
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    <FaCheckCircle />
                    Selected
                </div>
            )}

            {/* Preview */}

            <div
                className={`relative flex h-56 items-center justify-center overflow-hidden
        ${active
                        ? "bg-gradient-to-br from-blue-50 via-white to-blue-100"
                        : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
                    }`}
            >
                <div className="scale-95 transition-transform duration-300 group-hover:scale-100">
                    {preview}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Details */}

            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-800">
                        {title}
                    </h3>

                    {!active && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                            Click to Use
                        </span>
                    )}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    {description}
                </p>

                <button
                    className={`mt-6 w-full rounded-xl py-3 font-semibold transition-all duration-300 ${active
                            ? "bg-blue-600 text-white shadow-lg"
                            : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                >
                    {active ? "Currently Selected" : "Use This Template"}
                </button>
            </div>
        </motion.div>
    );
}

export default TemplateCard;