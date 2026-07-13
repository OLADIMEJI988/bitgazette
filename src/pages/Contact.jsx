import { Mail, Phone, MapPin } from "lucide-react";

import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/Linkedin.svg";
import instagram from "../assets/Instagram.svg";

export default function Contact() {
  return (
    <main className="font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl">
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Contact Us
          </h1>

          <p className="mt-8 text-base md:text-[22px] leading-8 text-gray-600">
            Whether you have a news tip, correction, media inquiry, partnership
            opportunity, or simply want to connect with our editorial team, we'd
            love to hear from you. Reach out using the information below and
            we'll respond as soon as possible.
          </p>
        </div>

        <section className="mt-10 md:mt-14 pt-8 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <article className="border-t border-gray-300 py-10 md:py-12">
              <h2 className="text-3xl md:text-[2.1rem] font-medium tracking-tight text-gray-900">
                Office
              </h2>

              <div className="mt-5 flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="mt-1 shrink-0" />

                <p className="text-base md:text-lg leading-8">
                  Silicon Oasis, Dubai, United Arab Emirates
                </p>
              </div>
            </article>

            <article className="border-t border-gray-300 py-10 md:py-12">
              <h2 className="text-3xl md:text-[2.1rem] font-medium tracking-tight text-gray-900">
                Call Us
              </h2>

              <div className="mt-5 flex items-center gap-3 text-gray-600">
                <Phone size={20} />

                <a
                  href="tel:+971507830443"
                  className="text-base md:text-lg hover:text-[#FF2C32] transition-colors"
                >
                  +971 50 783 0443
                </a>
              </div>
            </article>

            <article className="border-t border-gray-300 py-10 md:py-12">
              <h2 className="text-3xl md:text-[2.1rem] font-medium tracking-tight text-gray-900">
                Email
              </h2>

              <div className="mt-5 flex items-center gap-3 text-gray-600">
                <Mail size={20} />

                <a
                  href="mailto:info@thebitgazette.com"
                  className="text-base md:text-lg hover:text-[#FF2C32] transition-colors"
                >
                  info@thebitgazette.com
                </a>
              </div>
            </article>

            <article className="border-t border-gray-300 py-10 md:py-12">
              <h2 className="text-3xl md:text-[2.1rem] font-medium tracking-tight text-gray-900">
                Follow Us
              </h2>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://x.com/thebitgazette"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                  aria-label="X"
                >
                  <img src={twitter} alt="Twitter" className="h-6 w-6 lg:h-5 lg:w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/the-bit-gazette/?viewAsMember=true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                  aria-label="LinkedIn"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="h-6 w-6 lg:h-5 lg:w-5"
                  />
                </a>

                <a
                  href="https://www.instagram.com/thebitgazette"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                  aria-label="Instagram"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="h-6 w-6 lg:h-5 lg:w-5"
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61576706251527&rdid=PB2BA79RdOQz6bMT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CDuikr157%2F#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                  aria-label="Facebook"
                >
                  <img src={facebook} alt="Facebook" className="h-6 w-6" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
