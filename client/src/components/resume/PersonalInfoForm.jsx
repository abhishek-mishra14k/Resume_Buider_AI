import {
    FaFileAlt,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Input from "../common/Input";
import AIImproveButton from "../AI/AIImproveButton";
import SectionCard from "./SectionCard";

function PersonalInfoForm({
    nextStep,
    resumeData,
    setResumeData,
}) {
    function handleChange(e) {
        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.35,
            }}
        >
            <SectionCard
                title="Personal Information"
                subtitle="Tell us about yourself so recruiters can quickly understand your profile."
            >
                <div className="grid gap-6 md:grid-cols-2">

                    <div>

                        <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                            <FaFileAlt className="text-blue-600" />
                            Resume Title
                        </label>

                        <Input
                            name="title"
                            placeholder="Frontend Developer Resume"
                            value={resumeData.title}
                            onChange={handleChange}
                        />

                    </div>

                    <div>

                        <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                            <FaUser className="text-blue-600" />
                            Full Name
                        </label>

                        <Input
                            name="fullName"
                            placeholder="John Doe"
                            value={resumeData.fullName}
                            onChange={handleChange}
                        />

                    </div>

                    <div>

                        <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                            <FaEnvelope className="text-blue-600" />
                            Email Address
                        </label>

                        <Input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={resumeData.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div>

                        <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                            <FaPhone className="text-blue-600" />
                            Phone Number
                        </label>

                        <Input
                            name="phone"
                            placeholder="+91 9876543210"
                            value={resumeData.phone}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                {/* Summary */}

                <div className="mt-8">

                    <label className="mb-2 block font-semibold text-slate-700">
                        Professional Summary
                    </label>

                    <textarea
                        rows={7}
                        name="summary"
                        value={resumeData.summary}
                        onChange={handleChange}
                        placeholder="Write a compelling summary highlighting your experience, strengths and career goals..."
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">

                        <div className="text-sm text-slate-500">
                            {resumeData.summary.length} Characters
                        </div>

                        <AIImproveButton
                            text={resumeData.summary}
                            type="Professional Summary"
                            onImproved={(improvedText) =>
                                setResumeData({
                                    ...resumeData,
                                    summary: improvedText,
                                })
                            }
                        />

                    </div>

                </div>

                {/* Footer */}

                <div className="mt-10 flex justify-end">

                    <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Continue

                        <FaArrowRight />

                    </button>

                </div>

            </SectionCard>
        </motion.div>
    );
}

export default PersonalInfoForm;