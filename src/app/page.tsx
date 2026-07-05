import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HoloAbout from "@/components/HoloAbout";
import HeroJourney from "@/components/HeroJourney";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/components/faqs";

const experience = [
  {
    role: "Shopify Developer",
    company: "Iterforge Digital Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Jan 2026 — Present",
    points: [
      "Develop and customize Shopify storefronts using Liquid, theme architecture, and Shopify CLI.",
      "Build custom Shopify apps with the Admin API and webhooks to automate store workflows.",
      "Create reusable theme sections and blocks, and integrate third-party apps via the Storefront API.",
    ],
    tags: ["Liquid", "Shopify CLI", "Admin API", "Webhooks"],
  },
  {
    role: "Angular Developer",
    company: "Iterforge Digital Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Nov 2025 — Present",
    points: [
      "Build and maintain Angular applications using RxJS, lazy loading, and reusable component libraries, improving page load performance.",
      "Collaborate in Agile sprints and code reviews to ship production-ready features on schedule.",
    ],
    tags: ["Angular", "RxJS", "Lazy Loading", "Agile"],
  },
];

const projects = [
  {
    title: "Chartered Accountancy Firm Website",
    link: "https://wadhwanisherke.com",
    linkLabel: "wadhwanisherke.com",
    description:
      "Full-stack production website for a CA firm — JWT-authenticated admin dashboard, transactional email, and on-the-fly PDF generation, deployed on Vercel with a custom domain. Optimized to 82% lighter pages via AVIF images, self-hosted fonts, and per-page structured data, earning top Google rankings for the firm's target keywords.",
    tags: ["Next.js", "MongoDB Atlas", "Vercel", "SEO"],
  },
  {
    title: "Cultivation Insights — Audio Q&A",
    link: "https://github.com/452harsh",
    linkLabel: "github.com/452harsh",
    description:
      "Trained a custom ASR model on colloquial Kannada for sandalwood cultivation audio and built a voice-driven Q&A retrieval engine on top of it. Awarded 4th place at ML Fiesta, IIIT Bangalore.",
    tags: ["Python", "ASR", "NLP", "Kannada"],
  },
];

const skills = [
  { group: "Languages", items: ["C++", "JavaScript", "Java", "Python"] },
  {
    group: "Frameworks & Libraries",
    items: [
      "Angular",
      "Next.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "RxJS",
      "Shopify",
    ],
  },
  { group: "Databases", items: ["MongoDB", "PostgreSQL"] },
];

const achievements = [
  { place: "2nd", event: "TezAsia Hackathon 3.0", host: "Tezos India" },
  { place: "3rd", event: "Alpha Byte 1.0", host: "PCCOE & GDSC Pune" },
  { place: "4th", event: "ML Fiesta", host: "IIIT Bangalore" },
];

const certifications = [
  "Learn Shopify Liquid Programming — Udemy (100%)",
  "The Complete Shopify Theme Development Course — Udemy (100%)",
  "Next.js 14 & React: The Complete Guide — Udemy",
  "The Complete Web Development Bootcamp — Udemy",
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative">
      <JsonLd />
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6">
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-16 pt-28 lg:grid-cols-[3fr_2fr] lg:pt-0">
          <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm text-accent">
              Hi, my name is
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-7xl">
              Harsh Tuli
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Full-stack developer building fast, polished web experiences
              with <span className="text-zinc-200">Angular</span>,{" "}
              <span className="text-zinc-200">Next.js</span>, and{" "}
              <span className="text-zinc-200">Shopify</span> — currently
              shipping at Iterforge Digital in Mumbai.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                View my work
              </a>
              <a
                href="https://github.com/452harsh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                GitHub
              </a>
              <a
                href="/Harsh_Tuli_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                Resume
              </a>
              <a
                href="mailto:harshtuli452@gmail.com"
                className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-emerald-300 hover:underline"
              >
                harshtuli452@gmail.com
              </a>
            </div>
          </Reveal>
          </div>

          <div className="pb-10 lg:pb-0">
            <HeroJourney />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        {/* About — holographic profile with circuit data nodes */}
        <HoloAbout />

        {/* Experience */}
        <section id="experience" className="py-24">
          <Reveal>
            <SectionHeading index="02" title="Experience" />
          </Reveal>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 100}>
                <article className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/30 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {job.role}{" "}
                      <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-zinc-500">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <Reveal>
            <SectionHeading index="03" title="Projects" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/30 sm:p-8">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-mono text-xs text-accent underline-offset-4 hover:underline"
                  >
                    {project.linkLabel} ↗
                  </a>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24">
          <Reveal>
            <SectionHeading index="04" title="Skills" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    {group.group}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="py-24">
          <Reveal>
            <SectionHeading index="05" title="Achievements & Certifications" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a.event} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
                  <p className="font-mono text-3xl font-bold text-accent">
                    {a.place}
                  </p>
                  <p className="mt-2 font-medium text-zinc-200">{a.event}</p>
                  <p className="mt-1 text-sm text-zinc-500">{a.host}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* FAQ — visible answers backing the FAQPage structured data */}
        <section id="faq" className="py-24">
          <Reveal>
            <SectionHeading index="06" title="FAQ" />
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details className="group rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4 transition-colors open:border-emerald-400/25 hover:border-emerald-400/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-zinc-200 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-lg text-accent transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">
              07 — What&apos;s next?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
              Whether it&apos;s a Shopify build, a full-stack project, or just a
              question about something I&apos;ve worked on — my inbox is open.
            </p>
            <a
              href="mailto:harshtuli452@gmail.com"
              className="mt-8 inline-block rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
            >
              Say hello
            </a>
          </Reveal>
        </section>
      </div>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Harsh Tuli · Mumbai, India</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/452harsh"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-emerald-300"
            >
              GitHub
            </a>
            <a
              href="mailto:harshtuli452@gmail.com"
              className="transition-colors hover:text-emerald-300"
            >
              Email
            </a>
            <a
              href="tel:+917006180344"
              className="transition-colors hover:text-emerald-300"
            >
              +91 70061 80344
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
