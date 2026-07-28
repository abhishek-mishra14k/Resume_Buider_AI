import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaCertificate,
  FaEye,
} from "react-icons/fa";

const steps = [
  {
    title: "Personal",
    icon: FaUser,
  },
  {
    title: "Education",
    icon: FaGraduationCap,
  },
  {
    title: "Experience",
    icon: FaBriefcase,
  },
  {
    title: "Projects",
    icon: FaFolderOpen,
  },
  {
    title: "Skills",
    icon: FaCode,
  },
  {
    title: "Certificates",
    icon: FaCertificate,
  },
  {
    title: "Preview",
    icon: FaEye,
  },
];

function ResumeStepper({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-wrap justify-between gap-6">

        {steps.map((step, index) => {
          const Icon = step.icon;

          const active =
            index === currentStep;

          const completed =
            index < currentStep;

          return (
            <button
              key={step.title}
              onClick={() =>
                setCurrentStep(index)
              }
              className="group flex flex-col items-center"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-xl transition-all duration-300

                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : completed
                    ? "bg-green-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Icon />
              </div>

              <span
                className={`mt-3 text-sm font-semibold

                ${
                  active
                    ? "text-blue-600"
                    : completed
                    ? "text-green-600"
                    : "text-slate-500"
                }`}
              >
                {step.title}
              </span>

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default ResumeStepper;