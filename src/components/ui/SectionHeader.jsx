import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SectionHeader({ title, to, className = '' }) {
  const content = (
    <>
      <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-medium text-ink">{title}</h2>
      {to && <ArrowRight size={18} className="text-ink-muted" aria-hidden="true" />}
    </>
  );

  return (
    <div className={`flex items-center justify-between pb-6 ${className}`}>
      {to ? (
        <Link to={to} className="flex w-full items-center gap-2 group">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[16px] font-medium text-ink group-hover:text-brand transition-colors">
            {title}
          </h2>
          <ArrowRight size={18} className="text-ink group-hover:text-brand transition-colors" aria-hidden="true" />
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
