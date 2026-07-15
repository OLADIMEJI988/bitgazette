export default function Login() {
  return (
    <div className="mx-auto font-['manrope'] tracking-wide flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="font-['news-reader'] tracking-wide text-2xl font-medium text-ink">Log in</h1>
      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded border border-surface-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full rounded border border-surface-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <button type="submit" className="w-full rounded bg-brand px-4 py-2.5 text-sm tracking-wide font-semibold text-white hover:bg-brand-dark">
          Log in
        </button>
      </form>
    </div>
  );
}
