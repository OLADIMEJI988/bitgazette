import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 text-ink-soft">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-6 rounded bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink/90">
        Back to homepage
      </Link>
    </div>
  );
}
