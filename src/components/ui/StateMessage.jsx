import { AlertTriangle, Inbox, WifiOff } from 'lucide-react';

export function ErrorState({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-surface-border bg-surface px-6 py-10 text-center">
      <AlertTriangle size={28} className="text-brand" aria-hidden="true" />
      <p className="text-sm text-ink-soft">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-ink/90"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export function EmptyState({ message = 'Nothing to show yet.' }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-surface-border px-6 py-10 text-center">
      <Inbox size={28} className="text-ink-muted" aria-hidden="true" />
      <p className="text-sm text-ink-soft">{message}</p>
    </div>
  );
}

export function OfflineState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-surface-border bg-surface px-6 py-10 text-center">
      <WifiOff size={28} className="text-brand" aria-hidden="true" />
      <p className="text-sm text-ink-soft">
        You appear to be offline. Check your connection and try again.
      </p>
    </div>
  );
}
