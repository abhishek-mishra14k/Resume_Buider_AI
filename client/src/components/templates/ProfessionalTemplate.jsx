import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProfessionalTemplate({ resumeData }) {
  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white px-8 py-8 text-gray-900 shadow-xl print:max-w-none print:shadow-none">

      {/* ================= HEADER ================= */}

      <header className="border-b-2 border-gray-800 pb-5">

        <h1 className="text-3xl font-bold uppercase tracking-[3px]">
          {resumeData.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-base text-gray-600">
          {resumeData.title || "Professional Title"}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">

          {resumeData.email && (
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-gray-700" />
              {resumeData.email}
            </span>
          )}

          {resumeData.phone && (
            <span className="flex items-center gap-2">
              <FaPhone className="text-gray-700" />
              {resumeData.phone}
            </span>
          )}

        </div>

      </header>

      {/* ================= SUMMARY ================= */}

      <Section title="Professional Summary">

        <p className="text-sm leading-6 text-gray-700">
          {resumeData.summary ||
            "Write a concise professional summary highlighting your strengths, experience and career objectives."}
        </p>

      </Section>

      {/* ================= EDUCATION ================= */}

      <Section title="Education">

        {(resumeData.education || []).map((edu, index) => (

          <div
            key={index}
            className="mb-4 border-b border-gray-200 pb-3 last:border-none"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="text-base font-semibold">
                  {edu.degree || "Degree"}
                </h3>

                <p className="text-sm text-gray-600">
                  {edu.college || "College Name"}
                </p>

              </div>

              <span className="text-sm text-gray-500">
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
            className="mb-5 border-b border-gray-200 pb-4 last:border-none"
          >

            <div className="flex justify-between gap-3">

              <div>

                <h3 className="text-base font-semibold">
                  {exp.role || "Job Role"}
                </h3>

                <p className="text-sm italic text-gray-600">
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
            className="mb-5 border-b border-gray-200 pb-4 last:border-none"
          >

            <h3 className="text-base font-semibold">
              {project.title || "Project Title"}
            </h3>

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
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
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
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
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
                className="rounded-sm border border-gray-400 px-3 py-1 text-xs font-medium tracking-wide"
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
            className="mb-4 border-b border-gray-200 pb-3 last:border-none"
          >

            <div className="flex justify-between gap-4">

              <div>

                <h3 className="text-base font-semibold">
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
                    className="mt-2 inline-block text-sm text-gray-700 hover:underline"
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

/* ================= SECTION ================= */

function Section({ title, children }) {
  return (
    <section className="mt-7">

      <h2 className="mb-4 border-b-2 border-gray-800 pb-2 text-sm font-bold uppercase tracking-[2px] text-gray-800">
        {title}
      </h2>

      {children}

    </section>
  );
}

export default ProfessionalTemplate;