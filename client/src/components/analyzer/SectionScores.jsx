import { motion } from "framer-motion";
import {
    FaUser,
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaTools,
    FaCertificate,
    FaFileAlt,
} from "react-icons/fa";

const sectionIcons = {
    personal: <FaUser />,
    education: <FaGraduationCap />,
    experience: <FaBriefcase />,
    projects: <FaCode />,
    skills: <FaTools />,
    certifications: <FaCertificate />,
    summary: <FaFileAlt />,
};

function getStatus(score) {
    if (score >= 8)
        return {
            label: "Excellent",
            color: "bg-green-100 text-green-700",
            progress: "from-green-500 to-green-600",
        };

    if (score >= 6)
        return {
            label: "Good",
            color: "bg-yellow-100 text-yellow-700",
            progress: "from-yellow-500 to-orange-500",
        };

    return {
        label: "Needs Work",
        color: "bg-red-100 text-red-700",
        progress: "from-red-500 to-red-600",
    };
}

function SectionScores({ analysis }) {
    const sections = Object.entries(analysis.sectionScores || {});

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-3xl bg-white shadow-lg"
        >
            {/* Header */}

            <div className="rounded-t-3xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 text-white">

                <h2 className="text-3xl font-bold">
                    Section Performance
                </h2>

                <p className="mt-2 text-emerald-100">
                    Individual scores for each section of your resume.
                </p>

            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2">

                {sections.map(([section, score], index) => {
                    const status = getStatus(score);

                    return (
                        <motion.div
                            key={section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">

                                        {sectionIcons[section.toLowerCase()] || <FaFileAlt />}

                                    </div>

                                    <div>

                                        <h3 className="text-lg font-bold capitalize text-slate-800">
                                            {section}
                                        </h3>

                                        <span
                                            className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                                        >
                                            {status.label}
                                        </span>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <p className="text-2xl font-bold text-slate-800">
                                        {score}
                                        <span className="text-base text-slate-400">/10</span>
                                    </p>

                                </div>

                            </div>

                            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: `${score * 10}%`,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1,
                                    }}
                                    className={`h-full rounded-full bg-gradient-to-r ${status.progress}`}
                                />

                            </div>

                        </motion.div>
                    );
                })}

            </div>
        </motion.div>
    );
}

export default SectionScores;