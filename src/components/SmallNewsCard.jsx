import { Link } from "react-router-dom";
import { timeAgo } from "../utils/formatTime";

export default function SmallNewsCard({ post, layout = "horizontal" }) {
  if (!post) return null;

  if (layout === "stacked") {
    return (
      <article className="group pb-5 border-b border-surface-border last:border-b-0">
        <Link
          to={post.link}
          className="block aspect-[16/9] w-full overflow-hidden bg-surface-alt"
        >
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="mt-2.5 space-y-1">
          <Link to={post.link}>
            <h4 className="font-['news-reader'] tracking-[0.06px] text-[16px] font-regular leading-[22px] text-ink transition-colors group-hover:text-brand line-clamp-2">
              {post.title}
            </h4>
          </Link>
          <p className="text-xs font-['manrope'] tracking-[0.06px] font-medium text-ink-muted">
            {timeAgo(post.date)}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group pb-5 mt-2 border-b border-surface-border last:border-b-0">
      <p className="text-xs font-['manrope'] tracking-[0.06px] font-medium text-ink-muted mb-2">{timeAgo(post.date)}</p>
      <Link
        to={post.link}
        className="block aspect-[16/9] w-full overflow-hidden bg-surface-alt"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="mt-2 space-y-1">
        <Link to={post.link}>
          <h4 className="font-['news-reader'] tracking-[0.06px] text-[16px] font-regular leading-[22px] text-ink transition-colors group-hover:text-brand line-clamp-2">
            {post.title}
          </h4>
        </Link>
      </div>
    </article>
  );
}
