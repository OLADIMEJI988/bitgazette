export function SkeletonBlock({ className = "" }) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

export function FeaturedStorySkeleton() {
  return (
    <div
      className="space-y-4"
      role="status"
      aria-label="Loading featured story"
    >
      <SkeletonBlock className="aspect-[16/9] w-full" />
      <SkeletonBlock className="h-4 w-24" />
      <SkeletonBlock className="h-8 w-full" />
      <SkeletonBlock className="h-8 w-2/3" />
      <SkeletonBlock className="h-4 w-40" />
    </div>
  );
}

export function NewsCardSkeleton() {
  return (
    <div className="flex gap-4" role="status" aria-label="Loading article">
      <SkeletonBlock className="h-24 w-32 shrink-0" />
      <div className="flex-1 space-y-2 py-1">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-3/4" />
        <SkeletonBlock className="h-3 w-1/3" />
      </div>
    </div>
  );
}

export function SmallNewsCardSkeleton() {
  return (
    <article
      className="mt-2 border-b pb-5 last:border-b-0"
      role="status"
      aria-label="Loading article"
    >
      {/* Date */}
      <SkeletonBlock className="mb-2 h-3 w-20" />

      {/* Image */}
      <SkeletonBlock className="aspect-[16/9] w-full" />

      {/* Title */}
      <div className="mt-3 space-y-2">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-3/4" />
      </div>
    </article>
  );
}

export function ListSkeleton({ count = 4, Component = SmallNewsCardSkeleton }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <Component key={i} />
      ))}
    </div>
  );
}
