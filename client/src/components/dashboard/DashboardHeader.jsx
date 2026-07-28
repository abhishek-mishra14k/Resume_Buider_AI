import { FaPlus, FaRobot, FaToolbox } from "react-icons/fa";
import Button from "../ui/Button";

function DashboardHeader({ user }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-8 py-10 text-white shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
            {greeting} 👋
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Welcome back,
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {user?.name || "Developer"}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Build professional resumes, optimize them with AI, improve your ATS
            score, and increase your chances of landing interviews.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-4">

          <Button to="/resume-builder" variant="white">
            <FaPlus />
            Create Resume
          </Button>

          <Button to="/career-tools" variant="glass">
            <FaToolbox />
            Career Tools
          </Button>

          <Button to="/ai-analyzer" variant="glass">
            <FaRobot />
            AI Analyzer
          </Button>

        </div>

      </div>
    </section>
  );
}

export default DashboardHeader;