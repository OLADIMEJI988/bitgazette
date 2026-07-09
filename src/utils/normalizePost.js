/**
 * WordPress REST responses are verbose and inconsistent about where
 * "nice" data lives (embedded featured media, embedded author, ACF, etc).
 * This normalizer maps a raw WP post -> a flat shape every component can
 * rely on, and fills in graceful fallbacks for anything missing.
 *
 * Requires posts to be fetched with `_embed=1` (see posts.js) so featured
 * media, author, and terms are attached under `_embedded`.
 */

const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23E8E8EC"/%3E%3Ctext x="50%25" y="50%25" font-family="sans-serif" font-size="24" fill="%238A8B96" text-anchor="middle" dy=".3em"%3EThe Bit Gazette%3C/text%3E%3C/svg%3E';

function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(html = "") {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    FALLBACK_IMAGE
  );
}

function getAuthor(post) {
  const author = post?._embedded?.author?.[0];
  return {
    id: author?.id ?? null,
    name: author?.name ?? "The Bit Gazette",
    slug: author?.slug ?? "",
    avatar: author?.avatar_urls?.["48"] ?? null,
  };
}

function getCategories(post) {
  const terms = post?._embedded?.["wp:term"]?.[0] ?? [];
  return terms.map((term) => ({
    id: term.id,
    name: term.name,
    slug: term.slug,
  }));
}

function getTags(post) {
  const terms = post?._embedded?.["wp:term"]?.[1] ?? [];
  return terms.map((term) => ({
    id: term.id,
    name: term.name,
    slug: term.slug,
  }));
}

export function normalizePost(post) {
  if (!post) return null;

  const acf = post.acf ?? {};

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered),
    excerpt: stripHtml(post.excerpt?.rendered),
    content: post.content?.rendered ?? "",
    image: getFeaturedImage(post),
    author: getAuthor(post),
    categories: getCategories(post),
    tags: getTags(post),
    date: new Date(post.date_gmt + "Z").toISOString(),
    modified: new Date(post.modified_gmt + "Z").toISOString(),
    commentCount: acf.comment_count ?? post.comment_count ?? 0,
    readingTime:
      acf.reading_time ?? estimateReadingTime(post.content?.rendered),
    breaking: Boolean(acf.breaking_news),
    sponsored: Boolean(acf.sponsored),
    link: `/post/${post.slug}`,
  };
}

export function normalizePosts(posts = []) {
  return posts.map(normalizePost);
}
