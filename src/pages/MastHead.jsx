import React from "react";

const leadership = [
  {
    name: "Jerry Musa",
    role: "Chief Executive Officer (CEO) & Chief Content Officer (CCO)",
  },
  {
    name: "Mark Frost",
    role: "Co-Founder",
  },
];

const editorial = [
  {
    name: "Olivia",
    role: "Managing Editor",
  },
  {
    name: "Ayuba Haruna",
    role: "Editor",
  },
];

const writers = [
  {
    name: "Moses Edozie",
    role: "Writer & Reporter",
  },
  {
    name: "Elizabeth",
    role: "Writer & Reporter",
  },
  {
    name: "Joseph Samuel",
    role: "Writer & Reporter",
  },
  {
    name: "Emmanuel Musa",
    role: "Writer & Reporter",
  },
  {
    name: "Davidson",
    role: "Writer & Reporter",
  },
  {
    name: "Victor Ray",
    role: "Writer & Reporter",
  },
];

function TeamSection({ title, members }) {
  return (
    <section className="mt-10 md:mt-14 pt-8 md:pt-14 border-t border-gray-300 font-['Plus_Jakarta_Sans']">
      <h2 className="mb-10 md:mb-14 text-xl md:text-2xl font-medium uppercase tracking-wide text-gray-600">
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        {members.map((member) => (
          <article
            key={member.name}
            className="border-t border-gray-300 py-10 md:py-12"
          >
            <h3 className="text-3xl md:text-[2.1rem] font-medium tracking-tight text-gray-900">
              {member.name}
            </h3>

            <p className="mt-2 text-base md:text-lg uppercase tracking-wide text-gray-600">
              {member.role}
            </p>

            {/* socials */}
            {/*

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>

            */}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MastHead() {
  return (
    <main className="font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl">
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Masthead
          </h1>

          <p className="mt-8 text-base md:text-[22px] leading-8 text-gray-600">
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
