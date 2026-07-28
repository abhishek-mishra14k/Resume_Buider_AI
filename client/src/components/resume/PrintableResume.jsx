import {
    FaEnvelope,
    FaPhone,
    FaGraduationCap,
    FaBriefcase,
    FaFolderOpen,
    FaCertificate,
} from "react-icons/fa";

function PrintableResume({ resumeData }) {
    return (
        <div
            id="resume"
            className="mx-auto min-h-[1123px] w-[794px] bg-white p-12 text-slate-800"
        >
            {/* Header */}

            <div className="border-b-4 border-blue-600 pb-6">

                <h1 className="text-4xl font-extrabold tracking-wide">
                    {resumeData.fullName || "Your Name"}
                </h1>

                <div className="mt-4 flex flex-wrap gap-8 text-sm text-slate-600">

                    <div className="flex items-center gap-2">
                        <FaEnvelope />
                        {resumeData.email}
                    </div>

                    <div className="flex items-center gap-2">
                        <FaPhone />
                        {resumeData.phone}
                    </div>

                </div>

            </div>

            {/* Summary */}

            <section className="mt-8">

                <h2 className="mb-3 border-b border-slate-300 pb-2 text-xl font-bold text-blue-700">
                    Professional Summary
                </h2>

                <p className="leading-8 text-slate-700">
                    {resumeData.summary}
                </p>

            </section>

            {/* Education */}

            <section className="mt-10">

                <div className="mb-5 flex items-center gap-2">

                    <FaGraduationCap className="text-blue-600" />

                    <h2 className="text-xl font-bold text-blue-700">
                        Education
                    </h2>

                </div>

                {resumeData.education.map((edu, index) => (
                    <div
                        key={index}
                        className="mb-6"
                    >
                        <h3 className="text-lg font-semibold">
                            {edu.degree}
                        </h3>

                        <p className="text-slate-600">
                            {edu.college}
                        </p>

                        <p className="text-sm text-slate-500">
                            {edu.year}
                        </p>

                    </div>
                ))}

            </section>

            {/* Experience */}

            <section className="mt-10">

                <div className="mb-5 flex items-center gap-2">

                    <FaBriefcase className="text-blue-600" />

                    <h2 className="text-xl font-bold text-blue-700">
                        Experience
                    </h2>

                </div>

                {resumeData.experience.map((exp, index) => (
                    <div
                        key={index}
                        className="mb-8"
                    >
                        <h3 className="text-lg font-semibold">
                            {exp.role}
                        </h3>

                        <p className="text-slate-600">
                            {exp.company}
                        </p>

                        <p className="text-sm text-slate-500">
                            {exp.duration}
                        </p>

                        <p className="mt-2 leading-7">
                            {exp.description}
                        </p>

                    </div>
                ))}

            </section>

            {/* Projects */}

            <section className="mt-10">

                <div className="mb-5 flex items-center gap-2">

                    <FaFolderOpen className="text-blue-600" />

                    <h2 className="text-xl font-bold text-blue-700">
                        Projects
                    </h2>

                </div>

                {resumeData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8"
                    >
                        <h3 className="text-lg font-semibold">
                            {project.title}
                        </h3>

                        <p className="mt-2">
                            {project.description}
                        </p>

                        <p className="mt-2 text-blue-600">
                            {project.techStack}
                        </p>

                    </div>
                ))}

            </section>

            {/* Skills */}

            <section className="mt-10">

                <h2 className="mb-5 border-b border-slate-300 pb-2 text-xl font-bold text-blue-700">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                    {resumeData.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="rounded bg-slate-100 px-3 py-2 text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </section>

            {/* Certificates */}

            <section className="mt-10">

                <div className="mb-5 flex items-center gap-2">

                    <FaCertificate className="text-blue-600" />

                    <h2 className="text-xl font-bold text-blue-700">
                        Certificates
                    </h2>

                </div>

                {resumeData.certificates.map((certificate, index) => (
                    <div
                        key={index}
                        className="mb-5"
                    >
                        <h3 className="font-semibold">
                            {certificate.name}
                        </h3>

                        <p>{certificate.issuer}</p>

                        <p className="text-sm text-slate-500">
                            {certificate.issueDate}
                        </p>

                    </div>
                ))}

            </section>

        </div>
    );
}

export default PrintableResume;