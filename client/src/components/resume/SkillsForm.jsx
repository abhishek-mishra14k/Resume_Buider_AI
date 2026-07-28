import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPlus,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaMagic,
} from "react-icons/fa";

import AIImproveButton from "../AI/AIImproveButton";
import SectionCard from "./SectionCard";

function SkillsForm({
  nextStep,
  prevStep,
  resumeData,
  setResumeData,
}) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;

    if (resumeData.skills.includes(skill.trim())) return;

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill.trim()],
    });

    setSkill("");
  };

  const removeSkill = (index) => {
    const values = [...resumeData.skills];
    values.splice(index, 1);

    setResumeData({
      ...resumeData,
      skills: values,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionCard
        title="Technical Skills"
        subtitle="Highlight the technologies and tools you're comfortable working with."
      >
        <div className="space-y-8">

          <div className="flex flex-col gap-4 md:flex-row">

            <div className="relative flex-1">

              <FaCode className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="React, Node.js, MongoDB..."
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              type="button"
              onClick={addSkill}
              className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <FaPlus />
              Add Skill
            </button>

          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

            <div className="mb-3 flex items-center gap-2 font-semibold text-blue-700">

              <FaMagic />

              AI Skill Suggestions

            </div>

            <AIImproveButton
              text={resumeData.skills.join(", ")}
              type="Technical Skills"
              onImproved={(improvedSkills) => {

                const skillArray = improvedSkills
                  .split(",")
                  .map((item) => item.trim())
                  .filter((item) => item);

                const uniqueSkills = [...new Set(skillArray)];

                setResumeData({
                  ...resumeData,
                  skills: uniqueSkills,
                });

              }}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-700">
              Added Skills
            </h3>

            {resumeData.skills.length === 0 ? (

              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-10 text-center text-slate-500">
                No skills added yet.
              </div>

            ) : (

              <div className="flex flex-wrap gap-4">

                {resumeData.skills.map((item, index) => (

                  <motion.div
                    key={index}
                    layout
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-md"
                  >

                    <span>{item}</span>

                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="rounded-full bg-white/20 p-1 transition hover:bg-red-500"
                    >
                      <FaTimes size={12} />
                    </button>

                  </motion.div>

                ))}

              </div>

            )}

          </div>

          <div className="flex justify-between pt-4">

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

export default SkillsForm;