import { motion } from "framer-motion";

function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const progress = Math.round(
    (currentStep / totalSteps) * 100
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-3 flex items-center justify-between">

        <div>
          <h3 className="font-semibold text-slate-700">
            Resume Progress
          </h3>

          <p className="text-sm text-slate-500">
            Complete every section
          </p>
        </div>

        <span className="text-xl font-bold text-blue-600">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
        />

      </div>

    </div>
  );
}

export default ProgressBar;