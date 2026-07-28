import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import PersonalInfoForm from "../components/resume/PersonalInfoForm";
import EducationForm from "../components/resume/EducationForm";
import ExperienceForm from "../components/resume/ExperienceForm";
import ProjectsForm from "../components/resume/ProjectsForm";
import SkillsForm from "../components/resume/SkillsForm";
import CertificateForm from "../components/resume/CertificateForm";
import ResumePreview from "../components/resume/ResumePreview";
import ResumeStepper from "../components/resume/ResumeStepper";
import TemplateTabs from "../components/templates/TemplateTabs";
import api from "../services/api";
import PreviewStep from "../components/resume/PreviewStep";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function ResumeBuilder() {
  const { id } = useParams();

  const printRef = useRef(null);

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const [resumeData, setResumeData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    education: [{ degree: "", college: "", year: "" }],
    experience: [
      {
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        techStack: "",
        github: "",
        liveDemo: "",
      },
    ],
    skills: [],
    certificates: [
      {
        name: "",
        issuer: "",
        issueDate: "",
        credentialId: "",
        credentialUrl: "",
      },
    ],
  });

  // useEffect(() => {
  //   if (!id) return;

  //   (async () => {
  //     try {
  //       const res = await api.get(`/resume/${id}`);
  //       setResumeData((prev) => ({
  //         ...prev,
  //         ...res.data.resume,
  //       }));
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, [id]);

  const nextStep = () => setStep((s) => Math.min(7, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const TOTAL_STEPS = 7;

  const progress = Math.round(((step - 1) / (TOTAL_STEPS - 1)) * 100);

  const downloadPDF = useReactToPrint({
    contentRef: printRef,
    documentTitle: resumeData.fullName || "Resume",
  });

  const renderStep = () => {
    const common = {
      resumeData,
      setResumeData,
      nextStep,
      prevStep,
    };

    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            nextStep={nextStep}
          />
        );

      case 2:
        return <EducationForm {...common} />;

      case 3:
        return <ExperienceForm {...common} />;

      case 4:
        return <ProjectsForm {...common} />;

      case 5:
        return <SkillsForm {...common} />;

      case 6:
        return <CertificateForm {...common} />;
      case 7:
        return (
          <PreviewStep
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
            prevStep={prevStep}
            downloadPDF={downloadPDF}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 py-8">
      <div className="max-w-screen-2xl mx-auto px-8">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Resume Builder
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            Build your professional resume while previewing every change live.
          </p>
        </div>

        {/* Progress */}

        <div className="bg-white border border-slate-200 rounded-3xl shadow-lg p-6 mb-8">

          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-slate-700">
              Completion Progress
            </span>

            <span className="text-blue-600 font-bold">
              {progress}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Stepper */}

        <ResumeStepper
          currentStep={step - 1}
          setCurrentStep={(i) => setStep(i + 1)}
        />

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

          {/* Left Form */}

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

              <AnimatePresence mode="wait">

                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  {renderStep()}
                </motion.div>

              </AnimatePresence>


            </div>
          </motion.div>

          {/* Right Preview */}

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="sticky top-5 space-y-4">

              <TemplateTabs
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
              />

              <ResumePreview
                ref={printRef}
                resumeData={resumeData}
                selectedTemplate={selectedTemplate}
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}