import { useFetch } from "../hooks/useFetch";
import { getPopularPosts, getTrendingPosts } from "../services/posts";
import SidebarWidget from "./SidebarWidget";
import { AnimatedTrendingIcon, AnimatedBreakingNewsIcon } from "./ui/AnimatedIcons";

export default function LeftSidebar() {
  const {
    data: popular,
    loading: popularLoading,
    error: popularError,
  } = useFetch(() => getPopularPosts({ perPage: 3 }), []);

  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(() => getTrendingPosts({ perPage: 3 }), []);

  return (
    <aside
      className="flex h-full w-full flex-col space-y-6"
      aria-label="Sidebar"
    >
      <SidebarWidget
        title="Breaking News"
        Icon={AnimatedBreakingNewsIcon}
        to="/category/breaking-news"
        posts={popular}
        loading={popularLoading}
        error={popularError}
        layout="stacked"
      />

      <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-1px)] lg:overflow-hidden">
        <SidebarWidget
          title="Trending"
          Icon={AnimatedTrendingIcon}
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