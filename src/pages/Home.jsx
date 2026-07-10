import { History } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import {
  getExpertAnalysis,
  getSponsoredPosts,
  getTechPosts,
} from "../services/posts";
import SidebarWidget from "../components/SidebarWidget";
import {
  getFeaturedPosts,
  getLatestPosts,
  getFinancePosts,
} from "../services/posts";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleList from "../components/ArticleList";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CategorySection from "../components/CategorySection";

const LOWER_SECTIONS = [
  { title: "Opinion", slug: "opinion" },
  { title: "Press Release", slug: "press-release" },
  { title: "Bitcoin", slug: "bitcoin" },
  // { title: "Finance", slug: "finance" },
];

export default function Home() {
  const featured = useFetch(() => getFeaturedPosts({ perPage: 1 }), []);
  const latest = useFetch(() => getLatestPosts({ perPage: 9 }), []);
  const expert = useFetch(() => getExpertAnalysis({ perPage: 3 }), []);
  const sponsored = useFetch(() => getSponsoredPosts({ perPage: 2 }), []);
  const finance = useFetch(() => getFinancePosts({ perPage: 3 }), []);

  return (
    <div className="mx-auto max-w-content px-4 lg:px-6 py-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr_300px]">
        <div className="order-2 flex lg:order-1 mb-5 lg:mb-0">
          <LeftSidebar />
        </div>

        <div className="order-1 space-y-[56px] lg:order-2 lg:border lg:border-surface-border rounded-[8px] mt-2 lg:mt-0 lg:px-5 mb-5 lg:mb-0">
          <section aria-label="Featured story">
            <h2 className="lg:mb-5 mb-6 text-lg lg:text-[16px] font-['Plus_Jakarta_Sans'] font-medium tracking-[0.04px] text-ink">
              Featured Story
            </h2>
            <FeaturedArticle
              post={featured.data?.[0]}
              loading={featured.loading}
            />
          </section>

          <section aria-label="Latest stories">
            <div className="font-['Plus_Jakarta_Sans'] mb-4 inline-flex items-center gap-[10px] rounded-t-[2px] bg-[#0F172A] px-4 py-2.5 text-[18px] tracking-[0.04px] font-medium text-white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7416 8.60639L22.3563 8.45358C20.482 3.70459 15.101 0.999732 9.85451 2.34456C4.26657 3.77692 0.947449 9.26089 2.44104 14.5933C3.93462 19.9258 9.67532 23.0874 15.2633 21.6551C19.4123 20.5916 22.3104 17.2945 22.9166 13.4842"
                  pathLength="1"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="1 1"
                />
                <path
                  d="M12.5 7.99982V11.9998L14.5833 13.9998"
                  pathLength="1"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="1 1"
                />
              </svg>
              Latest Stories
            </div>
            <ArticleList
              posts={latest.data?.posts}
              loading={latest.loading}
              error={latest.error}
              onRetry={latest.refetch}
            />
          </section>
        </div>

        <div className="order-3">
          <RightSidebar />
        </div>
      </div>

      <div className="my-14 flex w-full flex-col lg:flex-row gap-4">
        <div className="grid gap-10 flex-1 grid-cols-1 lg:gap-5 rounded-[8px] lg:border lg:border-surface-border lg:px-5 pt-[22px] pb-3 sm:grid-cols-2 lg:grid-cols-3">
          {LOWER_SECTIONS.map((section, index) => (
            <CategorySection
              key={section.slug}
              title={section.title}
              slug={section.slug}
              isLast={index === LOWER_SECTIONS.length - 1}
            />
          ))}
        </div>

        <div className="w-full lg:min-w-[300px] lg:max-w-[300px]">
          <SidebarWidget
            title="Finance"
            to="/category/finance"
            posts={finance.data}
            loading={finance.loading}
            error={finance.error}
            layout="stacked"
          />
        </div>
      </div>
    </div>
  );
}
