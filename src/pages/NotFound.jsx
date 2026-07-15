import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-4 text-center">
      <p className="font-['news-reader'] tracking-wide text-6xl font-semibold text-brand">404</p>
      <h1 className="mt-4 font-['news-reader'] tracking-wide text-2xl font-medium text-ink">Page not found</h1>
      <p className="mt-2 text-ink-soft font-['manrope'] tracking-wide">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-6 rounded bg-ink px-5 py-2.5 text-sm font-['manrope'] font-medium text-white hover:bg-ink/90">
        Back to homepage
      </Link>
    </div>
  );
}
