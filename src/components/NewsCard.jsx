import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { updatedLabel } from "../utils/formatTime";

export default function NewsCard({ post }) {
  if (!post) return null;

  return (
    <article className="group flex flex-col gap-4 border-b border-surface-border py-6 last:border-b-0 sm:flex-row sm:h-[210px]">
      <Link
        to={post.link}
        className="block h-52 w-full shrink-0 overflow-hidden bg-surface-alt sm:h-auto sm:w-[240px] sm:self-stretch"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 sm:gap-1.5">
        <Link to={post.link}>
          <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] font-medium leading-7 text-ink transition-colors group-hover:text-brand sm:text-[16px] sm:leading-[26px]">
            {post.title}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-['Plus_Jakarta_Sans'] text-[13px] text-ink-muted sm:text-xs">
          <span>
            By{" "}
            <span className="font-medium text-ink-soft">
              {post.author.name}
            </span>
          </span>

          <span aria-hidden="true" className="text-[#7d7f91]">
            •
          </span>

          <span className="text-accent-green">
            {updatedLabel(post.date)}
          </span>

          <span aria-hidden="true" className="text-[#7d7f91]">
            •
          </span>

          <span className="inline-flex items-center gap-1">
            <MessageSquare size={12} aria-hidden="true" />
            {post.commentCount} comment{post.commentCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </article>
  );
}