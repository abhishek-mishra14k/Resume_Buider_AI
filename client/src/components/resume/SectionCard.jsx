function SectionCard({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="border-b border-slate-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="p-8">
        {children}
      </div>
    </div>
  );
}

export default SectionCard;