import React from 'react'

export default function Advertise() {
  const sections = [
    {
      title: "Why Advertise With Us",
      content: (
        <>
          <p>
            The Bit Gazette reaches a global audience of technology
            professionals, entrepreneurs, investors, founders, developers,
            executives, and decision-makers who rely on us for trusted coverage
            of technology, artificial intelligence, blockchain, fintech,
            startups, and innovation.
          </p>

          <p className="mt-5">
            Whether you're launching a new product, growing brand awareness, or
            reaching a highly engaged audience, we offer advertising solutions
            designed to help you achieve meaningful results.
          </p>
        </>
      ),
    },
    {
      title: "Advertising Opportunities",
      content: (
        <>
          <p>We offer a range of advertising and partnership opportunities, including:</p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Display banner advertising</li>
            <li>Sponsored articles and branded content</li>
            <li>Newsletter sponsorships</li>
            <li>Homepage and category placements</li>
            <li>Product launches and announcements</li>
            <li>Press release distribution</li>
            <li>Event and conference promotion</li>
            <li>Strategic media partnerships</li>
          </ul>
        </>
      ),
    },
    {
      title: "Our Audience",
      content: (
        <>
          <p>
            Our readers include professionals and enthusiasts across the global
            technology ecosystem, including:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Technology founders and startup teams</li>
            <li>Software engineers and developers</li>
            <li>Investors and venture capital firms</li>
            <li>Blockchain and Web3 professionals</li>
            <li>Financial technology leaders</li>
            <li>Business executives and decision-makers</li>
            <li>Artificial intelligence practitioners</li>
            <li>Students, researchers, and innovators</li>
          </ul>
        </>
      ),
    },
    {
      title: "Sponsored Content",
      content: (
        <>
          <p>
            We believe in maintaining editorial transparency. Sponsored
            articles, branded content, and promotional materials are always
            clearly labeled so readers can distinguish them from independent
            editorial coverage.
          </p>

          <p className="mt-5">
            Advertising partnerships do not influence our newsroom's editorial
            decisions or independent reporting.
          </p>
        </>
      ),
    },
    {
      title: "Advertising Guidelines",
      content: (
        <>
          <p>
            To maintain the quality and integrity of our publication, we reserve
            the right to decline advertising that:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Is misleading or deceptive.</li>
            <li>Promotes illegal products or services.</li>
            <li>Contains offensive or discriminatory content.</li>
            <li>Violates applicable laws or regulations.</li>
            <li>Conflicts with our editorial standards.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Partner With The Bit Gazette",
      content: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>Reach a highly engaged technology audience.</li>
            <li>Build credibility through a trusted publication.</li>
            <li>Flexible campaign options tailored to your goals.</li>
            <li>Global visibility across multiple industries.</li>
            <li>Dedicated support throughout your campaign.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Get Started",
      content: (
        <>
          <p>
            We'd love to discuss how we can help you reach your audience.
            Whether you're interested in display advertising, sponsored content,
            or a long-term media partnership, our team is ready to assist.
          </p>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p>
              <strong>Email:</strong> info@thebitgazette.com
            </p>

            <p className="mt-2">
              <strong>Office:</strong> Silicon Oasis, Dubai, United Arab Emirates
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="font-['manrope']">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2C32]">
            Partner With Us
          </p>

          <h1 className="mt-4 font-['news-reader'] text-4xl font-medium tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
            Advertise With The Bit Gazette
          </h1>

          <p className="mt-8 text-base leading-8 tracking-wide text-gray-600 md:text-[22px]">
            Connect your brand with an audience passionate about technology,
            artificial intelligence, blockchain, fintech, startups, innovation,
            and the future of business. We offer advertising solutions that help
            businesses build awareness, generate engagement, and reach
            influential decision-makers around the world.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-gray-300 pt-10"
            >
              <h2 className="font-['news-reader'] text-3xl font-medium tracking-wide text-gray-900">
                {section.title}
              </h2>

              <div className="prose prose-neutral mt-6 max-w-none leading-8 text-gray-600">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
