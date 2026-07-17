import React from 'react'

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing or using The Bit Gazette, you acknowledge that you
            have read, understood, and agreed to these Terms of Service. If you
            do not agree with these terms, please discontinue use of the
            website.
          </p>
        </>
      ),
    },
    {
      title: "About The Bit Gazette",
      content: (
        <>
          <p>
            The Bit Gazette is an independent digital publication covering
            technology, artificial intelligence, blockchain, cryptocurrency,
            fintech, startups, innovation, and global business.
          </p>

          <p className="mt-5">
            Our content is provided for informational and educational purposes
            only and should not be considered professional financial,
            investment, legal, or tax advice.
          </p>
        </>
      ),
    },
    {
      title: "Editorial Independence",
      content: (
        <>
          <p>
            We are committed to independent journalism. Editorial decisions are
            made without influence from advertisers, sponsors, or commercial
            partners.
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Sponsored content is clearly identified.</li>
            <li>Advertising does not affect editorial decisions.</li>
            <li>
              Our reporting follows our standards of fairness, transparency, and
              accuracy.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Intellectual Property",
      content: (
        <>
          <p>
            Unless otherwise stated, all articles, graphics, branding, logos,
            designs, images, videos, and original editorial content published on
            The Bit Gazette are protected by copyright and intellectual property
            laws.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">You may:</h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Share links to our articles.</li>
                <li>
                  Quote short excerpts with proper attribution and a link to the
                  original article.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">You may not:</h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Republish full articles without permission.</li>
                <li>Copy substantial portions of our content.</li>
                <li>Sell or commercially redistribute our work.</li>
                <li>Remove copyright or attribution notices.</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Acceptable Use",
      content: (
        <>
          <p>You agree not to use this website to:</p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Violate any applicable laws.</li>
            <li>Attempt unauthorized access to our systems.</li>
            <li>Distribute malware or harmful software.</li>
            <li>Interfere with website functionality.</li>
            <li>Impersonate another person or organization.</li>
            <li>Infringe upon the rights of others.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Third-Party Links",
      content: (
        <>
          <p>
            Our website may contain links to third-party websites and services.
            These links are provided solely for convenience.
          </p>

          <p className="mt-5">
            We do not control or endorse third-party websites and are not
            responsible for their content, privacy practices, or availability.
          </p>
        </>
      ),
    },
    {
      title: "Financial Disclaimer",
      content: (
        <>
          <p>
            Content related to cryptocurrencies, digital assets, financial
            markets, startups, or investments is published solely for
            informational purposes.
          </p>

          <p className="mt-5">
            Nothing published on The Bit Gazette constitutes investment,
            financial, legal, or tax advice. Readers should perform their own
            research and consult qualified professionals before making financial
            decisions.
          </p>
        </>
      ),
    },
    {
      title: "Accuracy of Information",
      content: (
        <>
          <p>
            We strive to ensure all published information is accurate at the
            time of publication.
          </p>

          <p className="mt-5">
            However, technology, financial markets, regulations, and related
            industries change rapidly, and we cannot guarantee that every
            article will remain current or complete indefinitely.
          </p>
        </>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the fullest extent permitted by law, The Bit Gazette and its
            editors, writers, contributors, employees, and affiliates shall not
            be liable for any direct, indirect, incidental, consequential, or
            special damages resulting from:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Your use of the website.</li>
            <li>Reliance on published content.</li>
            <li>Temporary service interruptions.</li>
            <li>Errors or omissions.</li>
            <li>Third-party websites linked from our platform.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Availability",
      content: (
        <>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            the website at any time without prior notice.
          </p>

          <p className="mt-5">
            We do not guarantee uninterrupted or error-free availability of the
            service.
          </p>
        </>
      ),
    },
    {
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            We may revise these Terms of Service periodically. Updated versions
            will be published on this page with a revised effective date.
          </p>

          <p className="mt-5">
            Continued use of the website after changes have been published
            constitutes acceptance of the revised Terms.
          </p>
        </>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of the United Arab Emirates.
          </p>
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <p>
            If you have questions regarding these Terms of Service, please
            contact us:
          </p>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
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
            Last Updated · July 17, 2026
          </p>

          <h1 className="mt-4 font-['news-reader'] text-4xl font-medium tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-8 text-base leading-8 tracking-wide text-gray-600 md:text-[22px]">
            These Terms of Service govern your access to and use of The Bit
            Gazette. By using our website, you agree to comply with these terms
            and all applicable laws. Please read them carefully before using our
            services.
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
