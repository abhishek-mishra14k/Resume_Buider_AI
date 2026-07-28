import { motion } from "framer-motion";
import {
  FaRobot,
  FaBolt,
  FaChartLine,
  FaFileDownload,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Resume Review",
    desc: "Instant ATS score, keyword optimization and personalized recommendations.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Resume Creation",
    desc: "Build professional resumes in minutes with our guided builder.",
  },
  {
    icon: <FaChartLine />,
    title: "Increase Interview Chances",
    desc: "Optimize your resume for recruiters and Applicant Tracking Systems.",
  },
  {
    icon: <FaFileDownload />,
    title: "Export Anytime",
    desc: "Download clean, high-quality PDF resumes whenever you need.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
            WHY CHOOSE US
          </p>

          <h2 className="mb-8 text-5xl font-black leading-tight text-slate-900">
            Build Better Resumes.
            <br />
            Land More Interviews.
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-500">
            ResumeAI combines intelligent AI analysis with modern resume
            templates to help you stand out in today's competitive job
            market.
          </p>

          <div className="space-y-6">

            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition-all hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="mb-1 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-slate-500">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-2xl">

            <h3 className="mb-8 text-3xl font-black">
              Resume Performance
            </h3>

            <div className="space-y-6">

              <div>
                <div className="mb-2 flex justify-between">
                  <span>ATS Score</span>
                  <span>91%</span>
                </div>

                <div className="h-3 rounded-full bg-white/20">

                  <div className="h-3 w-[91%] rounded-full bg-green-400"></div>

                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Keyword Match</span>
                  <span>94%</span>
                </div>

                <div className="h-3 rounded-full bg-white/20">

                  <div className="h-3 w-[94%] rounded-full bg-yellow-300"></div>

                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Formatting</span>
                  <span>98%</span>
                </div>

                <div className="h-3 rounded-full bg-white/20">

                  <div className="h-3 w-[98%] rounded-full bg-pink-400"></div>

                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;