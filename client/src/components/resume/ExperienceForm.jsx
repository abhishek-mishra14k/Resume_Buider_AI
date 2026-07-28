import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import AIImproveButton from "../AI/AIImproveButton";
import SectionCard from "./SectionCard";

function ExperienceForm({
  nextStep,
  prevStep,
  resumeData,
  setResumeData,
}) {
  const handleChange = (index, e) => {
    const values = [...resumeData.experience];
    values[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      experience: values,
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const values = [...resumeData.experience];
    values.splice(index, 1);

    setResumeData({
      ...resumeData,
      experience: values,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionCard
        title="Work Experience"
        subtitle="Showcase internships, jobs and professional experience."
      >
        {resumeData.experience.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <FaBriefcase className="mx-auto mb-4 text-5xl text-slate-400" />
            <p className="text-slate-500">
              No experience added yet.
            </p>
          </div>
        )}

        <div className="space-y-6">

          {resumeData.experience.map((exp, index) => (

            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">

                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                  <FaBriefcase className="text-blue-600" />
                  Experience {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
                >
                  <FaTrash />
                </button>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaBuilding className="text-blue-600" />
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Google"
                    value={exp.company}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaUserTie className="text-blue-600" />
                    Job Role
                  </label>

                  <input
                    type="text"
                    name="role"
                    placeholder="Frontend Developer Intern"
                    value={exp.role}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaCalendarAlt className="text-blue-600" />
                    Duration
                  </label>

                  <input
                    type="text"
                    name="duration"
                    placeholder="Jan 2025 - Jun 2025"
                    value={exp.duration}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium text-slate-700">
                    Responsibilities
                  </label>

                  <textarea
                    rows={6}
                    name="description"
                    placeholder="Describe your work, technologies used and achievements..."
                    value={exp.description}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-2xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">

                    <span className="text-sm text-slate-500">
                      {exp.description.length} Characters
                    </span>

                    <AIImproveButton
                      text={exp.description}
                      type="Work Experience"
                      onImproved={(improvedText) => {
                        const updatedExperience = [...resumeData.experience];
                        updatedExperience[index].description = improvedText;

                        setResumeData({
                          ...resumeData,
                          experience: updatedExperience,
                        });
                      }}
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

          <button
            type="button"
            onClick={addExperience}
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaPlus />
            Add Experience
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

export default ExperienceForm;