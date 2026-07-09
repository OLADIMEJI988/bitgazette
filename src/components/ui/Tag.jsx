import {
  Radio,
  Bitcoin,
  Cpu,
  BrainCircuit,
  Landmark,
  MessageSquareQuote,
  ChartColumnIncreasing,
  Newspaper,
  Megaphone,
  Tag as TagIcon,
} from "lucide-react";

const VARIANTS = {
  category: "bg-brand text-white",
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
  breaking: <Radio size={15} className="animate-gentle-pulse" />,
  sponsored: <Megaphone size={15} className="animate-gentle-pulse" />,
  tech: <Cpu size={15} />,
  finance: <Landmark size={15} />,
  crypto: <Bitcoin size={15} />,
  bitcoin: <Bitcoin size={15} />,
  ai: <BrainCircuit size={15} className="animate-gentle-pulse" />,
  opinion: <MessageSquareQuote size={15} />,
  analysis: <ChartColumnIncreasing size={15} />,
  "expert analysis": <ChartColumnIncreasing size={15} />,
  "press release": <Newspaper size={15} />,
  press: <Newspaper size={15} />,
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
      className={`inline-flex font-['Plus_Jakarta_Sans'] items-center gap-1.5 rounded-sm px-2.5 py-1 text-[14px] font-semibold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
