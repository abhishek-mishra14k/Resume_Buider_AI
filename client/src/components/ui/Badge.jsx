function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;