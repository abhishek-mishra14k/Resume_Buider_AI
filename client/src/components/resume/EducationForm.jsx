import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import SectionCard from "./SectionCard";

function EducationForm({
  nextStep,
  prevStep,
  resumeData,
  setResumeData,
}) {
  const handleChange = (index, e) => {
    const values = [...resumeData.education];
    values[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      education: values,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          degree: "",
          college: "",
          year: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const values = [...resumeData.education];
    values.splice(index, 1);

    setResumeData({
      ...resumeData,
      education: values,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionCard
        title="Education"
        subtitle="Add all your academic qualifications."
      >
        <div className="space-y-6">

          {resumeData.education.map((edu, index) => (

            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">

                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                  <FaGraduationCap className="text-blue-600" />
                  Education {index + 1}
                </h3>

                {resumeData.education.length > 1 && (
                  <button
                    onClick={() => removeEducation(index)}
                    className="rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
                  >
                    <FaTrash />
                  </button>
                )}

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaGraduationCap className="text-blue-600" />
                    Degree
                  </label>

                  <input
                    type="text"
                    name="degree"
                    placeholder="B.Tech Computer Science"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaUniversity className="text-blue-600" />
                    College
                  </label>

                  <input
                    type="text"
                    name="college"
                    placeholder="ABC University"
                    value={edu.college}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaCalendarAlt className="text-blue-600" />
                    Passing Year
                  </label>

                  <input
                    type="text"
                    name="year"
                    placeholder="2026"
                    value={edu.year}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>
            </motion.div>

          ))}

          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaPlus />
            Add Education
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

export default EducationForm;