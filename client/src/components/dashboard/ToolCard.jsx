import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ToolCard({
  title,
  description,
  icon,
  color,
  to,
  badge,
}) {
  return (
    <Link
      to={to}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

      {/* Badge */}
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div
        className={`${color} mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-slate-800">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-8 text-sm leading-7 text-slate-500">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">

        <span className="font-semibold text-blue-600">
          Explore
        </span>

        <div className="rounded-full bg-slate-100 p-3 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <FaArrowRight />
        </div>

      </div>

    </Link>
  );
}

export default ToolCard;