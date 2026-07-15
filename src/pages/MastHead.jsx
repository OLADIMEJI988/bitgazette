import React from "react";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/Linkedin.svg";
import instagram from "../assets/Instagram.svg";

const leadership = [
  {
    name: "Jerry Musa",
    role: "Chief Executive Officer (CEO) & Chief Content Officer (CCO)",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/jeremiah-musa?utm_source=share_via&utm_content=profile&ut m_medium=member_android ",
      facebook: "https://www.facebook.com/jerrydstrawberry",
    },
  },
  {
    name: "Mark Frost",
    role: "Co-Founder",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/mark-frost-00a1b4321?utm_source=share_via&utm_content=pro file&utm_medium=member_android ",
    },
  },
];

const editorial = [
  {
    name: "Olivia",
    role: "Managing Editor",
    // socials: {
    //   x: "https://x.com/...",
    //   linkedin: "https://linkedin.com/in/...",
    //   instagram: "https://instagram.com/...",
    //   facebook: "https://facebook.com/...",
    // },
  },
  {
    name: "Ayuba Haruna",
    role: "Editor",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/ayuba-haruna?utm_source=share_via&utm_content=profile&utm _medium=member_android ",
      facebook: "https://www.facebook.com/ayuba.haruna.9615",
    },
  },
];

const writers = [
  {
    name: "Moses Edozie",
    role: "Writer & Reporter",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/moses-edozie-b11a6b279?utm_source=share_via&utm_content =profile&utm_medium=member_android ",
      x: "https://x.com/Moses63315327",
      facebook: "https://www.facebook.com/moses.edozie.2025",
    },
  },
  {
    name: "Elizabeth",
    role: "Writer & Reporter",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/oyebayo-elizabeth-49b0ab185?utm_source=share_via&utm_con tent=profile&utm_medium=member_ios ",
    },
  },
  {
    name: "Joseph Samuel",
    role: "Writer & Reporter",
    socials: {
      facebook: "https://www.facebook.com/share/1Bj6b4nX7n/ ",
      x: "https://x.com/FuutbolHome?t=Rquq3_12NWNxG8qoqQzgAg&s=09",
    },
  },
  {
    name: "Emmanuel Musa",
    role: "Writer & Reporter",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/manuelceebam?utm_source=share_via&utm_content=profile&ut m_medium=member_android ",
    },
  },
  {
    name: "Davidson",
    role: "Writer & Reporter",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/davidre026?utm_source=share_via&utm_content=profile&utm_ medium=member_android ",
    },
  },
  {
    name: "Victor Ray",
    role: "Writer & Reporter",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/victor-adinoyi-ohagwasi-926908200?utm_source=share_via&ut m_content=profile&utm_medium=member_android ",
    },
  },
];

function TeamSection({ title, members }) {
  return (
    <section className="mt-10 md:mt-14 font-['manrope'] pt-8 md:pt-14 border-t border-gray-300">
      <h2 className="mb-10 md:mb-14 font-['news-reader'] text-xl md:text-2xl font-medium uppercase tracking-wide text-gray-600">
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        {members.map((member) => (
          <article
            key={member.name}
            className="border-t border-gray-300 py-10 md:py-12"
          >
            <h3 className="text-3xl md:text-[2.1rem] font-medium tracking-wide text-gray-900">
              {member.name}
            </h3>

            <p className="mt-3 text-base md:text-lg uppercase tracking-wide text-gray-600">
              {member.role}
            </p>

            {/* socials */}
            {member.socials && (
              <div className="mt-8 flex items-center gap-4">
                {member.socials.x && (
                  <a
                    href={member.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    aria-label={`${member.name} on X`}
                  >
                    <img
                      src={twitter}
                      alt="X"
                      className="h-6 w-6 lg:h-5 lg:w-5"
                    />
                  </a>
                )}

                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="h-6 w-6 lg:h-5 lg:w-5"
                    />
                  </a>
                )}

                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    aria-label={`${member.name} on Instagram`}
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="h-6 w-6 lg:h-5 lg:w-5"
                    />
                  </a>
                )}

                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    aria-label={`${member.name} on Facebook`}
                  >
                    <img src={facebook} alt="Facebook" className="h-6 w-6" />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MastHead() {
  return (
    <main className="font-['manrope']">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="max-w-6xl">
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-['news-reader'] font-medium tracking-wide text-gray-900">
            Masthead
          </h1>

          <p className="mt-8 text-base tracking-wide md:text-[22px] leading-8 text-gray-600">
            The Bit Gazette brings together experienced journalists, editors,
            researchers, and contributors who are passionate about delivering
            reliable, insightful, and independent journalism. Our team works
            collaboratively to produce in-depth reporting, breaking news, expert
            analysis, and meaningful commentary across technology, finance,
            artificial intelligence, startups, and the broader innovation
            ecosystem. Every article is carefully reviewed to ensure it meets
            our standards for accuracy, fairness, transparency, and editorial
            integrity.
          </p>
        </div>

        <div className="mt-16 md:mt-20">
          <TeamSection title="Leadership" members={leadership} />

          <TeamSection title="Editorial" members={editorial} />

          <TeamSection title="Writers & Reporters" members={writers} />
        </div>
      </div>
    </main>
  );
}
