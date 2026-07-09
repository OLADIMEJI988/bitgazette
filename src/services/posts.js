import wpClient, { extractPagination } from "./wordpressApi";
import { normalizePost, normalizePosts } from "../utils/normalizePost";
import { resolveCategoryId, resolveTagId } from "./resolveTerm";

/**
 * Every method returns normalized, UI-ready data (see utils/normalizePost.js).
 * `_embed=1` is included everywhere so featured images, author info, and
 * category/tag terms come back in a single request instead of N+1 calls.
 */

export async function getLatestPosts({ page = 1, perPage = 10 } = {}) {
  const response = await wpClient.get("/posts", {
    params: {
      page,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });
  return {
    posts: normalizePosts(response.data),
    pagination: extractPagination(response),
  };
}

export async function getFeaturedPosts({ perPage = 1 } = {}) {
  // Featured posts are tagged with a "featured" tag or sticky flag in WP.
  const response = await wpClient.get("/posts", {
    params: { sticky: true, per_page: perPage, _embed: 1 },
  });

  if (response.data.length > 0) {
    return normalizePosts(response.data);
  }

  // Fallback: no sticky posts configured yet, use the most recent post.
  const fallback = await wpClient.get("/posts", {
    params: { per_page: perPage, _embed: 1 },
  });
  return normalizePosts(fallback.data);
}

/**
 * WordPress core REST API has no `orderby=comment_count` (valid values are
 * author, date, id, include, modified, parent, relevance, slug, title) and
 * doesn't expose a comment count on the post object by default, so ranking
 * by "popularity" can't be done with a single core request.
 *
 * Preferred path: if the site runs the "WordPress Popular Posts" plugin
 * (very common for exactly this widget), use its REST endpoint. Otherwise
 * fall back to ranking a pool of recent posts by their real comment totals
 * pulled from /comments. If even that comes back empty, fall back to plain
 * latest-by-date so the widget never renders blank.
 */
async function getPostsRankedByEngagement({ perPage = 5, pageSize = 12 } = {}) {
  // const siteRoot = wpClient.defaults.baseURL.replace(/\/wp-json\/wp\/v2\/?$/, '');
  try {
    const pool = await wpClient.get("/posts", {
      params: { per_page: pageSize, orderby: "date", order: "desc", _embed: 1 },
    });

    const counts = await Promise.all(
      pool.data.map((post) =>
        wpClient
          .get("/comments", { params: { post: post.id, per_page: 1 } })
          .then((res) => Number(res.headers?.["x-wp-total"] ?? 0))
          .catch(() => 0),
      ),
    );

    const ranked = pool.data
      .map((post, i) => ({ post, count: counts[i] }))
      .sort((a, b) => b.count - a.count)
      .slice(0, perPage)
      .map((entry) => entry.post);

    if (ranked.length) return normalizePosts(ranked);
  } catch {
    // Comments endpoint unavailable — fall through to plain latest posts.
  }

  // 3. Last resort: latest posts by date, so the widget always shows content.
  const fallback = await wpClient.get("/posts", {
    params: { per_page: perPage, orderby: "date", order: "desc", _embed: 1 },
  });
  return normalizePosts(fallback.data);
}

export async function getTrendingPosts({ perPage = 4 } = {}) {
  const id = await resolveCategoryId("trending-stories");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });

  return normalizePosts(response.data);
}

export async function getPopularPosts({ perPage = 5 } = {}) {
  // return getPostsRankedByEngagement({ perPage, pageSize: 20 });
  const id = await resolveCategoryId("breaking-news");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });

  return normalizePosts(response.data);
}

export async function getPostsByCategory(
  slug,
  { page = 1, perPage = 10, categoryId } = {},
) {
  const id = categoryId ?? (await resolveCategoryId(slug));
  if (!id) return { posts: [], pagination: { total: 0, totalPages: 0 } };

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      page,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });
  return {
    posts: normalizePosts(response.data),
    pagination: extractPagination(response),
  };
}

export async function getSponsoredPosts({ perPage = 2 } = {}) {
  const id = await resolveCategoryId("sponsored-articles");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });

  return normalizePosts(response.data);
}

export async function getFinancePosts({ perPage = 3 } = {}) {
  const id = await resolveCategoryId("finance");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });

  return normalizePosts(response.data);
}

export async function getExpertAnalysis({ perPage = 3 } = {}) {
  const id = await resolveCategoryId("expert-analysis");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });
  return normalizePosts(response.data);
}

export async function getTechPosts({ perPage = 4 } = {}) {
  const id = await resolveCategoryId("tech");
  if (!id) return [];

  const response = await wpClient.get("/posts", {
    params: {
      categories: id,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });
  return normalizePosts(response.data);
}

export async function getPostBySlug(slug) {
  const response = await wpClient.get("/posts", {
    params: { slug, _embed: 1 },
  });
  return normalizePost(response.data?.[0]);
}

export async function getPostsByTag(slug, { page = 1, perPage = 10 } = {}) {
  const id = await resolveTagId(slug);
  if (!id) return { posts: [], pagination: { total: 0, totalPages: 0 } };

  const response = await wpClient.get("/posts", {
    params: {
      tags: id,
      page,
      per_page: perPage,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
  });
  return {
    posts: normalizePosts(response.data),
    pagination: extractPagination(response),
  };
}

export async function getPostsByAuthor(
  slug,
  { page = 1, perPage = 10, authorId } = {},
) {
  let id = authorId;
  if (!id) {
    const user = await wpClient.get("/users", { params: { slug } });
    id = user.data?.[0]?.id;
  }
  if (!id) return { posts: [], pagination: { total: 0, totalPages: 0 } };

  const response = await wpClient.get("/posts", {
    params: { author: id, page, per_page: perPage, _embed: 1 },
  });
  return {
    posts: normalizePosts(response.data),
    pagination: extractPagination(response),
  };
}
