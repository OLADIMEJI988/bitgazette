import wpClient from './wordpressApi';

/**
 * WordPress core REST API only filters /posts by numeric term IDs
 * (`categories`, `tags`) — there is no `categories_slug` / `tags_slug`
 * query param in core. This resolver looks the slug up once, caches it,
 * and falls back to a case-insensitive name match so small slug
 * differences (e.g. "opinion" vs "opinion-pieces") don't silently return
 * nothing.
 */

const cache = { category: new Map(), tag: new Map() };

async function resolveTermId(taxonomyEndpoint, slug, cacheBucket) {
  const key = slug.toLowerCase();
  if (cacheBucket.has(key)) return cacheBucket.get(key);

  // 1. Exact slug match (fast path, single request).
  const exact = await wpClient.get(taxonomyEndpoint, { params: { slug, per_page: 1 } });
  if (exact.data?.[0]?.id) {
    cacheBucket.set(key, exact.data[0].id);
    return exact.data[0].id;
  }

  // 2. Fallback: fetch all terms and match by slug or name, case-insensitively.
  // Catches sites where the slug differs slightly from what the design assumes.
  const all = await wpClient.get(taxonomyEndpoint, { params: { per_page: 100, hide_empty: false } });
  const match = all.data?.find(
    (term) => term.slug.toLowerCase() === key || term.name.toLowerCase() === key
  );

  if (match) {
    // eslint-disable-next-line no-console
    console.warn(
      `[wordpressApi] No exact "${slug}" slug found at ${taxonomyEndpoint}; matched "${match.name}" ` +
        `(slug: "${match.slug}") by name instead. Consider updating the slug in code to "${match.slug}".`
    );
    cacheBucket.set(key, match.id);
    return match.id;
  }

  // eslint-disable-next-line no-console
  console.warn(
    `[wordpressApi] No ${taxonomyEndpoint.replace('/', '')} found matching "${slug}". ` +
      `Check available slugs at ${wpClient.defaults.baseURL}${taxonomyEndpoint}?per_page=100`
  );
  cacheBucket.set(key, null);
  return null;
}

export function resolveCategoryId(slug) {
  return resolveTermId('/categories', slug, cache.category);
}

export function resolveTagId(slug) {
  return resolveTermId('/tags', slug, cache.tag);
}
