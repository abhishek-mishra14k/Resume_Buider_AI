import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

import ResumeCard from "./ResumeCard";
import EmptyState from "./EmptyState";

function RecentResumes({ resumes, onDelete }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredResumes = useMemo(() => {
    const filtered = resumes.filter((resume) =>
      (resume.title || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    switch (sortBy) {
      case "oldest":
        return filtered.sort(
          (a, b) =>
            new Date(a.updatedAt) - new Date(b.updatedAt)
        );

      case "title":
        return filtered.sort((a, b) =>
          (a.title || "").localeCompare(b.title || "")
        );

      default:
        return filtered.sort(
          (a, b) =>
            new Date(b.updatedAt) - new Date(a.updatedAt)
        );
    }
  }, [resumes, search, sortBy]);

  return (
    <section>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-800">
            📄 My Resumes
          </h2>

          <p className="mt-2 text-slate-500">
            Search, edit and manage your resumes.
          </p>

        </div>

        <div className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
          {filteredResumes.length} Resume
          {filteredResumes.length !== 1 && "s"}
        </div>

      </div>

      {/* Search + Sort */}

      <div className="mb-10 flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resumes..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="title">
            Title A-Z
          </option>

        </select>

      </div>

      {/* Empty */}

      {filteredResumes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredResumes.map((resume) => (
            <ResumeCard
              key={resume._id}
              resume={resume}
              onDelete={onDelete}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default RecentResumes;