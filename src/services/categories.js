import wpClient from './wordpressApi';

function normalizeCategory(cat) {
  return {
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    count: cat.count,
  };
}

export async function getCategories({ perPage = 20 } = {}) {
  const response = await wpClient.get('/categories', {
    params: { per_page: perPage, orderby: 'count', order: 'desc', hide_empty: true },
  });
  return response.data.map(normalizeCategory);
}

export async function getCategoryBySlug(slug) {
  const response = await wpClient.get('/categories', { params: { slug } });
  return response.data?.[0] ? normalizeCategory(response.data[0]) : null;
}
