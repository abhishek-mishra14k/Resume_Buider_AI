import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    FaBullseye,
    FaRobot,
    FaClock,
    FaFileAlt,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaBullseye />,
        value: 98,
        suffix: "%",
        title: "ATS Accuracy",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: <FaRobot />,
        value: 25,
        suffix: "+",
        title: "AI Checks",
        color: "text-purple-600",
        bg: "bg-purple-100",
    },
    {
        icon: <FaFileAlt />,
        value: 10000,
        suffix: "+",
        title: "Resumes Analyzed",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: <FaClock />,
        value: 10,
        suffix: "s",
        title: "Average Analysis",
        color: "text-orange-600",
        bg: "bg-orange-100",
    },
];

function AnalyzerStats() {
    return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat, index) => (

                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.4,
                    }}
                    whileHover={{
                        y: -6,
                        scale: 1.02,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
                >

                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${stat.bg} ${stat.color}`}
                    >
                        {stat.icon}
                    </div>

                    <h2 className="mt-5 text-4xl font-bold text-slate-800">
                        {stat.value}
                        {stat.suffix}
                    </h2>

                    <p className="mt-2 text-slate-500">
                        {stat.title}
                    </p>

                </motion.div>

            ))}

        </div>
    );
}

export default AnalyzerStats;