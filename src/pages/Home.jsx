import { useState } from "react";
import { History } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { motion } from "framer-motion";
import AnimatedPath from "../components/AnimatedPath";
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
import {
  AnimatedOpinionIcon,
  AnimatedPressReleaseIcon,
  AnimatedBitcoinIcon,
  AnimatedFinanceIcon,
} from "../components/ui/AnimatedIcons";
import Pagination from "../components/ui/Pagination";

const LOWER_SECTIONS = [
  { title: "Opinion", slug: "opinion", Icon: AnimatedOpinionIcon },
  {
    title: "Press Release",
    slug: "press-release",
    Icon: AnimatedPressReleaseIcon,
  },
  { title: "Bitcoin", slug: "bitcoin", Icon: AnimatedBitcoinIcon },
  // { title: "Finance", slug: "finance" },
];

export default function Home() {
  const featured = useFetch(() => getFeaturedPosts({ perPage: 1 }), []);
  const [latestPage, setLatestPage] = useState(1);
  const latest = useFetch(
    () => getLatestPosts({ page: latestPage, perPage: 9 }),
    [latestPage],
  );
  const expert = useFetch(() => getExpertAnalysis({ perPage: 3 }), []);
  const sponsored = useFetch(() => getSponsoredPosts({ perPage: 2 }), []);
  const finance = useFetch(() => getFinancePosts({ perPage: 3 }), []);

  return (
    <div className="mx-auto max-w-content px-4 lg:px-6 py-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr_300px]">
        <div className="order-2 flex lg:order-1 mb-5 lg:mb-0">
          <LeftSidebar />
        </div>

        <div className="order-1 space-y-[56px] lg:order-2 lg:border lg:border-surface-border rounded-[8px] mt-2 lg:mt-0 lg:px-5 lg:py-5 mb-5 lg:mb-0">
          <section aria-label="Featured story">
            <div className="flex items-center gap-[6px] lg:mb-5 mb-6">
              {/* <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg> */}

              <h2 className="text-[22px] lg:text-lg font-['news-reader'] font-medium tracking-[0.06px] text-ink">
                Featured Story
              </h2>
            </div>

            <FeaturedArticle
              post={featured.data?.[0]}
              loading={featured.loading}
            />
          </section>

          <section aria-label="Latest stories">
            <div className="font-['news-reader'] mb-4 inline-flex items-center gap-[10px] rounded-t-[2px] bg-[#0F172A] px-4 py-2.5 text-[20px] tracking-[0.06px] font-medium text-white">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                <AnimatedPath
                  d="M19.7416 8.60639L22.3563 8.45358C20.482 3.70459 15.101 0.999732 9.85451 2.34456C4.26657 3.77692 0.947449 9.26089 2.44104 14.5933C3.93462 19.9258 9.67532 23.0874 15.2633 21.6551C19.4123 20.5916 22.3104 17.2945 22.9166 13.4842"
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  duration={1.2}
                  pauseBeforeReverse={3000}
                />

                <motion.path
                  d="M12.5 7.99982V11.9998L14.5833 13.9998"
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
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

            <Pagination
              page={latestPage}
              totalPages={latest.data?.pagination?.totalPages}
              onPageChange={(page) => {
                setLatestPage(page);

                // Scroll back to the Latest Stories section
                document
                  .querySelector('[aria-label="Latest stories"]')
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
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
              Icon={section.Icon}
              isLast={index === LOWER_SECTIONS.length - 1}
            />
          ))}
        </div>

        <div className="w-full lg:min-w-[300px] lg:max-w-[300px]">
          <SidebarWidget
            title="Finance"
            Icon={AnimatedFinanceIcon}
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
