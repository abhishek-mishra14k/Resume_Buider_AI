import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus:ring-slate-200",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",

    white:
      "bg-white text-blue-700 hover:bg-slate-100 focus:ring-white/50",

    glass:
      "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-blue-700",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;