import axios from 'axios';

const BASE_URL = import.meta.env.VITE_WORDPRESS_API;

if (!BASE_URL) {
  // eslint-disable-next-line no-console
  console.warn(
    '[wordpressApi] VITE_WORDPRESS_API is not set. Add it to your .env file, e.g.\n' +
      'VITE_WORDPRESS_API=/wp/wp/v2'
  );
}

/**
 * Shared Axios instance for all WordPress REST API calls.
 * Every request/response passes through here so headers, timeouts,
 * and error handling stay consistent across the app.
 */
export const wpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    Accept: 'application/json',
  },
});

wpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong while talking to the WordPress API.';

    return Promise.reject({
      status: status ?? null,
      message,
      original: error,
    });
  }
);

/**
 * Reads the WP-provided `X-WP-TotalPages` / `X-WP-Total` headers so
 * list views can paginate without an extra request.
 */
export function extractPagination(response) {
  return {
    total: Number(response.headers?.['x-wp-total'] ?? 0),
    totalPages: Number(response.headers?.['x-wp-totalpages'] ?? 0),
  };
}

export default wpClient;
