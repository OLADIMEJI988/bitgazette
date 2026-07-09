import { useFetch } from "../hooks/useFetch";
import { getPostsByCategory } from "../services/posts";
import SectionHeader from "./ui/SectionHeader";
import SmallNewsCard from "./SmallNewsCard";
import { SmallNewsCardSkeleton } from "./ui/Loaders";
import { EmptyState, ErrorState } from "./ui/StateMessage";

/**
 * Renders one lower-homepage category block: heading + 3 stacked stories.
 * `slug` must match a real WordPress category slug.
 */
export default function CategorySection({ title, slug, isLast }) {
  const { data, loading, error, refetch } = useFetch(
    () => getPostsByCategory(slug, { perPage: 3 }),
    [slug],
  );
  const posts = data?.posts;

  return (
    <section aria-label={title}>
      <SectionHeader title={title} to={`/category/${slug}`} />
      {loading && (
        <div
          className={`space-y-6 pr-5 ${
            !isLast ? "border-r border-surface-border" : ""
          }`}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <SmallNewsCardSkeleton key={i} />
          ))}
        </div>
      )}
      {!loading && error && (
        <ErrorState message="Couldn't load this section." onRetry={refetch} />
      )}
      {!loading && !error && (!posts || posts.length === 0) && (
        <EmptyState message="No stories in this category yet." />
      )}
      {!loading && !error && posts?.length > 0 && (
        <div
          className={`space-y-6 pr-5 ${
            !isLast ? "border-r border-surface-border" : ""
          }`}
        >
          {posts.map((post) => (
            <SmallNewsCard key={post.id} post={post} layout="stacked" />
          ))}
        </div>
      )}
    </section>
  );
}
