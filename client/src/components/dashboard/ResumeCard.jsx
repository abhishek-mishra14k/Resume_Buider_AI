import {
  FaEye,
  FaEdit,
  FaTrash,
  FaFileAlt,
  FaCalendarAlt,
  FaStar,
  FaLayerGroup,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function ResumeCard({ resume, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/resume/${resume._id}`);

      toast.success("Resume deleted successfully");

      onDelete(resume._id);
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete resume");
    }
  };

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-2xl
    "
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
            <FaFileAlt className="text-2xl" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {resume.title || "Untitled Resume"}
            </h2>

            <p className="text-sm text-blue-100">
              {resume.fullName}
            </p>

            <p className="text-xs text-blue-200">
              {resume.email}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6">
        {/* Template */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-600">
            <FaLayerGroup />

            <span className="text-sm font-medium">
              Template
            </span>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {resume.template || "Modern"}
          </span>
        </div>

        {/* Updated Date */}
        <div className="flex items-center gap-2 text-slate-500">
          <FaCalendarAlt />

          <span className="text-sm">
            Updated{" "}
            {new Date(resume.updatedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* ATS Card */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                ATS Score
              </p>

              <h3 className="mt-1 text-2xl font-bold text-blue-700">
                {resume.atsScore
                  ? `${resume.atsScore}%`
                  : "Not Analyzed"}
              </h3>
            </div>

            <FaStar className="text-4xl text-yellow-500" />
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => navigate(`/resume/${resume._id}`)}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <FaEye />
            <span className="hidden lg:inline">
              View
            </span>
          </button>

          <button
            onClick={() => navigate(`/resume-builder/${resume._id}`)}
            className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-3 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            <FaEdit />
            <span className="hidden lg:inline">
              Edit
            </span>
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <FaTrash />
            <span className="hidden lg:inline">
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;