import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { useFetch } from '../hooks/useFetch';
import { searchPosts } from '../services/search';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/ui/Pagination';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(query);

  const { data, loading, error, refetch } = useFetch(
    () => searchPosts(query, { page, perPage: 10 }),
    [query, page]
  );

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <h1 className="mb-6 font-display text-2xl font-extrabold text-ink">Search</h1>

      <form
        role="search"
        className="mb-8 flex max-w-xl gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
          setSearchParams(inputValue ? { q: inputValue } : {});
        }}
      >
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search crypto news, coins, companies…"
          className="w-full rounded border border-surface-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
        />
        <button type="submit" className="flex items-center gap-2 rounded bg-brand px-4 py-2.5 text-sm font-semibold text-white">
          <SearchIcon size={16} /> Search
        </button>
      </form>

      {query ? (
        <>
          <p className="mb-4 text-sm text-ink-soft">
            Showing results for <span className="font-semibold text-ink">"{query}"</span>
          </p>
          <div className="max-w-3xl">
            <ArticleList posts={data?.posts} loading={loading} error={error} onRetry={refetch} />
            <Pagination
              page={page}
              totalPages={data?.pagination?.totalPages}
              onPageChange={setPage}
            />
          </div>
        </>
      ) : (
        <p className="text-sm text-ink-soft">Enter a search term to find articles.</p>
      )}
    </div>
  );
}
