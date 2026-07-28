import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-lg">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
        <FaFileAlt />
      </div>

      <h2 className="text-3xl font-bold text-slate-800">
        No resumes yet
      </h2>

      <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
        Create your first ATS-friendly resume and
        start preparing for your dream job.
      </p>

      <Link
        to="/resume-builder"
        className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        + Create Resume
      </Link>

    </div>
  );
}

export default EmptyState;