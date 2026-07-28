import { motion } from "framer-motion";
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
    FaBullseye,
    FaArrowTrendUp,
    FaCircleCheck,
} from "react-icons/fa6";

function ATSScore({ analysis }) {
    const score = analysis.score || 0;

    const scoreColor =
        score >= 80
            ? "#16a34a"
            : score >= 60
                ? "#f59e0b"
                : "#ef4444";

    const bgColor =
        score >= 80
            ? "bg-green-100"
            : score >= 60
                ? "bg-yellow-100"
                : "bg-red-100";

    const textColor =
        score >= 80
            ? "text-green-600"
            : score >= 60
                ? "text-yellow-600"
                : "text-red-600";

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 overflow-hidden rounded-3xl bg-white shadow-lg"
        >
            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">

                <div className="flex items-center gap-3">

                    <FaBullseye className="text-3xl" />

                    <div>

                        <h2 className="text-3xl font-bold">
                            ATS Resume Score
                        </h2>

                        <p className="mt-1 text-blue-100">
                            Overall compatibility of your resume with Applicant Tracking Systems.
                        </p>

                    </div>

                </div>

            </div>

            <div className="grid gap-10 p-10 lg:grid-cols-2">

                {/* Left */}

                <div className="flex flex-col items-center">

                    <div className="h-56 w-56">

                        <CircularProgressbar
                            value={score}
                            text={`${score}%`}
                            styles={buildStyles({
                                textSize: "18px",
                                pathColor: scoreColor,
                                trailColor: "#e5e7eb",
                                textColor: scoreColor,
                            })}
                        />

                    </div>

                    <div
                        className={`mt-6 rounded-full px-6 py-2 font-semibold ${bgColor} ${textColor}`}
                    >
                        {analysis.rating}
                    </div>

                </div>

                {/* Right */}

                <div>

                    <h3 className="text-2xl font-bold text-slate-800">
                        Resume Performance
                    </h3>

                    <p className="mt-3 leading-8 text-slate-500">
                        Your resume has been analyzed for ATS compatibility,
                        formatting, keyword optimization, and section quality.
                    </p>

                    <div className="mt-8">

                        <div className="mb-3 flex justify-between font-medium">

                            <span>ATS Compatibility</span>

                            <span>{score}%</span>

                        </div>

                        <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                    width: `${score}%`,
                                }}
                                transition={{
                                    duration: 1,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                            />

                        </div>

                    </div>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4">

                            <FaCircleCheck className="text-green-600" />

                            <div>

                                <p className="font-semibold">
                                    ATS Compatibility
                                </p>

                                <p className="text-sm text-slate-500">
                                    Your resume is recognized by ATS systems.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-4">

                            <FaArrowTrendUp className="text-blue-600" />

                            <div>

                                <p className="font-semibold">
                                    Improvement Potential
                                </p>

                                <p className="text-sm text-slate-500">
                                    Increase your score further by following the AI recommendations.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default ATSScore;