import {
  Tag as TagIcon,
} from "lucide-react";

import {
  ChartIcon,
  MegaphoneIcon,
  TechIcon,
  TrendingIcon,
  OpinionIcon,
  PressReleaseIcon,
  BitcoinIcon,
  FinanceIcon,
} from "./AnimatedIcons";

const VARIANTS = {
  category: "bg-[#A6A6A6]/15 hover:bg-brand hover:text-white text-ink transition-all duration-300 ease-in-out",
  breaking: "bg-brand text-white",
  sponsored: "bg-brand text-white",
  tech: "bg-brand text-white",
  finance: "bg-brand text-white",
  crypto: "bg-brand text-white",
  ai: "bg-brand text-white",
  opinion: "bg-brand text-white",
  analysis: "bg-brand text-white",
  press: "bg-brand text-white",
};

const ICONS = {
  breaking: <TrendingIcon className="w-[17px] h-[17px]" />,
  sponsored: <MegaphoneIcon className="w-[17px] h-[17px]" />,
  tech: <TechIcon className="w-[17px] h-[17px]" />,
  finance: <FinanceIcon className="w-[17px] h-[17px]" />,
  crypto: <BitcoinIcon className="w-[17px] h-[17px]" />,
  bitcoin: <BitcoinIcon className="w-[17px] h-[17px]" />,
  ai: <TechIcon className="w-[17px] h-[17px]" />, // or make a dedicated AI icon
  opinion: <OpinionIcon className="w-[17px] h-[17px]" />,
  analysis: <ChartIcon className="w-[17px] h-[17px]" />,
  "expert analysis": <ChartIcon className="w-[17px] h-[17px]" />,
  "press release": <PressReleaseIcon className="w-[17px] h-[17px]" />,
  press: <PressReleaseIcon className="w-[17px] h-[17px]" />,
};

const getIcon = (value = "", variant = "category") => {
  if (variant !== "category") {
    return ICONS[variant] ?? <TagIcon size={15} />;
  }

  const name = value.toLowerCase();

  if (name.includes("breaking")) return ICONS.breaking;
  if (name.includes("sponsored")) return ICONS.sponsored;
  if (name.includes("tech")) return ICONS.tech;
  if (name.includes("finance")) return ICONS.finance;
  if (name.includes("bitcoin")) return ICONS.crypto;
  if (name.includes("crypto")) return ICONS.crypto;
  if (name.includes("ai")) return ICONS.ai;
  if (name.includes("analysis")) return ICONS.analysis;
  if (name.includes("opinion")) return ICONS.opinion;
  if (name.includes("press")) return ICONS.press;

  return <TagIcon size={15} />;
};

export default function Tag({
  children,
  variant = "category",
  className = "",
  ...props
}) {
  const key = String(children).trim().toLowerCase();

  const icon = getIcon(typeof children === "string" ? children : "", variant);

  return (
    <span
      className={`inline-flex font-['manrope'] items-center gap-1.5 rounded-sm px-2.5 py-1 text-[14px] font-semibold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
