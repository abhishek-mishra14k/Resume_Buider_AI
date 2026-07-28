import { FaFileAlt } from "react-icons/fa";
import {
    FaChartLine,
    FaPalette,
    FaArrowTrendUp,
} from "react-icons/fa6";

import Card from "../ui/Card";
import CountUpNumber from "../ui/CountUpNumber";

function DashboardStats({ resumes }) {
    const totalResumes = resumes.length;

    const analyzedResumes = resumes.filter(
        (resume) => resume.atsScore
    );

    const averageATS =
        analyzedResumes.length > 0
            ? Math.round(
                analyzedResumes.reduce(
                    (sum, resume) => sum + resume.atsScore,
                    0
                ) / analyzedResumes.length
            )
            : 0;

    const templatesUsed = new Set(
        resumes.map((resume) => resume.template || "modern")
    ).size;

    

    const stats = [
        {
            title: "Total Resumes",
            value: totalResumes,
            subtitle: "Created so far",
            icon: <FaFileAlt />,
            bg: "from-blue-500 to-indigo-600",
        },
        {
            title: "Average ATS",
            value: averageATS,
            suffix: "%",
            subtitle: "Across analyzed resumes",
            icon: <FaChartLine />,
            bg: "from-green-500 to-emerald-600",
        },
        {
            title: "Templates Used",
            value: templatesUsed,
            subtitle: "Different resume styles",
            icon: <FaPalette />,
            bg: "from-purple-500 to-pink-600",
        },
        {
            title: "Resume Growth",
            value: 28,
            suffix: "%",
            subtitle: "Compared to last month",
            icon: <FaArrowTrendUp />,
            bg: "from-orange-500 to-red-500",
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
                <Card
                    key={index}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    {/* Background Glow */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

                    <div className="relative flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                {stat.title}
                            </p>

                            <div className="mt-4 flex items-end gap-1">
                                <span className="text-4xl font-black text-slate-800">
                                    <CountUpNumber value={stat.value} />
                                </span>

                                {stat.suffix && (
                                    <span className="mb-1 text-xl font-bold text-slate-700">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>

                            <p className="mt-3 text-sm text-slate-500">
                                {stat.subtitle}
                            </p>
                        </div>

                        <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.bg} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                        >
                            {stat.icon}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default DashboardStats;