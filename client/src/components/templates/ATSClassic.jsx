import {
    FaEnvelope,
    FaPhone,
    FaGraduationCap,
    FaBriefcase,
    FaFolderOpen,
    FaCertificate,
    FaCode,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

function ATSClassic({ resumeData }) {
    return (
        <div className="mx-auto w-full max-w-[210mm] bg-white p-10 text-slate-800 shadow-xl print:max-w-none print:shadow-none print:p-8">

            {/* ================= HEADER ================= */}

            <header className="border-b-2 border-slate-800 pb-6 text-center">

                <h1 className="text-4xl font-extrabold uppercase tracking-[2px] text-slate-900">
                    {resumeData.fullName || "Your Name"}
                </h1>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-slate-500" />
                        <span>{resumeData.email || "example@gmail.com"}</span>
                    </div>

                    <span className="hidden h-4 w-px bg-slate-300 sm:block"></span>

                    <div className="flex items-center gap-2">
                        <FaPhone className="text-slate-500" />
                        <span>{resumeData.phone || "+91 XXXXX XXXXX"}</span>
                    </div>

                </div>

            </header>

            {/* ================= SUMMARY ================= */}

            <section className="mt-8">

                <div className="mb-4 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">
                        Professional Summary
                    </h2>

                </div>

                <p className="leading-7 text-slate-700">
                    {resumeData.summary ||
                        "Passionate software developer with strong problem-solving skills and experience building scalable web applications."}
                </p>

            </section>

            {/* ================= EDUCATION ================= */}

            <section className="mt-8">

                <div className="mb-5 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <FaGraduationCap className="text-slate-700" />

                    <h2 className="text-lg font-bold uppercase tracking-wide">
                        Education
                    </h2>

                </div>

                {(resumeData.education || []).map((edu, index) => (

                    <div
                        key={index}
                        className="mb-6 border-l-2 border-slate-200 pl-4"
                    >

                        <div className="flex flex-wrap items-start justify-between gap-2">

                            <div>

                                <h3 className="text-base font-semibold text-slate-900">
                                    {edu.degree}
                                </h3>

                                <p className="mt-1 text-slate-700">
                                    {edu.college}
                                </p>

                            </div>

                            <span className="rounded bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">

                                {edu.year}

                            </span>

                        </div>

                    </div>

                ))}

            </section>

            {/* ================= EXPERIENCE ================= */}

            <section className="mt-8">

                <div className="mb-5 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <FaBriefcase className="text-slate-700" />

                    <h2 className="text-lg font-bold uppercase tracking-wide">
                        Experience
                    </h2>

                </div>

                {(resumeData.experience || []).map((exp, index) => (

                    <div
                        key={index}
                        className="mb-8 border-l-2 border-slate-200 pl-4"
                    >

                        <div className="flex flex-wrap items-start justify-between gap-3">

                            <div>

                                <h3 className="text-base font-semibold text-slate-900">
                                    {exp.role}
                                </h3>

                                <p className="mt-1 font-medium text-slate-700">
                                    {exp.company}
                                </p>

                            </div>

                            <span className="rounded bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">

                                {exp.duration}

                            </span>

                        </div>

                        <p className="mt-3 leading-7 text-slate-700">
                            {exp.description}
                        </p>

                    </div>

                ))}

            </section>
            {/* ================= PROJECTS ================= */}

            <section className="mt-8">

                <div className="mb-5 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <FaFolderOpen className="text-slate-700" />

                    <h2 className="text-lg font-bold uppercase tracking-wide">
                        Projects
                    </h2>

                </div>

                {(resumeData.projects || []).map((project, index) => (

                    <div
                        key={index}
                        className="mb-8 border-l-2 border-slate-200 pl-4"
                    >

                        <h3 className="text-base font-semibold text-slate-900">
                            {project.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-700">
                            {project.description}
                        </p>

                        {project.techStack && (

                            <p className="mt-3 text-sm font-medium text-slate-700">

                                <span className="font-semibold">
                                    Tech Stack:
                                </span>{" "}
                                {project.techStack}

                            </p>

                        )}

                        <div className="mt-4 flex flex-wrap gap-5">

                            {project.github && (

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                                >
                                    <FaGithub />
                                    GitHub Repository
                                </a>

                            )}

                            {project.liveDemo && (

                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
                                >
                                    <FaExternalLinkAlt />
                                    Live Demo
                                </a>

                            )}

                        </div>

                    </div>

                ))}

            </section>

            {/* ================= SKILLS ================= */}

            <section className="mt-8">

                <div className="mb-5 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <FaCode className="text-slate-700" />

                    <h2 className="text-lg font-bold uppercase tracking-wide">
                        Skills
                    </h2>

                </div>

                <div className="flex flex-wrap gap-3">

                    {(resumeData.skills || []).map((skill, index) => (

                        <span
                            key={index}
                            className="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                            {skill}
                        </span>

                    ))}

                </div>

            </section>

            {/* ================= CERTIFICATES ================= */}

            <section className="mt-8">

                <div className="mb-5 flex items-center gap-2 border-b border-slate-300 pb-2">

                    <FaCertificate className="text-slate-700" />

                    <h2 className="text-lg font-bold uppercase tracking-wide">
                        Certificates
                    </h2>

                </div>

                {(resumeData.certificates || []).map((certificate, index) => (

                    <div
                        key={index}
                        className="mb-6 border-l-2 border-slate-200 pl-4"
                    >

                        <h3 className="text-base font-semibold text-slate-900">
                            {certificate.name}
                        </h3>

                        <p className="mt-1 text-slate-700">
                            {certificate.issuer}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            {certificate.issueDate}
                        </p>

                        {certificate.credentialUrl && (

                            <a
                                href={certificate.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                            >
                                <FaExternalLinkAlt />
                                View Credential
                            </a>

                        )}

                    </div>

                ))}

            </section>

        </div>
    );
}

export default ATSClassic;