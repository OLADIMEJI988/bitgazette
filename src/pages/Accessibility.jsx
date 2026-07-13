import React from "react";

export default function Accessibility() {
  return (
    <div className="font-['Plus_Jakarta_Sans'] mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl">
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
          Accessibility Help
        </h1>

        <p className="mt-8 text-base md:text-[22px] leading-8 text-gray-600">
          At The Bit Gazette, we believe our journalism should be accessible to
          everyone. If you encounter any accessibility issues while using our
          website or have trouble accessing any content, please email us at <span><a
          href="mailto:info@thebitgazette.com"
          className="inline-block text-[#FF2C32] font-medium hover:underline"
        >
          info@thebitgazette.com
        </a></span> and our team will gladly assist you.
        </p>
      </div>
    </div>
  );
}
