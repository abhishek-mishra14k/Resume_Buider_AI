import Badge from "./Badge";

function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <Badge className="mb-5">
          {badge}
        </Badge>
      )}

      <h2 className="mb-5 text-4xl font-black text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;