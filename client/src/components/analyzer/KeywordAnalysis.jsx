import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaTags,
  FaSearch,
} from "react-icons/fa";

function KeywordAnalysis({ analysis }) {
  const matched = analysis.keywordMatch || [];
  const missing = analysis.missingKeywords || [];

  const total = matched.length + missing.length;

  const percentage =
    total > 0
      ? Math.round((matched.length / total) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-10"
    >
      {/* Header */}

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white shadow-lg">

        <div className="flex items-center gap-4">

          <FaTags className="text-4xl" />

          <div>

            <h2 className="text-3xl font-bold">
              Keyword Analysis
            </h2>

            <p className="mt-2 text-purple-100">
              Evaluate how well your resume matches important recruiter and ATS keywords.
            </p>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="mb-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow">

          <p className="text-sm uppercase tracking-wide text-slate-500">
            Match Rate
          </p>

          <h3 className="mt-2 text-4xl font-bold text-purple-600">
            {percentage}%
          </h3>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <p className="text-sm uppercase tracking-wide text-slate-500">
            Matched Keywords
          </p>

          <h3 className="mt-2 text-4xl font-bold text-green-600">
            {matched.length}
          </h3>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <p className="text-sm uppercase tracking-wide text-slate-500">
            Missing Keywords
          </p>

          <h3 className="mt-2 text-4xl font-bold text-red-600">
            {missing.length}
          </h3>

        </div>

      </div>

      {/* Keyword Cards */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Matched */}

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-green-100 p-3">

              <FaCheckCircle className="text-2xl text-green-600" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Matched Keywords
              </h3>

              <p className="text-slate-500">
                Great! These keywords were detected.
              </p>

            </div>

          </div>

          {matched.length > 0 ? (

            <div className="flex flex-wrap gap-3">

              {matched.map((keyword, index) => (

                <motion.span
                  key={keyword}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
                >
                  {keyword}
                </motion.span>

              ))}

            </div>

          ) : (

            <div className="rounded-2xl bg-slate-50 p-8 text-center">

              <FaSearch className="mx-auto mb-3 text-4xl text-slate-300" />

              <p className="text-slate-500">
                No matching keywords found.
              </p>

            </div>

          )}

        </motion.div>

        {/* Missing */}

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-red-100 p-3">

              <FaTimesCircle className="text-2xl text-red-600" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Missing Keywords
              </h3>

              <p className="text-slate-500">
                Consider adding these keywords where appropriate.
              </p>

            </div>

          </div>

          {missing.length > 0 ? (

            <div className="flex flex-wrap gap-3">

              {missing.map((keyword, index) => (

                <motion.span
                  key={keyword}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
                >
                  {keyword}
                </motion.span>

              ))}

            </div>

          ) : (

            <div className="rounded-2xl bg-green-50 p-8 text-center">

              <FaCheckCircle className="mx-auto mb-3 text-4xl text-green-500" />

              <p className="font-medium text-green-700">
                Excellent! No missing keywords found.
              </p>

            </div>

          )}

        </motion.div>

      </div>

    </motion.div>
  );
}

export default KeywordAnalysis;