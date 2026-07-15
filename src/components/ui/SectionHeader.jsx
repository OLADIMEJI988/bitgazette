import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  to,
  Icon,
  className = "",
}) {
  const headerContent = (
    <>
      {Icon && (
        <Icon className="w-5 h-5 text-ink group-hover:text-brand transition-colors" />
      )}

      <h2 className="font-['news-reader'] tracking-[0.07px] text-[20px] lg:text-[19px] font-medium text-ink group-hover:text-brand transition-colors">
        {title}
      </h2>
    </>
  );

  return (
    <div className={`flex items-center justify-between pb-6 ${className}`}>
      {to ? (
        <Link to={to} className="flex w-full items-center gap-[6px] group">
          {headerContent}
        </Link>
      ) : (
        <div className="flex items-center gap-[6px]">
          {headerContent}
        </div>
      )}
    </div>
  );
}