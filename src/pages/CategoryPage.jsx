import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { getPostsByCategory } from '../services/posts';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/ui/Pagination';

export default function CategoryPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(1);

  const { data, loading, error, refetch } = useFetch(
    () => getPostsByCategory(slug, { page, perPage: 10 }),
    [slug, page]
  );

  return (
    <div className="mx-auto max-w-content px-4 py-8 font-['news-reader'] tracking-wide">
      <h1 className="mb-6 text-2xl font-medium capitalize text-ink">
        {slug.replace(/-/g, ' ')}
      </h1>
      <div className="mx-auto max-w-3xl">
        <ArticleList
          posts={data?.posts}
          loading={loading}
          error={error}
          onRetry={refetch}
        />
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
