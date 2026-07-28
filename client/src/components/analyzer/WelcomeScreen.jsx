import { motion } from "framer-motion";
import {
    FaRobot,
    FaBullseye,
    FaChartLine,
    FaKey,
    FaLightbulb,
    FaUpload,
    FaSearch,
    FaCheckCircle,
} from "react-icons/fa";

function WelcomeScreen() {
    const features = [
        {
            icon: <FaBullseye className="text-4xl text-blue-600" />,
            title: "ATS Score",
            desc: "Measure how ATS-friendly your resume is with an overall score out of 100.",
        },
        {
            icon: <FaChartLine className="text-4xl text-green-600" />,
            title: "Section Analysis",
            desc: "Analyze every section of your resume individually for improvement.",
        },
        {
            icon: <FaKey className="text-4xl text-amber-500" />,
            title: "Keyword Match",
            desc: "Discover missing keywords recruiters and ATS systems are looking for.",
        },
        {
            icon: <FaLightbulb className="text-4xl text-purple-600" />,
            title: "AI Suggestions",
            desc: "Receive smart recommendations to improve your resume instantly.",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
        >
            {/* Hero */}

            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-10 py-14 text-white shadow-xl">

                <div className="mx-auto max-w-4xl text-center">

                    <div className="mb-6 inline-flex rounded-full bg-white/20 p-5">
                        <FaRobot className="text-5xl" />
                    </div>

                    <h2 className="text-4xl font-bold">
                        Welcome to AI Resume Analyzer
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100 leading-8">
                        Upload your resume and let AI evaluate your ATS compatibility,
                        analyze keywords, score every section, and provide personalized
                        recommendations to maximize your interview chances.
                    </p>

                </div>

            </div>

            {/* Features */}

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {features.map((feature, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            y: -6,
                        }}
                        className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
                    >

                        <div>{feature.icon}</div>

                        <h3 className="mt-5 text-xl font-bold text-slate-800">
                            {feature.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-500">
                            {feature.desc}
                        </p>

                    </motion.div>

                ))}

            </div>

            {/* How It Works */}

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

                <h3 className="mb-8 text-center text-2xl font-bold">
                    How It Works
                </h3>

                <div className="grid gap-8 md:grid-cols-3">

                    <div className="text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                            <FaUpload className="text-2xl text-blue-600" />
                        </div>

                        <h4 className="mt-5 text-lg font-semibold">
                            Upload Resume
                        </h4>

                        <p className="mt-2 text-slate-500">
                            Upload a PDF or Word resume or choose one from your saved resumes.
                        </p>

                    </div>

                    <div className="text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <FaSearch className="text-2xl text-green-600" />
                        </div>

                        <h4 className="mt-5 text-lg font-semibold">
                            AI Analysis
                        </h4>

                        <p className="mt-2 text-slate-500">
                            Our AI evaluates ATS compatibility, keywords, formatting and resume quality.
                        </p>

                    </div>

                    <div className="text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <FaCheckCircle className="text-2xl text-purple-600" />
                        </div>

                        <h4 className="mt-5 text-lg font-semibold">
                            Improve Resume
                        </h4>

                        <p className="mt-2 text-slate-500">
                            Get actionable suggestions to increase your ATS score and stand out.
                        </p>

                    </div>

                </div>

            </div>

            {/* Tip */}

            <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8">

                <div className="flex items-start gap-4">

                    <div className="rounded-full bg-blue-600 p-3 text-white">
                        💡
                    </div>

                    <div>

                        <h3 className="text-xl font-bold text-blue-700">
                            Pro Tip
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Customize your resume for every job application. Matching your
                            resume with the job description can significantly improve ATS
                            compatibility and increase your chances of getting shortlisted.
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default WelcomeScreen;