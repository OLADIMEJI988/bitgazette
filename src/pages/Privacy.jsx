export default function Privacy() {
  const sections = [
    {
      title: "Introduction",
      content: (
        <>
          <p>
            At The Bit Gazette, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website.
          </p>

          <p className="mt-5">
            By using our website, you agree to the practices described in this
            Privacy Policy.
          </p>
        </>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <p>We may collect the following types of information:</p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Information You Provide
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Messages submitted through our contact form</li>
                <li>Any information voluntarily shared with us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Information Collected Automatically
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring websites</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p>We may use the information we collect to:</p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Provide and improve our website.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Monitor website performance and security.</li>
            <li>Analyze traffic and reader engagement.</li>
            <li>Prevent fraud or misuse.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Cookies",
      content: (
        <>
          <p>
            We use cookies and similar technologies to improve your browsing
            experience, remember preferences, understand website usage, and
            measure performance.
          </p>

          <p className="mt-5">
            You may disable cookies through your browser settings, although some
            features of the website may not function properly.
          </p>
        </>
      ),
    },
    {
      title: "Analytics",
      content: (
        <>
          <p>
            We may use trusted third-party analytics services to better
            understand how visitors use our website. These services may collect
            anonymous usage data such as pages viewed, session duration, device
            information, and approximate location.
          </p>
        </>
      ),
    },
    {
      title: "Third-Party Services",
      content: (
        <>
          <p>
            Our website may contain links to third-party websites, social media
            platforms, advertisers, or embedded content.
          </p>

          <p className="mt-5">
            We are not responsible for the privacy practices or content of these
            third-party services. We encourage you to review their privacy
            policies before providing personal information.
          </p>
        </>
      ),
    },
    {
      title: "Data Sharing",
      content: (
        <>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <p className="mt-5">
            We may share information only when necessary to:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Comply with applicable laws.</li>
            <li>Protect our legal rights.</li>
            <li>Prevent fraud or security threats.</li>
            <li>Work with trusted service providers.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <>
          <p>
            We implement reasonable administrative, technical, and
            organizational safeguards to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>

          <p className="mt-5">
            While we strive to protect your information, no method of electronic
            transmission or storage can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      title: "Your Rights",
      content: (
        <>
          <p>
            Depending on your location and applicable laws, you may have the
            right to:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Access your personal information.</li>
            <li>Request corrections.</li>
            <li>Request deletion of your information.</li>
            <li>Object to certain processing activities.</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <>
          <p>
            The Bit Gazette is not directed toward children under the age of 13,
            and we do not knowingly collect personal information from children.
          </p>

          <p className="mt-5">
            If you believe a child has provided personal information, please
            contact us so we can remove it.
          </p>
        </>
      ),
    },
    {
      title: "Changes to This Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be published on this page together with the updated effective
            date.
          </p>
        </>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us.
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
            Privacy Policy
          </h1>

          <p className="mt-8 text-base leading-8 tracking-wide text-gray-600 md:text-[22px]">
            This Privacy Policy explains how The Bit Gazette collects, uses,
            stores, and protects your information when you visit our website or
            interact with our content. We are committed to respecting your
            privacy and handling your information responsibly.
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