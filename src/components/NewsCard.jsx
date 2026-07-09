import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { updatedLabel } from "../utils/formatTime";

export default function NewsCard({ post }) {
  if (!post) return null;

  return (
    <article className="group flex gap-4 border-b border-surface-border py-6 last:border-b-0 h-[210px]">
      <Link
        to={post.link}
        className="block w-[240px] self-stretch shrink-0 overflow-hidden bg-surface-alt"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5">
        <Link to={post.link}>
          <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[26px] text-ink transition-colors group-hover:text-brand sm:text-[16px]">
            {post.title}
          </h3>
        </Link>
        <div className="font-['Plus_Jakarta_Sans'] flex flex-wrap items-center gap-2 text-xs text-ink-muted">
          <span>
            By{" "}
            <span className="font-medium text-ink-soft">
              {post.author.name}
            </span>
          </span>
          <span aria-hidden="true" className="text-[#7d7f91]">•</span>
          <span className="text-accent-green">
            {updatedLabel(post.date)}
          </span>
          <span aria-hidden="true" className="text-[#7d7f91]">•</span>
          <span className="inline-flex items-center gap-1">
            <MessageSquare size={12} aria-hidden="true" />
            {post.commentCount} comment{post.commentCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </article>
  );
}
