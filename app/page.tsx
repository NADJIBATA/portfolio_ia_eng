import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import Nav from "@/components/Nav";
import PipelineCard from "@/components/PipelineCard";
import Gallery from "@/components/Gallery";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { about, experience, principles, profile, projects, skills, stats, type Project } from "@/data/content";

function SectionHead({ index, label, title, sub }: { index: string; label: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index} <span className="text-dim">/</span> {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted text-pretty">{sub}</p>}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-panel-2 px-2 py-0.5 font-mono text-[11.5px] text-muted">
      {children}
    </span>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {p.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-fg underline decoration-line-2 underline-offset-4 transition hover:text-accent hover:decoration-accent"
        >
          <GithubIcon className="size-3.5" />
          {l.label}
          <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article className="grid gap-8 rounded-3xl border border-line bg-panel p-5 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
      <div className={`lg:sticky lg:top-24 lg:self-start ${flip ? "lg:order-2" : ""}`}>{p.shots && <Gallery shots={p.shots} title={p.title} />}</div>
      <div className="flex flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{p.kicker}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-3 text-muted text-pretty">{p.summary}</p>

        <div className="mt-5 rounded-xl border border-line bg-ink/50 p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-dim">The problem</p>
          <p className="mt-1.5 text-sm text-fg/90 text-pretty">{p.problem}</p>
        </div>

        <ul className="mt-5 space-y-2.5 text-sm">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-fg/85">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <ProjectLinks p={p} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-line-2">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">{p.kicker}</p>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-balance">{p.title}</h3>
      <p className="mt-2 text-sm text-muted text-pretty">{p.summary}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-fg/80">
            <span className="mt-[9px] h-px w-3 shrink-0 bg-dim" />
            <span className="text-pretty">{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <ProjectLinks p={p} />
      </div>
    </article>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main id="top" className="overflow-x-clip">
        {/* ───────── Hero ───────── */}
        <section className="relative">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:pb-28 lg:pt-40">
            <div className="animate-rise">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-panel/70 px-3 py-1 text-xs text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {profile.status}
              </p>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                {profile.name.split(" ")[0]}
                <br />
                <span className="text-muted">{profile.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="mt-5 font-mono text-sm text-accent sm:text-base">
                {profile.role} — {profile.focus}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg/80 text-pretty">{profile.tagline}</p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:brightness-110"
                >
                  See my work <ArrowDown className="size-4" />
                </a>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm text-fg transition hover:border-fg"
                >
                  <Download className="size-4" /> Résumé
                </a>
                <div className="ml-1 flex gap-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-panel-2 hover:text-fg"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-panel-2 hover:text-fg"
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex animate-rise justify-center [animation-delay:150ms] lg:justify-end">
              <PipelineCard />
            </div>
          </div>

          {/* Stats */}
          <div className="relative mx-auto max-w-6xl px-4 pb-8 sm:px-6">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4 [&>div]:bg-panel">
              {stats.map((s) => (
                <div key={s.label} className="m-px p-5 sm:p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">{s.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-[320px_1fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[320px]">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-2/20 blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.photo}
                alt={`Portrait of ${profile.name}`}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-3xl border border-line-2 object-cover"
              />
              <p className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-line-2 bg-ink/80 px-3 py-1 text-xs text-fg backdrop-blur">
                <MapPin className="size-3 text-accent" /> {profile.location}
              </p>
            </div>
            <div>
              <SectionHead index="01" label="About" title="Engineer first, researcher by training" />
              <div className="-mt-6 space-y-4 text-fg/80">
                {about.paragraphs.map((t) => (
                  <p key={t} className="leading-relaxed text-pretty">
                    {t}
                  </p>
                ))}
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {principles.map((p, i) => (
                  <div key={p.title} className="border-t border-line-2 pt-4">
                    <p className="font-mono text-xs text-dim">0{i + 1}</p>
                    <h3 className="mt-1 font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted text-pretty">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Projects ───────── */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead
            index="02"
            label="Selected work"
            title="LLM systems, built end to end"
            sub="Two production-style RAG applications, then the research and deep-learning work behind them."
          />
          <div className="space-y-8">
            {featured.map((p, i) => (
              <FeaturedProject key={p.slug} p={p} flip={i % 2 === 1} />
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            More on GitHub <ArrowUpRight className="size-4" />
          </a>
        </section>

        {/* ───────── Experience ───────── */}
        <section id="experience" className="border-y border-line bg-panel/40">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead index="03" label="Experience" title="Industry, research lab, and the degree in between" />
            <ol className="relative space-y-12 border-l border-line-2 pl-8 sm:pl-10">
              {experience.map((e) => (
                <li key={e.role + e.org} className="relative">
                  <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-accent bg-ink sm:-left-[45px]" />
                  <div className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-10">
                    <div>
                      <p className="font-mono text-xs text-accent">{e.period}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-dim">
                        <MapPin className="size-3" /> {e.place}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                      <p className="text-muted">{e.org}</p>
                      <ul className="mt-3 space-y-2 text-sm text-fg/80">
                        {e.points.map((pt) => (
                          <li key={pt} className="text-pretty">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── Skills ───────── */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead index="04" label="Toolbox" title="What I build with" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {skills.map((g, i) => (
              <div
                key={g.group}
                className={`bg-panel p-6 ${i === skills.length - 1 && skills.length % 2 ? "sm:col-span-2" : ""}`}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-lg border border-line-2 px-3 py-1.5 text-sm text-fg/90">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-muted">
            Languages — <span className="text-fg">French</span> (advanced) · <span className="text-fg">English</span>{" "}
            (fluent)
          </p>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-line-2 bg-panel p-8 sm:p-14">
            <div className="glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">05 / Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Looking for an AI engineer who ships?
              </h2>
              <p className="mt-4 max-w-xl text-muted text-pretty">
                I&apos;m open to full-time roles in Generative AI, LLM applications and machine learning — in Paris or
                remote. The fastest way to reach me is email.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:brightness-110"
                >
                  <Mail className="size-4" /> {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm transition hover:border-fg"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm transition hover:border-fg"
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-dim sm:flex-row sm:justify-end sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          
        </div>
      </footer>
    </>
  );
}
