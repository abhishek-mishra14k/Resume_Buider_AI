import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ModernTemplate({ resumeData }) {
  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white px-8 py-8 text-gray-800 shadow-xl print:shadow-none print:max-w-none">

      {/* ================= HEADER ================= */}

      <header className="border-b-2 border-blue-600 pb-5">

        <h1 className="text-3xl font-bold tracking-wide text-gray-900">
          {resumeData.fullName || "Your Name"}
        </h1>

        <p className="mt-1 text-base font-semibold text-blue-600">
          {resumeData.title || "Frontend Developer"}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">

          {resumeData.email && (
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              {resumeData.email}
            </span>
          )}

          {resumeData.phone && (
            <span className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              {resumeData.phone}
            </span>
          )}

        </div>

      </header>

      {/* ================= SUMMARY ================= */}

      <Section title="Professional Summary">

        <p className="text-sm leading-6 text-gray-700">
          {resumeData.summary ||
            "Write a short professional summary describing your experience, strengths and career goals."}
        </p>

      </Section>

      {/* ================= EDUCATION ================= */}

      <Section title="Education">

        {(resumeData.education || []).map((edu, index) => (

          <div
            key={index}
            className="mb-4 border-b border-gray-100 pb-3 last:border-none"
          >

            <div className="flex items-start justify-between">

              <div>

                <h3 className="text-base font-semibold text-gray-900">
                  {edu.degree || "Degree"}
                </h3>

                <p className="text-sm text-gray-600">
                  {edu.college || "College Name"}
                </p>

              </div>

              <span className="text-sm font-medium text-gray-500">
                {edu.year}
              </span>

            </div>

          </div>

        ))}

      </Section>

      {/* ================= EXPERIENCE ================= */}

      <Section title="Experience">

        {(resumeData.experience || []).map((exp, index) => (

          <div
            key={index}
            className="mb-5 border-b border-gray-100 pb-4 last:border-none"
          >

            <div className="flex justify-between gap-3">

              <div>

                <h3 className="text-base font-semibold text-gray-900">
                  {exp.role || "Job Role"}
                </h3>

                <p className="text-sm font-medium text-blue-600">
                  {exp.company}
                </p>

              </div>

              <span className="text-sm text-gray-500">
                {exp.duration}
              </span>

            </div>

            {exp.description && (

              <p className="mt-2 text-sm leading-6 text-gray-700">
                {exp.description}
              </p>

            )}

          </div>

        ))}

      </Section>
            {/* ================= PROJECTS ================= */}

      <Section title="Projects">

        {(resumeData.projects || []).map((project, index) => (

          <div
            key={index}
            className="mb-5 border-b border-gray-100 pb-4 last:border-none"
          >

            <div className="flex items-center justify-between">

              <h3 className="text-base font-semibold text-gray-900">
                {project.title || "Project Title"}
              </h3>

            </div>

            {project.description && (
              <p className="mt-2 text-sm leading-6 text-gray-700">
                {project.description}
              </p>
            )}

            {project.techStack && (
              <p className="mt-2 text-sm">
                <span className="font-semibold text-gray-800">
                  Tech Stack:
                </span>{" "}
                <span className="text-gray-600">
                  {project.techStack}
                </span>
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-5">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
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
                  className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </Section>

      {/* ================= SKILLS ================= */}

      <Section title="Skills">

        <div className="flex flex-wrap gap-2">

          {(resumeData.skills || []).length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              Add your skills here.
            </p>
          )}

        </div>

      </Section>

      {/* ================= CERTIFICATES ================= */}

      <Section title="Certificates">

        {(resumeData.certificates || []).map((certificate, index) => (

          <div
            key={index}
            className="mb-4 border-b border-gray-100 pb-3 last:border-none"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="text-base font-semibold text-gray-900">
                  {certificate.name || "Certificate Name"}
                </h3>

                <p className="text-sm text-gray-600">
                  {certificate.issuer}
                </p>

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                  >
                    View Credential
                  </a>
                )}

              </div>

              <span className="text-sm text-gray-500">
                {certificate.issueDate}
              </span>

            </div>

          </div>

        ))}

      </Section>

    </div>
  );
}

/* ================= SECTION COMPONENT ================= */

function Section({ title, children }) {
  return (
    <section className="mt-7">

      <h2 className="mb-4 border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-[2px] text-gray-800">
        {title}
      </h2>

      {children}

    </section>
  );
}

export default ModernTemplate;