import wpClient, { extractPagination } from './wordpressApi';
import { normalizePosts } from '../utils/normalizePost';

export async function searchPosts(query, { page = 1, perPage = 10 } = {}) {
  if (!query?.trim()) {
    return { posts: [], pagination: { total: 0, totalPages: 0 } };
  }

  const response = await wpClient.get('/posts', {
    params: { search: query, page, per_page: perPage, _embed: 1 },
  });

  return {
    posts: normalizePosts(response.data),
    pagination: extractPagination(response),
  };
}
