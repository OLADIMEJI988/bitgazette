import wpClient from './wordpressApi';

function normalizeAuthor(user) {
  return {
    id: user.id,
    name: user.name,
    slug: user.slug,
    bio: user.description,
    avatar: user.avatar_urls?.['96'] ?? null,
    url: user.url,
  };
}

export async function getAuthorBySlug(slug) {
  const response = await wpClient.get('/users', { params: { slug } });
  return response.data?.[0] ? normalizeAuthor(response.data[0]) : null;
}

export async function getAuthors({ perPage = 20 } = {}) {
  const response = await wpClient.get('/users', { params: { per_page: perPage } });
  return response.data.map(normalizeAuthor);
}
