
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function MinimalTemplate({ resumeData }) {
  return (
    <div className="mx-auto max-w-[210mm] bg-white px-12 py-14 text-gray-800 shadow-xl print:max-w-none print:px-8 print:py-6 print:shadow-none">
      <header className="border-b border-gray-300 pb-8 text-center">
        <h1 className="text-5xl font-light uppercase tracking-[0.35em]">
          {resumeData.fullName || "Your Name"}
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          {resumeData.title || "Full Stack Developer"}
        </p>

        <p className="mt-4 text-sm tracking-wide text-gray-500">
          {resumeData.email}
          {resumeData.email && resumeData.phone && " • "}
          {resumeData.phone}
        </p>
      </header>

      <Section title="Summary">
        <p className="leading-8 text-gray-700">
          {resumeData.summary || "Professional summary goes here."}
        </p>
      </Section>

      <Section title="Education">
        {(resumeData.education || []).map((edu, i) => (
          <div key={i} className="mb-6 flex justify-between gap-6 border-b border-gray-100 pb-4">
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.college}</p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{edu.year}</span>
          </div>
        ))}
      </Section>

      <Section title="Experience">
        {(resumeData.experience || []).map((exp, i) => (
          <div key={i} className="mb-8">
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="italic text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="mt-3 leading-8 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {(resumeData.projects || []).map((project, i) => (
          <div key={i} className="mb-8">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 leading-8">{project.description}</p>

            {project.techStack && (
              <p className="mt-2 text-sm text-gray-500">{project.techStack}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-5">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-black">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-black">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {(resumeData.skills || []).map((skill, i) => (
            <span key={i} className="rounded-full border border-gray-300 px-3 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Certificates">
        {(resumeData.certificates || []).map((c, i) => (
          <div key={i} className="mb-5 flex justify-between gap-4 border-b border-gray-100 pb-3">
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-gray-600">{c.issuer}</p>
              {c.credentialUrl && (
                <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="text-sm underline">
                  View Credential
                </a>
              )}
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{c.issueDate}</span>
          </div>
        ))}
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-lg font-semibold uppercase tracking-[0.25em]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default MinimalTemplate;
