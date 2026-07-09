import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { getAuthorBySlug } from '../services/authors';
import { getPostsByAuthor } from '../services/posts';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/ui/Pagination';
import { SkeletonBlock } from '../components/ui/Loaders';

export default function AuthorPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(1);

  const { data: author, loading: authorLoading } = useFetch(() => getAuthorBySlug(slug), [slug]);
  const { data, loading, error, refetch } = useFetch(
    () => getPostsByAuthor(slug, { page, perPage: 10 }),
    [slug, page]
  );

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        {authorLoading ? (
          <SkeletonBlock className="h-16 w-16 rounded-full" />
        ) : (
          author?.avatar && <img src={author.avatar} alt="" className="h-16 w-16 rounded-full" />
        )}
        <div>
          <h1 className="font-display text-2xl font-extrabold text-ink">
            {authorLoading ? 'Loading…' : author?.name ?? slug}
          </h1>
          {author?.bio && <p className="mt-1 max-w-xl text-sm text-ink-soft">{author.bio}</p>}
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <ArticleList posts={data?.posts} loading={loading} error={error} onRetry={refetch} />
        <Pagination page={page} totalPages={data?.pagination?.totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
