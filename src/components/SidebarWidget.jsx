import SectionHeader from "./ui/SectionHeader";
import SmallNewsCard from "./SmallNewsCard";
import { ListSkeleton, SmallNewsCardSkeleton } from "./ui/Loaders";
import { EmptyState } from "./ui/StateMessage";

export default function SidebarWidget({
  title,
  to,
  posts,
  loading,
  error,
  layout = "stacked",
  className = "",
}) {
  return (
    <section
      className={`rounded-[8px] border border-surface-border bg-surface p-5 ${className}`}
      aria-label={title}
    >
      <SectionHeader title={title} to={to} />

      <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar">
        {loading && (
          <ListSkeleton count={3} Component={SmallNewsCardSkeleton} />
        )}

        {!loading && error && (
          <EmptyState message="Couldn't load this right now." />
        )}

        {!loading && !error && (!posts || posts.length === 0) && (
          <EmptyState message="No stories yet." />
        )}

        {!loading && !error && posts?.length > 0 && (
          <div className={layout === "stacked" ? "space-y-5" : "space-y-4"}>
            {posts.map((post) => (
              <SmallNewsCard key={post.id} post={post} layout={layout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
