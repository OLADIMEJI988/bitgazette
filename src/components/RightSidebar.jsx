import { Megaphone } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import {
  getExpertAnalysis,
  getSponsoredPosts,
  getTechPosts,
} from "../services/posts";
import SidebarWidget from "./SidebarWidget";
import { AnimatedChartIcon, AnimatedMegaphoneIcon, AnimatedTechIcon } from "./ui/AnimatedIcons";

export default function RightSidebar() {
  const expert = useFetch(() => getExpertAnalysis({ perPage: 3 }), []);
  const sponsored = useFetch(() => getSponsoredPosts({ perPage: 2 }), []);
  const tech = useFetch(() => getTechPosts({ perPage: 3 }), []);

  return (
    <aside className="space-y-8 lg:space-y-6 h-full" aria-label="Sidebar">
      <SidebarWidget
        title="Expert Analysis"
        Icon={AnimatedChartIcon}
        to="/category/expert-analysis"
        posts={expert.data}
        loading={expert.loading}
        error={expert.error}
        layout="stacked"
      />

      {/* <div className="overflow-hidden rounded-lg bg-brand text-center text-sm font-semibold text-white">
        <div className="flex items-center justify-center gap-2 px-4 py-3">
          <Megaphone size={16} aria-hidden="true" />
          Find out what's new in our Sponsored Articles!
        </div>
      </div> */}

      <SidebarWidget
        title="Sponsored Articles"
        Icon={AnimatedMegaphoneIcon}
        to="/category/sponsored-articles"
        posts={sponsored.data}
        loading={sponsored.loading}
        error={sponsored.error}
        layout="stacked"
      />

      <div className="sticky top-20">
        <SidebarWidget
          title="Tech"
          Icon={AnimatedTechIcon}
          to="/category/tech"
          posts={tech.data}
          loading={tech.loading}
          error={tech.error}
          layout="stacked"
        />
      </div>
    </aside>
  );
}
