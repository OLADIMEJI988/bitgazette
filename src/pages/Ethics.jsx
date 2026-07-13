import React from "react";

const sections = [
  {
    title: "Our Commitment",
    content: (
      <>
        <p>
          The Bit Gazette exists to report on cryptocurrency, blockchain,
          tokenized real-world assets (RWAs), fintech, artificial intelligence,
          and regulatory developments with accuracy, independence, and
          accountability.
        </p>

        <p className="mt-6">
          Digital assets remain one of the world's fastest-moving industries,
          where speculation often outpaces facts. That makes rigorous journalism
          more important—not less. Every article we publish is held to the
          editorial standards outlined below and reviewed before publication.
        </p>
      </>
    ),
  },
  {
    title: "Sourcing Standards",
    content: (
      <>
        <ul className="space-y-8">
          <li>
            <strong className="block text-gray-900 mb-2">Named Sources</strong>
            We do not publish anonymous sourcing. References such as "industry
            observers say" or "analysts note" without clearly identifying the
            source are not permitted in our reporting.
          </li>

          <li>
            <strong className="block text-gray-900 mb-2">
              Verified Quotations
            </strong>
            Every direct quotation must be traceable to a verifiable primary
            source—including interviews, official statements, press releases,
            public filings, or social media posts—with an identifiable date,
            source, and publication.
          </li>

          <li>
            <strong className="block text-gray-900 mb-2">
              Independent Verification
            </strong>
            Facts, figures, and claims are checked against primary and
            independent sources before publication. Press releases are treated
            as sources—not proof.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Accuracy Over Speed",
    content: (
      <>
        <p>
          We would rather be accurate than first. When legislation, agreements,
          funding rounds, or regulatory actions are still pending, we report
          them as pending—not final.
        </p>

        <p className="mt-6">
          Headlines are held to the same standard. They should be factual,
          precise, and supported by the reporting, rather than relying on vague
          language or exaggerated framing designed solely to attract clicks.
        </p>
      </>
    ),
  },
  {
    title: "Disclosure",
    content: (
      <ul className="space-y-8">
        <li>
          Articles substantially based on a press release include a clear
          disclosure identifying them as such.
        </li>

        <li>
          Sponsored content, paid placements, and partner content are clearly
          labelled and visually distinct from independent editorial coverage.
        </li>

        <li>
          Staff members and contributors are required to disclose any financial
          interest in an asset, protocol, company, or project they cover.
        </li>
      </ul>
    ),
  },
  {
    title: "Corrections Policy",
    content: (
      <>
        <p>
          Mistakes can happen in any newsroom, particularly in markets that
          evolve rapidly. When errors occur, we correct them promptly and
          transparently.
        </p>

        <ul className="mt-8 space-y-6">
          <li>
            • Corrections include a note explaining what changed and when.
          </li>

          <li>
            • Substantive corrections are distinguished from routine copy edits.
          </li>

          <li>
            • We do not silently alter published factual claims.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Editorial Independence",
    content: (
      <>
        <p>
          Advertising, sponsorships, partnerships, and commercial relationships
          never determine what we cover or how we cover it.
        </p>

        <p className="mt-6">
          Editorial decisions are made independently by our newsroom. Whenever a
          conflict of interest exists, it is disclosed clearly to readers.
        </p>
      </>
    ),
  },
  {
    title: "Internal Quality Control",
    content: (
      <>
        <p>
          Every article undergoes a structured editorial review before
          publication. This includes checks for sourcing, attribution, factual
          accuracy, headline quality, formatting, and overall editorial
          standards.
        </p>

        <p className="mt-6">
          When recurring issues are identified, we treat them as process
          problems to improve—not simply individual mistakes.
        </p>
      </>
    ),
  },
  {
    title: "Accountability",
    content: (
      <>
        <p>
          If you believe we've published inaccurate information, missed a
          disclosure, or fallen short of these standards, we encourage you to
          contact our editorial team.
        </p>

        <p className="mt-6">
          We carefully review every credible report and correct genuine errors
          promptly.
        </p>

        <a
          href="mailto:info@thebitgazette.com"
          className="inline-block mt-8 text-[#FF2C32] font-medium hover:underline"
        >
          info@thebitgazette.com
        </a>
      </>
    ),
  },
];

function PolicySection({ title, content }) {
  return (
    <section className="font-['Plus_Jakarta_Sans'] mt-10 md:mt-14 pt-8 md:pt-14 border-t border-gray-300">
      <h2 className="mb-10 md:mb-14 text-xl md:text-2xl font-medium uppercase tracking-wide text-gray-600">
        {title}
      </h2>

      <div className="max-w-5xl text-base md:text-[22px] leading-8 text-gray-600 space-y-6">
        {content}
      </div>
    </section>
  );
}

export default function Ethics() {
  return (
    <main className="font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl">
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Editorial Ethics & Standards
          </h1>

          <p className="mt-8 text-base md:text-[22px] leading-8 text-gray-600">
            At The Bit Gazette, trust is our most valuable asset. Our readers
            rely on us for accurate reporting, thoughtful analysis, and
            independent journalism across cryptocurrency, blockchain,
            artificial intelligence, fintech, and emerging technologies. These
            editorial standards define how we report, verify information,
            correct mistakes, and maintain the independence of our newsroom.
          </p>
        </div>

        {sections.map((section) => (
          <PolicySection
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </main>
  );
}