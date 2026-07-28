import { useState, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMagnifyingGlassMinus,
} from "react-icons/hi2";

import ATSClassic from "../templates/ATSClassic";
import ModernTemplate from "../templates/ModernTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";

const ResumePreview = forwardRef(({
  resumeData,
  selectedTemplate,
  downloadPDF,
}, ref) => {
  const [zoom, setZoom] = useState(100);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "ats":
        return <ATSClassic resumeData={resumeData} />;

      case "modern":
        return <ModernTemplate resumeData={resumeData} />;

      case "professional":
        return (
          <ProfessionalTemplate resumeData={resumeData} />
        );

      case "minimal":
        return <MinimalTemplate resumeData={resumeData} />;

      case "creative":
        return <CreativeTemplate resumeData={resumeData} />;

      default:
        return <ATSClassic resumeData={resumeData} />;
    }

  };

  const zoomIn = () =>
    setZoom((prev) => Math.min(prev + 10, 130));

  const zoomOut = () =>
    setZoom((prev) => Math.max(prev - 10, 60));

  return (
    <div className="sticky top-6">

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Live Preview
            </h2>

            <p className="text-sm capitalize text-slate-500">
              {selectedTemplate} Template
            </p>
          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={zoomOut}
              className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100"
            >
              <HiOutlineMagnifyingGlassMinus />
            </button>

            <span className="w-12 text-center font-semibold">
              {zoom}%
            </span>

            <button
              onClick={zoomIn}
              className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100"
            >
              <HiOutlineMagnifyingGlassPlus />
            </button>


          </div>

        </div>

        {/* Preview */}

        <div className="h-[calc(100vh-180px)] overflow-auto bg-slate-200 p-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedTemplate}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex justify-center"
            >
              <div
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top center",
                }}
              >
                <div
                  ref={ref}
                  id="resume-preview"
                >
                  {renderTemplate()}
                </div>
              </div>
            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </div>
  );

});

export default ResumePreview;