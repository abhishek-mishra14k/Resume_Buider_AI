import { Link } from "react-router-dom";
import {
  FaPlus,
  FaRobot,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";

const actions = [
  {
    title: "Create Resume",
    subtitle: "Build a new ATS-friendly resume",
    icon: <FaPlus />,
    color: "from-blue-500 to-indigo-600",
    to: "/resume-builder",
  },
  {
    title: "AI Analyzer",
    subtitle: "Check ATS score instantly",
    icon: <FaRobot />,
    color: "from-purple-500 to-pink-600",
    to: "/ai-analyzer",
  },
  {
    title: "Job Matcher",
    subtitle: "Match resume with job description",
    icon: <FaBriefcase />,
    color: "from-green-500 to-emerald-600",
    to: "/career-tools/job-matcher",
  },
  {
    title: "Cover Letter",
    subtitle: "Generate a professional cover letter",
    icon: <FaFileAlt />,
    color: "from-orange-500 to-red-500",
    to: "/career-tools/cover-letter",
  },
];

function QuickActions() {
  return (
    <section className="mb-12">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-800">
          ⚡ Quick Actions
        </h2>

        <p className="mt-2 text-slate-500">
          Jump directly to your most-used career tools.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.to}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-2xl
            "
          >

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

            {/* Icon */}
            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
            >
              {action.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-800">
              {action.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {action.subtitle}
            </p>

            <div className="mt-6 flex items-center font-semibold text-blue-600">
              Open →
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default QuickActions;