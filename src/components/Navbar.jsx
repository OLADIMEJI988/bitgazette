import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import globe from "../assets/globe.svg";

const NAV_LINKS = [
  { label: "Crypto News", to: "/category/news" },
  { label: "Expert Analysis", to: "/category/expert-analysis" },
  { label: "Finance", to: "/category/finance" },
  { label: "Tech", to: "/category/tech" },
  { label: "Sponsored", to: "/category/sponsored-articles" },
  { label: "Press Release", to: "/category/press-release" },
  { label: "Opinion", to: "/category/opinion" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="font-['news-reader'] sticky top-0 z-50 border-b border-surface-border bg-white">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-4 px-4 lg:px-6">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex shrink-0 items-center"
          aria-label="The Bit Gazette home"
        >
          <img src={logo} alt="The Bit Gazette" className="h-[71px] w-auto" />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-[16px] tracking-[0.08px] font-medium transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-surface-alt"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
          >
            <span className="transition-transform duration-200">
              {searchOpen ? (
                <X size={20} />
              ) : (
                <img src={search} alt="Search" className="h-5 w-5" />
              )}
            </span>
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-surface-alt sm:flex"
            aria-label="Change language"
          >
            <img src={globe} alt="Change language" className="h-5 w-5" />
          </button>
          <div className="h-[40px] bg-[#D9D9D9] w-[1px]"></div>
          <Link
            to="/login"
            className="ml-1 hidden tracking-[0.08px] rounded-full bg-[#A6A6A6]/15 px-4 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-ink/90 border-[#F1EEEE] sm:inline-flex shadow-[inset_0_0_5px_rgba(255,255,255,0.2),inset_0_4px_5px_rgba(255,255,255,0.2),inset_0_-4px_5px_rgba(255,255,255,0.2)]"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:bg-surface-alt lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-surface-border bg-surface px-4 py-3">
          <form
            role="search"
            className="mx-auto flex max-w-content items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();

              const q = new FormData(e.currentTarget)
                .get("q")
                ?.toString()
                .trim();

              if (!q) return;

              navigate(`/search?q=${encodeURIComponent(q)}`);
              setSearchOpen(false);
            }}
          >
            <input
              name="q"
              type="search"
              placeholder="Search crypto news, coins, companies…"
              className="w-full rounded border border-surface-border placeholder:font-['manrope'] tracking-wide px-4 py-2 text-sm focus:border-brand focus:outline-none font-['manrope']"
              autoFocus
            />
            <button
              type="submit"
              className="rounded bg-brand px-4 py-2 text-sm font-['manrope'] tracking-wide font-semibold text-white"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          <nav className="fixed inset-0 z-50 bg-white" aria-label="Mobile">
            {/* Header */}
            <div className="flex h-[72px] items-center justify-between border-b border-surface-border px-3">
              <img
                src={logo}
                alt="The Bit Gazette"
                className="h-[71px] w-auto"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full p-2 hover:bg-surface-alt transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex h-[calc(100vh-86px)] flex-col justify-between p-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-4 text-[17px] font-['news-reader'] tracking-[0.06px] font-medium transition-colors ${
                          isActive
                            ? "bg-brand-light text-brand"
                            : "text-ink hover:bg-surface-alt"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-8 block rounded-xl bg-brand px-4 py-4 text-center tracking-[0.08px] text-[16px] font-['manrope'] font-semibold text-white"
              >
                Login
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
