import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getLatestPosts } from '../services/posts';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/ui/Pagination';

export default function News() {
  const [page, setPage] = useState(1);
  const { data, loading, error, refetch } = useFetch(
    () => getLatestPosts({ page, perPage: 10 }),
    [page]
  );

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <h1 className="mb-6 font-display text-2xl font-extrabold text-ink">All News</h1>
      <div className="mx-auto max-w-3xl">
        <ArticleList posts={data?.posts} loading={loading} error={error} onRetry={refetch} />
        <Pagination
          page={page}
          totalPages={data?.pagination?.totalPages}
          onPageChange={(p) => {
            setPage(p);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
}
