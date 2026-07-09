import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const principles = [
  {
    title: "Accuracy",
    text: "Every article is fact-checked and reviewed before publication to ensure the information we publish is accurate, well-sourced, and presented with the appropriate context. When errors occur, we acknowledge and correct them promptly and transparently.",
  },
  {
    title: "Independence",
    text: "Our editorial decisions are made independently and are never influenced by advertisers, sponsors, or outside interests. We maintain a clear separation between our newsroom and commercial partnerships to preserve the integrity of our reporting.",
  },
  {
    title: "Clarity",
    text: "We explain complex topics in a way that's accessible to newcomers while remaining valuable to experienced readers. Our goal is to break down technical concepts, market developments, and regulatory changes into reporting that is clear, informative, and easy to understand.",
  },
  {
    title: "Integrity",
    text: "Our reporting is guided by fairness, accountability, and a commitment to trustworthy journalism. We strive to present balanced perspectives, provide meaningful context, and uphold the highest editorial standards in everything we publish.",
  },
];

const coverage = [
  "Bitcoin & Cryptocurrency Markets",
  "Blockchain Technology",
  "Web3 & Decentralized Applications",
  "DeFi & Digital Assets",
  "Global Regulation & Policy",
  "Fintech & Startups",
  "Cybersecurity & Industry Incidents",
  "Expert Analysis & Market Insights",
];

const stats = [
  {
    value: "24/7",
    label: "Market Coverage",
  },
  {
    value: "Global",
    label: "Industry Perspective",
  },
  {
    value: "Daily",
    label: "News & Analysis",
  },
  {
    value: "100%",
    label: "Editorial Independence",
  },
];

export default function About() {
  return (
    <main className="bg-background font-['Plus_Jakarta_Sans']">
      {/* Hero */}
      <section>
        <div className="mx-auto flex flex-col gap-12 px-4 py-16 sm:px-6 lg:justify-between">
          <div>
            {/* <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              About The Bit Gazette
            </span> */}

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Independent journalism for the digital asset economy.
            </h1>
          </div>

          <div>
            <p className="text-base text-ink-soft sm:text-lg tracking-wide">
              The Bit Gazette delivers trusted reporting on cryptocurrency,
              blockchain technology, Web3, regulation, and the businesses
              shaping the future of finance. Our goal is simple, provide
              accurate, balanced, and timely journalism that helps readers
              navigate one of the world's fastest-moving industries. Whether
              you're following market movements, exploring emerging
              technologies, or keeping up with global policy changes, we strive
              to deliver reporting that is insightful, reliable, and accessible.
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

            <h2 className="mt-4 text-3xl font-semibold text-ink">
              Helping people understand the future of finance.
            </h2>

            <p className="mt-6 leading-8 text-ink-soft">
              We believe reliable journalism is essential in an industry where
              innovation moves quickly and misinformation spreads even faster.
              Every story we publish is designed to help readers make informed
              decisions through context, accuracy, and thoughtful reporting.
            </p>

            <p className="mt-6 leading-8 text-ink-soft">
              Whether you're a seasoned investor, developer, policymaker, or
              someone discovering digital assets for the first time, we aim to
              make blockchain and crypto more accessible without sacrificing
              depth or credibility.
            </p>
          </div>

          {/* Coverage */}
          <div className="border-t border-line bg-surface-secondary p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Cover
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-ink">
              Reporting across the digital asset ecosystem.
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
                <div className="text-4xl font-bold text-primary">
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

          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            Journalism built on trust.
          </h2>

          <p className="mt-5 leading-8 text-ink-soft">
            Every article published by The Bit Gazette follows the same
            editorial standards. We strive to produce reporting that is fair,
            transparent, and valuable to our readers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-1.5 w-12 rounded-full bg-primary" />

              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>

              <p className="mt-4 flex-1 leading-8 text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-secondary">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Stay Informed
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-ink sm:text-5xl">
            Built for readers who value trustworthy reporting.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
            Whether you're following Bitcoin price movements, tracking
            regulatory developments, researching blockchain technology, or
            staying informed about the companies shaping the digital economy,
            The Bit Gazette is committed to delivering timely, accurate, and
            insightful journalism every day.
          </p>

          <Link
            to="/category/news"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Browse Latest Stories
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
