import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo & Description */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              ResumeAI
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Build ATS-friendly resumes, analyze resumes with AI,
              and generate professional cover letters—all in one place.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">

              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link
                to="/resume-builder"
                className="hover:text-blue-400 transition"
              >
                Resume Builder
              </Link>

              <Link
                to="/ai-analyzer"
                className="hover:text-blue-400 transition"
              >
                AI Analyzer
              </Link>

              <Link
                to="/career-tools/cover-letter"
                className="hover:text-blue-400 transition"
              >
                Cover Letter Generator
              </Link>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/abhishek-mishra14k"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-mishra-14k/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:abhishekmishra77098@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="mt-5 text-slate-300">
              Feel free to connect for collaborations and opportunities.
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-400">

          <p>
            © {new Date().getFullYear()} ResumeAI. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Built with ❤️ using React, Node.js, Express, MongoDB & AI.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;