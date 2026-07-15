import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const principles = [
  {
    title: "Verified Reporting",
    text: "Our reporting is built on named sources, verified information, and carefully attributed quotes whenever possible. Accuracy comes before speed.",
  },
  {
    title: "Editorial Independence",
    text: "Commercial relationships never influence our newsroom. Editorial decisions are made independently and without outside interference.",
  },
  {
    title: "Responsible Headlines",
    text: "We hold our headlines to the same standard as our reporting. They should inform readers accurately—not exaggerate or mislead them.",
  },
  {
    title: "Transparency",
    text: "When mistakes happen, we correct them openly. We believe accountability strengthens trust and improves our journalism.",
  },
];

const coverage = [
  "Cryptocurrency Markets",
  "Blockchain & Web3",
  "Artificial Intelligence",
  "Global Finance",
  "Fintech & Digital Payments",
  "Regulation & Public Policy",
  "Startups & Innovation",
  "Industry Analysis & Commentary",
  "Venture Capital & Funding",
  "Exchanges & Trading Platforms",
  "Digital Asset Security",
  "Enterprise Technology & Innovation",
];

const stats = [
  {
    value: "Dubai",
    label: "Global Headquarters",
  },
  {
    value: "Nigeria",
    label: "Editorial Team",
  },
  {
    value: "24/7",
    label: "Global Coverage",
  },
  {
    value: "Global",
    label: "Reader Focus",
  },
];

export default function About() {
  return (
    <main className="bg-background font-['manrope']">
      {/* Hero */}
      <section>
        <div className="mx-auto flex flex-col gap-12 px-4 py-14 sm:px-6 lg:justify-between">
          <div>
            <h1 className="mt-6 text-4xl font-['news-reader'] font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
              Global stories. Nigerian talent.
            </h1>
          </div>

          <div>
            <p className="text-base text-ink-soft sm:text-lg tracking-wide">
              The Bit Gazette is a Dubai-based publication covering
              cryptocurrency, blockchain, finance, and artificial intelligence
              for a global audience. While our headquarters place us at the
              heart of one of the world's fastest-moving financial and Web3
              ecosystems, our newsroom is proudly Nigeria-first—bringing
              together talented reporters, writers, and editors committed to
              producing journalism that is accurate, timely, and globally
              relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Coverage */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
          {/* Mission */}
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Our Mission
            </span>

            <h2 className="mt-4 text-3xl font-['news-reader'] font-medium text-ink">
              A global newsroom built on local talent.
            </h2>

            <p className="mt-6 leading-8 text-ink-soft">
              The Bit Gazette was founded on a simple belief: great journalism
              isn't defined by geography. Some of the world's most insightful
              reporting can come from newsrooms that have historically been
              overlooked. Our structure combines a Dubai headquarters with a
              Nigeria-first editorial team, allowing us to connect world-class
              reporting talent with one of the most important financial and
              blockchain hubs in the world.
            </p>

            <p className="mt-6 leading-8 text-ink-soft">
              By combining local expertise with a global perspective, we're
              building a publication that delivers credible reporting for
              readers everywhere while creating opportunities for journalists
              whose work deserves an international audience.
            </p>
          </div>

          {/* Coverage */}
          <div className="border-t border-line bg-surface-secondary p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Cover
            </span>

            <h2 className="mt-4 text-3xl font-['news-reader'] font-medium text-ink">
              Reporting on the industries shaping tomorrow.
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {coverage.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>

                  <span className="leading-7 text-ink-soft">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-surface p-8 text-center"
              >
                <div className="text-4xl font-['news-reader'] font-medium text-primary">
                  {stat.value}
                </div>

                <p className="mt-3 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Principles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Editorial Standards
          </span>

          <h2 className="mt-4 text-3xl font-['news-reader'] font-medium text-ink sm:text-4xl">
            Every story earns our readers' trust.
          </h2>

          <p className="mt-5 leading-8 text-ink-soft">
            Accuracy isn't just a goal—it's the foundation of our newsroom.
            Every article follows clear editorial standards designed to ensure
            our reporting is factual, transparent, and accountable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-1.5 w-12 rounded-full bg-primary" />

              <h3 className="text-xl font-medium text-ink font-['news-reader']">{item.title}</h3>

              <p className="mt-4 flex-1 leading-8 text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-secondary">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Read With Confidence
          </span>

          <h2 className="mt-5 text-3xl font-['news-reader'] font-medium text-ink sm:text-5xl">
            Journalism for readers who expect more than headlines.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
            From breaking developments in crypto and AI to the financial and
            regulatory stories shaping global markets, The Bit Gazette delivers
            reporting grounded in verification, context, and editorial
            integrity—helping readers understand not just what's happening, but
            why it matters.
          </p>

          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[red] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Latest Stories
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
