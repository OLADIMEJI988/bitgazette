import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/Linkedin.svg";
import instagram from "../assets/Instagram.svg";

const COLUMNS = [
  {
    heading: "About",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Masthead", to: "/masthead" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Accessibility", to: "/accessibility" },
      { label: "Advertise", to: "/advertise" },
    ],
  },
  {
    heading: "News",
    links: [
      { label: "Crypto News", to: "/category/news" },
      { label: "Finance", to: "/category/finance" },
      { label: "Tech", to: "/category/tech" },
      { label: "Analysis", to: "/category/expert-analysis" },
    ],
  },
  {
    heading: "Sponsored",
    links: [
      { label: "Press Release", to: "/category/press-release" },
      { label: "MEXC", to: "/tag/mexc" },
      { label: "Stellar", to: "/tag/stellar" },
    ],
  },
];

const SOCIALS = [
  {
    icon: facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576706251527&rdid=PB2BA79RdOQz6bMT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CDuikr157%2F#",
  },
  { icon: twitter, label: "X (Twitter)", href: "https://x.com/thebitgazette" },
  {
    icon: linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-bit-gazette/?viewAsMember=true",
  },
  {
    icon: instagram,
    label: "Instagram",
    href: "https://www.instagram.com/thebitgazette",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-content px-4 lg:px-6 py-9">
        <Link to="/" className="inline-block" aria-label="The Bit Gazette home">
          <img src={logo} alt="The Bit Gazette" className="h-[78px] w-auto" />
        </Link>

        <div className="mt-9 grid grid-cols-2 gap-8 w-full mx-1 lg:mx-0 sm:grid-cols-2 lg:grid-cols-4 lg:w-[94%]">
          {COLUMNS.map((col) => (
            <div key={col.heading} className="w-full">
              <h3 className="mb-4 text-[16px] font-['news-reader'] font-medium tracking-[0.08px] text-ink">
                {col.heading}
              </h3>
              <ul className="space-y-2 font-['manrope'] tracking-[0.06px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-soft transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 font-['manrope'] tracking-[0.06px] flex flex-col-reverse items-center justify-between gap-4 border-t border-surface-border pt-7 sm:flex-row">
          <div className="hidden lg:flex flex-wrap items-center gap-5 text-xs text-ink-muted">
            <span>Copyright © 2025 The Bit Gazette.</span>
            <Link to="/ethics" className="hover:text-brand">
              Ethics
            </Link>
            <Link to="/privacy" className="hover:text-brand">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-brand">
              Terms of Use
            </Link>
          </div>

          <div className="flex flex-col lg:hidden flex-wrap items-center text-xs text-ink-muted mt-2">
            <p>Copyright © 2025 The Bit Gazette.</p>
            <div className="flex gap-5 mt-2">
              <Link to="/ethics" className="hover:text-brand">
                Ethics
              </Link>
              <Link to="/privacy" className="hover:text-brand">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-brand">
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-7 w-7 lg:h-6 lg:w-6 items-center justify-center rounded-full transition-colors hover:bg-surface-alt"
              >
                <img src={icon} alt={label} className="h-6 w-6 lg:h-5 lg:w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
