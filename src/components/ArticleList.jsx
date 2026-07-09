import NewsCard from './NewsCard';
import { NewsCardSkeleton } from './ui/Loaders';
import { EmptyState, ErrorState } from './ui/StateMessage';

export default function ArticleList({ posts, loading, error, onRetry, skeletonCount = 6 }) {
  if (loading) {
    return (
      <div className="divide-y divide-surface-border">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div key={i} className="py-5 first:pt-0">
            <NewsCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (error) return <ErrorState message="Couldn't load these stories." onRetry={onRetry} />;
  if (!posts || posts.length === 0) return <EmptyState message="No stories to show yet." />;

  return (
    <div>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
