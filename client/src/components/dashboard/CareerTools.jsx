import {
  FaBullseye,
  FaFileAlt,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";

import ToolCard from "./ToolCard";

const tools = [
  {
    title: "AI Job Matcher",
    description:
      "Compare your resume against any job description and receive an ATS match score with keyword analysis.",
    icon: <FaBullseye />,
    color: "bg-blue-600",
    to: "/career-tools/job-matcher",
    badge: "Popular",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Generate personalized cover letters tailored to your resume and target company within seconds.",
    icon: <FaFileAlt />,
    color: "bg-green-600",
    to: "/career-tools/cover-letter",
    badge: "New",
  },
  {
    title: "Interview Questions",
    description:
      "Practice AI-generated interview questions based on your resume and preferred role.",
    icon: <FaMicrophone />,
    color: "bg-purple-600",
    to: "/career-tools/interview",
    badge: "AI",
  },
  {
    title: "Resume Analyzer",
    description:
      "Get ATS score, keyword suggestions, strengths, and improvement tips for your resume.",
    icon: <FaChartLine />,
    color: "bg-orange-500",
    to: "/ai-analyzer",
    badge: "Featured",
  },
];

function CareerTools() {
  return (
    <section className="mb-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-800">
            🚀 Career Tools
          </h2>

          <p className="mt-2 text-slate-500">
            Powerful AI tools to help you create better resumes and
            prepare for interviews.
          </p>

        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          4 Tools
        </span>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            color={tool.color}
            to={tool.to}
            badge={tool.badge}
          />
        ))}

      </div>

    </section>
  );
}

export default CareerTools;