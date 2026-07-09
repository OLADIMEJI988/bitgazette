export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-extrabold text-ink">Contact Us</h1>
      <p className="mt-4 text-md leading-relaxed text-ink-soft">
        Have a tip, a correction, or a partnership inquiry? Reach the newsroom at{' '}
        <a href="mailto:news@thebitgazette.com" className="text-brand hover:underline">
          news@thebitgazette.com
        </a>.
      </p>
    </div>
  );
}
