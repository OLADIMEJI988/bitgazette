import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tag from "./ui/Tag";
import { updatedLabel } from "../utils/formatTime";
import { FeaturedStorySkeleton } from "./ui/Loaders";

const CATEGORY_VARIANTS = {
  "breaking-news": "breaking",
  "sponsored-articles": "sponsored",
  tech: "tech",
  finance: "finance",
  news: "crypto",
  crypto: "crypto",
  "ai-news": "ai",
  "expert-analysis": "analysis",
  opinions: "opinion",
  "press-release": "press",
};

export default function FeaturedArticle({ post, loading }) {
  if (loading) return <FeaturedStorySkeleton />;
  if (!post) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-5"
    >
      <Link to={post.link} className="group block">
        <div className="relative aspect-[15/9] w-full overflow-hidden bg-surface-alt">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {post.categories?.[0] && (
            <div className="absolute bottom-3 left-4 z-10">
              <Tag
                variant={
                  CATEGORY_VARIANTS[post.categories[0].slug] ?? "category"
                }
              >
                {post.categories[0].name}
              </Tag>
            </div>
          )}
        </div>
      </Link>

      <div className="mt-3 space-y-3">
        {/* {post.categories?.map((category) => (
          <Tag
            key={category.id}
            variant={CATEGORY_VARIANTS[category.slug] ?? "category"}
          >
            {category.name}
          </Tag>
        ))} */}
        <Link to={post.link}>
          <h1 className="font-['news-reader'] tracking-[0.06px] text-[24px] mt-3 font-medium leading-[30px] text-ink group-hover:text-brand">
            {post.title}
          </h1>
        </Link>
        <p className="flex flex-wrap items-center font-['manrope'] tracking-[0.06px] gap-2 text-[12px] text-ink-soft">
          <span className="gap-1 flex">
            By <span className="text-ink">{post.author.name}</span>
          </span>
          <span aria-hidden="true" className="text-[#7d7f91]">
            •
          </span>
          <span className="font-normal text-accent-green">
            {updatedLabel(post.date)}
          </span>
        </p>
      </div>
    </motion.article>
  );
}
