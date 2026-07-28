import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaExternalLinkAlt,
  FaUserGraduate,
  FaCertificate,
  FaTools,
  FaBriefcase,
  FaFolderOpen,
} from "react-icons/fa";

function CreativeTemplate({ resumeData }) {
  return (
    <div className="mx-auto w-full max-w-[210mm] overflow-hidden rounded-xl bg-white shadow-2xl print:max-w-none print:rounded-none print:shadow-none">

      <div className="grid min-h-[950px] grid-cols-10">

        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="col-span-4 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900 px-7 py-10 text-white">

          {/* Avatar */}

          <div className="flex flex-col items-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-cyan-400 text-5xl font-bold shadow-lg">

              {resumeData.fullName
                ? resumeData.fullName.charAt(0).toUpperCase()
                : "A"}

            </div>

            <h1 className="mt-5 text-center text-3xl font-bold tracking-wide">
              {resumeData.fullName || "Your Name"}
            </h1>

            <p className="mt-2 rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide text-blue-100">

              {resumeData.title || "Software Developer"}

            </p>

          </div>

          {/* CONTACT */}

          <section className="mt-10">

            <h2 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-cyan-300">
              Contact
            </h2>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3">

                <div className="mt-1 rounded-full bg-white/10 p-2">
                  <FaEnvelope size={12} />
                </div>

                <span className="break-all text-gray-200">
                  {resumeData.email || "example@email.com"}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-white/10 p-2">
                  <FaPhone size={12} />
                </div>

                <span className="text-gray-200">
                  {resumeData.phone || "+91 XXXXX XXXXX"}
                </span>

              </div>

            </div>

          </section>

          {/* SKILLS */}

          <section className="mt-10">

            <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-cyan-300">

              <FaTools />

              Skills

            </h2>

            <div className="flex flex-wrap gap-2">

              {(resumeData.skills || []).length > 0 ? (

                resumeData.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="rounded-full border border-cyan-300/40 bg-white/10 px-3 py-2 text-xs font-medium tracking-wide"
                  >
                    {skill}
                  </span>

                ))

              ) : (

                <span className="text-sm text-gray-300">
                  Add your skills
                </span>

              )}

            </div>

          </section>

          {/* EDUCATION */}

          <section className="mt-10">

            <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-cyan-300">

              <FaUserGraduate />

              Education

            </h2>

            {(resumeData.education || []).map((edu, index) => (

              <div
                key={index}
                className="relative mb-6 border-l-2 border-cyan-400 pl-4"
              >

                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-400"></div>

                <h3 className="font-semibold">

                  {edu.degree || "Degree"}

                </h3>

                <p className="mt-1 text-sm text-blue-100">

                  {edu.college}

                </p>

                <p className="mt-1 text-xs text-blue-200">

                  {edu.year}

                </p>

              </div>

            ))}

          </section>          {/* CERTIFICATES */}

          <section className="mt-10">

            <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-cyan-300">

              <FaCertificate />

              Certificates

            </h2>

            {(resumeData.certificates || []).length > 0 ? (

              resumeData.certificates.map((certificate, index) => (

                <div
                  key={index}
                  className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4"
                >

                  <h3 className="font-semibold">

                    {certificate.name || "Certificate"}

                  </h3>

                  <p className="mt-1 text-sm text-blue-100">

                    {certificate.issuer}

                  </p>

                  <p className="mt-1 text-xs text-blue-200">

                    {certificate.issueDate}

                  </p>

                </div>

              ))

            ) : (

              <p className="text-sm text-gray-300">
                No certificates added.
              </p>

            )}

          </section>

        </aside>

        {/* ================= RIGHT CONTENT ================= */}

        <main className="col-span-8 bg-white px-9 py-10">

          {/* SUMMARY */}

          <section>

            <h2 className="mb-5 border-l-4 border-blue-700 pl-4 text-xl font-bold uppercase tracking-wide text-slate-800">

              Professional Summary

            </h2>

            <p className="leading-8 text-slate-600">

              {resumeData.summary || "Write a short professional summary here."}

            </p>

          </section>

          {/* EXPERIENCE */}

          <section className="mt-10">

            <h2 className="mb-7 flex items-center gap-3 border-b pb-3 text-xl font-bold uppercase text-slate-800">

              <FaBriefcase className="text-blue-700" />

              Experience

            </h2>

            {(resumeData.experience || []).map((exp, index) => (

              <div
                key={index}
                className="relative mb-8 border-l-2 border-blue-600 pl-6"
              >

                <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-blue-600"></div>

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>

                    <h3 className="text-lg font-semibold text-slate-800">

                      {exp.role}

                    </h3>

                    <p className="font-medium text-blue-700">

                      {exp.company}

                    </p>

                  </div>

                  <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">

                    {exp.duration}

                  </span>

                </div>

                <p className="mt-4 leading-7 text-slate-600">

                  {exp.description}

                </p>

              </div>

            ))}

          </section>

          {/* PROJECTS */}

          <section className="mt-10">

            <h2 className="mb-7 flex items-center gap-3 border-b pb-3 text-xl font-bold uppercase text-slate-800">

              <FaFolderOpen className="text-blue-700" />

              Projects

            </h2>

            {(resumeData.projects || []).map((project, index) => (

              <div
                key={index}
                className="mb-7 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:shadow-lg"
              >

                <h3 className="text-lg font-semibold text-slate-800">

                  {project.title}

                </h3>

                <p className="mt-3 leading-7 text-slate-600">

                  {project.description}

                </p>

                {project.techStack && (

                  <p className="mt-3 text-sm">

                    <span className="font-semibold text-slate-800">

                      Tech Stack:

                    </span>{" "}

                    <span className="text-blue-700">

                      {project.techStack}

                    </span>

                  </p>

                )}

                <div className="mt-5 flex flex-wrap gap-6">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 transition hover:text-blue-700"
                    >

                      <FaGithub />

                      GitHub

                    </a>

                  )}

                  {project.liveDemo && (

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 transition hover:text-green-700"
                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                  )}

                </div>

              </div>

            ))}

          </section>

        </main>

      </div>

    </div>

  );
}

export default CreativeTemplate;