import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}&media=${encodeURIComponent(post.image)}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 font-['marope'] tracking-[0.06px]">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.breaking && <Tag variant="breaking">Breaking News</Tag>}
        {post.categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.slug}`}>
            <Tag slug={cat.slug}>{cat.name}</Tag>
          </Link>
        ))}
      </div>

      <h1 className="text-2xl font-['news-reader'] tracking-[0.06px] font-medium leading-tight text-ink sm:text-3xl">
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
            className="font-medium text-ink hover:text-brand"
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
        className="prose prose-neutral mt-8 !max-w-none prose-headings:font-['news-reader'] prose-headings:tracking-[0.06px] prose-headings:font-medium prose-a:text-brand"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-[10px] bg-[#1877F2] px-4 py-2 text-white transition-colors hover:opacity-90"
        >
          <FaFacebookF />
          Share on Facebook
        </a>

        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-[10px] bg-black px-4 py-2 text-white transition-colors hover:opacity-90"
        >
          <FaXTwitter /> Share on Twitter
        </a>

        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-[10px] bg-[#0A66C2] px-4 py-2 text-white transition-colors hover:opacity-90"
        >
          <FaLinkedinIn />
          Share on LinkedIn
        </a>

        <a
          href={pinterestShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-[10px] bg-[#E60023] px-4 py-2 text-white transition-colors hover:opacity-90"
        >
          <FaPinterestP />
          Share on Pinterest
        </a>
      </div>

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-surface-border pt-6">
          {post.tags.map((tag) => (
            <Link key={tag.id} to={`/tag/${tag.slug}`}>
              <Tag>{tag.name}</Tag>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
