import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Wraps any async fetcher with loading / error / data state and cancels
 * stale requests if `deps` change before the previous call resolves.
 *
 *   const { data, loading, error } = useFetch(() => getLatestPosts({ perPage: 6 }), []);
 */
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const requestId = useRef(0);

  const run = useCallback(() => {
    const id = ++requestId.current;
    setLoading(true);
    setError(null);

    fetcher()
      .then((result) => {
        if (id === requestId.current) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (id === requestId.current) {
          setError(err);
          setLoading(false);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return { data, loading, error, refetch: run };
}
