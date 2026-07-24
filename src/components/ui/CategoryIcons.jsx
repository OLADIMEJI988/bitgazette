import { Tag as TagIcon } from "lucide-react";

import {
  ChartIcon,
  MegaphoneIcon,
  TechIcon,
  OpinionIcon,
  PressReleaseIcon,
  BlockChainIcon,
  BitcoinIcon,
  FinanceIcon,
  AnimatedBreakingNewsIcon,
  AiIcon,
} from "./AnimatedIcons";

const ICONS = {
  breaking: AnimatedBreakingNewsIcon,
  sponsored: MegaphoneIcon,
  tech: TechIcon,
  finance: FinanceIcon,
  crypto: BlockChainIcon,
  news: BlockChainIcon,
  bitcoin: BitcoinIcon,
  ai: AiIcon,
  opinion: OpinionIcon,
  analysis: ChartIcon,
  "expert analysis": ChartIcon,
  "press release": PressReleaseIcon,
  press: PressReleaseIcon,
};

export function getIcon(
  value = "",
  variant = "category",
  className = "w-[17px] h-[17px]",
) {
  if (variant !== "category") {
    const Icon = ICONS[variant];
    return Icon ? (
      <Icon className={className} />
    ) : (
      <TagIcon className={className} />
    );
  }

  const name = value.toLowerCase();

  if (name.includes("breaking"))
    return <AnimatedBreakingNewsIcon className={className} />;

  if (name.includes("news")) return <BlockChainIcon className={className} />;

  if (name.includes("sponsored"))
    return <MegaphoneIcon className={className} />;

  if (name.includes("tech")) return <TechIcon className={className} />;

  if (name.includes("finance")) return <FinanceIcon className={className} />;

  if (name.includes("bitcoin")) return <BitcoinIcon className={className} />;

  if (name.includes("crypto")) return <BlockChainIcon className={className} />;

  if (name.includes("ai")) return <AiIcon className={className} />;

  if (name.includes("analysis")) return <ChartIcon className={className} />;

  if (name.includes("opinion")) return <OpinionIcon className={className} />;

  if (name.includes("press")) return <PressReleaseIcon className={className} />;

  return <TagIcon className={className} />;
}
