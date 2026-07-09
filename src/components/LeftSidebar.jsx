import { useState, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  getPopularPosts,
  getLatestPosts,
  getTrendingPosts,
} from "../services/posts";
import SmallNewsCard from "./SmallNewsCard";
import SidebarWidget from "./SidebarWidget";
import { ListSkeleton, SmallNewsCardSkeleton } from "./ui/Loaders";
import { EmptyState, ErrorState } from "./ui/StateMessage";

const TABS = ["Popular", "Comments", "Latest"];

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = useState("Popular");

  const fetcher = useMemo(() => {
    if (activeTab === "Latest") return () => getLatestPosts({ perPage: 3 });
    // "Popular" and "Comments" both rank by engagement; comment_count drives both.
    return () => getPopularPosts({ perPage: 3 });
  }, [activeTab]);

  const { data, loading, error, refetch } = useFetch(fetcher, [activeTab]);
  const posts = activeTab === "Latest" ? data?.posts : data;

  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(() => getTrendingPosts({ perPage: 3 }), []);

  return (
    <aside className="flex h-full w-full flex-col space-y-6" aria-label="Sidebar">
      <section className="rounded-[8px] border border-surface-border bg-surface p-5">
        <div
          className="mb-4 flex gap-1 border-b border-surface-border"
          role="tablist"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              type="button"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`-mb-px rounded-t border-b-2 px-3 py-2 text-sm font-semibold font-['Plus_Jakarta_Sans'] transition-colors ${
                activeTab === tab
                  ? "border-brand text-brand"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="thin-scroll space-y-5 overflow-y-auto pr-1">
          {loading && (
            <ListSkeleton count={3} Component={SmallNewsCardSkeleton} />
          )}
          {!loading && error && (
            <ErrorState message="Couldn't load stories." onRetry={refetch} />
          )}
          {!loading && !error && (!posts || posts.length === 0) && (
            <EmptyState message="No stories yet." />
          )}
          {!loading &&
            !error &&
            posts?.map((post) => <SmallNewsCard key={post.id} post={post} />)}
        </div>
      </section>

      <div className="sticky top-20 max-h-[calc(100vh-1px)] overflow-hidden">
        <SidebarWidget
          title="Trending"
          to="/category/trending-stories"
          posts={trending}
          loading={trendingLoading}
          error={trendingError}
          layout="stacked"
          className="flex h-full flex-col"
        />
      </div>
    </aside>
  );
}
