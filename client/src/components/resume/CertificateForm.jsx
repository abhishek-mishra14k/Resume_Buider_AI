import { motion } from "framer-motion";
import {
  FaCertificate,
  FaBuilding,
  FaCalendarAlt,
  FaIdCard,
  FaLink,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaEye,
} from "react-icons/fa";

import SectionCard from "./SectionCard";

function CertificateForm({
  nextStep,
  prevStep,
  resumeData,
  setResumeData,
}) {
  const handleChange = (index, e) => {
    const values = [...resumeData.certificates];
    values[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      certificates: values,
    });
  };

  const addCertificate = () => {
    setResumeData({
      ...resumeData,
      certificates: [
        ...resumeData.certificates,
        {
          name: "",
          issuer: "",
          issueDate: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    });
  };

  const removeCertificate = (index) => {
    const values = [...resumeData.certificates];
    values.splice(index, 1);

    setResumeData({
      ...resumeData,
      certificates: values,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionCard
        title="Certificates"
        subtitle="Show your certifications, achievements and professional credentials."
      >
        {resumeData.certificates.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <FaCertificate className="mx-auto mb-4 text-5xl text-slate-400" />
            <p className="text-slate-500">
              No certificates added yet.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {resumeData.certificates.map((certificate, index) => (
            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                  <FaCertificate className="text-blue-600" />
                  Certificate {index + 1}
                </h3>

                {resumeData.certificates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCertificate(index)}
                    className="rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div className="md:col-span-2">
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaCertificate className="text-blue-600" />
                    Certificate Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="IBM Full Stack Web Development"
                    value={certificate.name}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaBuilding className="text-blue-600" />
                    Issuing Organization
                  </label>

                  <input
                    type="text"
                    name="issuer"
                    placeholder="IBM"
                    value={certificate.issuer}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaCalendarAlt className="text-blue-600" />
                    Issue Date
                  </label>

                  <input
                    type="date"
                    name="issueDate"
                    value={certificate.issueDate}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaIdCard className="text-blue-600" />
                    Credential ID
                  </label>

                  <input
                    type="text"
                    name="credentialId"
                    placeholder="Optional"
                    value={certificate.credentialId}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
                    <FaLink className="text-blue-600" />
                    Credential URL
                  </label>

                  <input
                    type="url"
                    name="credentialUrl"
                    placeholder="https://..."
                    value={certificate.credentialUrl}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>
            </motion.div>
          ))}

          <button
            type="button"
            onClick={addCertificate}
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaPlus />
            Add Certificate
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
              <FaEye />
              Preview Resume
            </button>

          </div>

        </div>
      </SectionCard>
    </motion.div>
  );
}

export default CertificateForm;