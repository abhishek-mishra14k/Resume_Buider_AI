import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaFileAlt,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import AIImproveButton from "../AI/AIImproveButton";
import SectionCard from "./SectionCard";

function ProjectsForm({
  nextStep,
  prevStep,
  resumeData,
  setResumeData,
}) {

  const handleChange = (index, e) => {
    const values = [...resumeData.projects];
    values[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      projects: values,
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          description: "",
          techStack: "",
          github: "",
          liveDemo: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    const values = [...resumeData.projects];
    values.splice(index, 1);

    setResumeData({
      ...resumeData,
      projects: values,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionCard
        title="Projects"
        subtitle="Highlight your best projects to impress recruiters."
      >
        {resumeData.projects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <FaFolderOpen className="mx-auto mb-4 text-5xl text-slate-400" />
            <p className="text-slate-500">
              No projects added yet.
            </p>
          </div>
        )}

        <div className="space-y-6">

          {resumeData.projects.map((project, index) => (

            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >

              <div className="mb-5 flex items-center justify-between">

                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                  <FaFolderOpen className="text-blue-600" />
                  Project {index + 1}
                </h3>

                {resumeData.projects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
                  >
                    <FaTrash />
                  </button>
                )}

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div className="md:col-span-2">

                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaFolderOpen className="text-blue-600" />
                    Project Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    placeholder="AI Resume Builder"
                    value={project.title}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div className="md:col-span-2">

                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaFileAlt className="text-blue-600" />
                    Project Description
                  </label>

                  <textarea
                    rows="6"
                    name="description"
                    placeholder="Describe the problem, your solution, features and impact..."
                    value={project.description}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-2xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">

                    <span className="text-sm text-slate-500">
                      {project.description.length} Characters
                    </span>

                    <AIImproveButton
                      text={project.description}
                      type="Project Description"
                      onImproved={(improvedText) => {
                        const updatedProjects = [...resumeData.projects];
                        updatedProjects[index].description = improvedText;

                        setResumeData({
                          ...resumeData,
                          projects: updatedProjects,
                        });
                      }}
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaCode className="text-blue-600" />
                    Tech Stack
                  </label>

                  <input
                    type="text"
                    name="techStack"
                    placeholder="React, Node.js, Express, MongoDB"
                    value={project.techStack}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div>

                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaGithub className="text-blue-600" />
                    GitHub Repository
                  </label>

                  <input
                    type="url"
                    name="github"
                    placeholder="https://github.com/username/project"
                    value={project.github}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div className="md:col-span-2">

                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaExternalLinkAlt className="text-blue-600" />
                    Live Demo
                  </label>

                  <input
                    type="url"
                    name="liveDemo"
                    placeholder="https://your-project.vercel.app"
                    value={project.liveDemo}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>

            </motion.div>

          ))}

          <button
            type="button"
            onClick={addProject}
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaPlus />
            Add Project
          </button>

          <div className="mt-8 flex justify-between">

            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 rounded-2xl bg-slate-200 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
            >
              <FaArrowLeft />
              Previous
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Next
              <FaArrowRight />
            </button>

          </div>

        </div>

      </SectionCard>
    </motion.div>
  );
}

export default ProjectsForm;