import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPostBySlug } from "../services/posts";
import Tag from "../components/ui/Tag";
import { FeaturedStorySkeleton } from "../components/ui/Loaders";
import { ErrorState, EmptyState } from "../components/ui/StateMessage";
import { updatedLabel } from "../utils/formatTime";

export default function PostPage() {
  const { slug } = useParams();
  const {
    data: post,
    loading,
    error,
    refetch,
  } = useFetch(() => getPostBySlug(slug), [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <FeaturedStorySkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <ErrorState message="Couldn't load this article." onRetry={refetch} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <EmptyState message="This article couldn't be found." />
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.breaking && <Tag variant="breaking">Breaking News</Tag>}
        {post.categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.slug}`}>
            <Tag slug={cat.slug}>{cat.name}</Tag>
          </Link>
        ))}
      </div>

      <h1 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-3 border-b border-surface-border pb-6">
        {post.author.avatar && (
          <img
            src={post.author.avatar}
            alt=""
            className="h-10 w-10 rounded-full"
          />
        )}
        <div className="text-sm">
          <Link
            to={`/author/${post.author.slug}`}
            className="font-semibold text-ink hover:text-brand"
          >
            {post.author.name}
          </Link>
          <p className="text-ink-muted">
            {updatedLabel(post.modified)} · {post.readingTime}
          </p>
        </div>
      </div>

      <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-surface-alt">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-brand"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-surface-border pt-6">
          {post.tags.map((tag) => (
            <Link key={tag.id} to={`/tag/${tag.slug}`}>
              <Tag>#{tag.name}</Tag>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
