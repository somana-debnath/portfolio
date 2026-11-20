import Image from "next/image";
import {
  contact,
  education,
  experience,
  leadership,
  projects,
  site,
  visibleHighlights,
} from "@/data/content";
import { ExpandableList } from "./ExpandableList";
import { ArrowUpRightIcon, GitHubIcon, MailIcon, RingIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TagList } from "./Tag";

const section = "mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20";

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className={section}>
      <Reveal>
        <SectionHeading id="education-title">Education</SectionHeading>
        <article className="card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand">
              <RingIcon size={24} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-2xl font-medium text-ink">{education.school}</h3>
              <p className="mt-1 text-ink">
                {education.degree}, {education.program}
              </p>
              <p className="mt-1 text-sm text-muted">{education.dates}</p>
              <p className="mt-4 inline-flex flex-wrap items-center gap-x-2 rounded-2xl sm:rounded-full bg-tint px-4 py-1.5 text-sm text-ink">
                <span className="font-medium text-rose-ink">{education.honours.label}</span>
                <span aria-hidden className="text-dusty">·</span>
                <span>{education.honours.terms}</span>
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className={section}>
      <Reveal>
        <SectionHeading id="experience-title">Experience</SectionHeading>
      </Reveal>
      <ol className="relative space-y-8 border-l border-dusty/60 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.role}-${job.dates}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-bg bg-rose ring-4 ring-tint sm:-left-[39px]"
            />
            <Reveal>
              <article className="card p-6 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-serif text-xl font-medium text-ink sm:text-2xl">{job.role}</h3>
                  <p className="shrink-0 text-sm text-muted">{job.dates}</p>
                </div>
                <p className="mt-1 font-medium text-rose-ink">{job.company}</p>
                <div className="mt-4">
                  <ExpandableList items={job.highlights} visible={visibleHighlights} />
                </div>
                <div className="mt-5">
                  <TagList tags={job.tags} label={`Technologies used as ${job.role}`} />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

const linkPill =
  "inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-rose-ink";

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className={section}>
      <Reveal>
        <SectionHeading id="projects-title">Projects</SectionHeading>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const wide = i === projects.length - 1 && projects.length % 2 === 1;
          return (
          <Reveal key={p.title} delay={i * 0.08} className={wide ? "md:col-span-2" : ""}>
            <article className="card group flex h-full flex-col overflow-hidden">
              <div className={`relative aspect-[16/10] overflow-hidden ${wide ? "md:aspect-[21/8]" : ""} border-b border-line bg-sand`}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  unoptimized={p.image.endsWith(".svg")}
                  className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-medium text-ink">{p.title}</h3>
                  {p.badge && (
                    <span className="rounded-full border border-gold/70 bg-sand px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-ink">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{p.description}</p>
                <div className="mt-5">
                  <TagList tags={p.tags} label={`Technologies used in ${p.title}`} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkPill}>
                      <GitHubIcon size={15} />
                      GitHub<span className="sr-only"> repository for {p.title} (opens in a new tab)</span>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkPill}>
                      Live<span className="sr-only"> site for {p.title} (opens in a new tab)</span>
                      <ArrowUpRightIcon size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section aria-labelledby="leadership-title" id="leadership" className={section}>
      <Reveal>
        <SectionHeading id="leadership-title">Leadership</SectionHeading>
        <article className="card p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-serif text-2xl font-medium text-ink">{leadership.org}</h3>
            <p className="shrink-0 text-sm text-muted">{leadership.dates}</p>
          </div>
          <p className="mt-1 font-medium text-rose-ink">{leadership.school}</p>

          <ol aria-label="Role progression" className="mt-6 flex flex-wrap items-center gap-y-3">
            {leadership.roles.map((r, i) => (
              <li key={r.title} className="flex items-center">
                {i > 0 && <span aria-hidden className="h-px w-5 bg-dusty sm:w-8" />}
                <span
                  aria-current={r.current ? "step" : undefined}
                  className={`rounded-full border px-3.5 py-1.5 text-sm ${
                    r.current
                      ? "border-rose bg-rose font-medium text-on-rose"
                      : "border-line bg-surface text-ink"
                  }`}
                >
                  {r.title} <span className={r.current ? "opacity-90" : "text-muted"}>({r.dates})</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 leading-relaxed text-ink">{leadership.intro}</p>
          <div className="mt-4">
            <ExpandableList items={leadership.highlights} visible={visibleHighlights} />
          </div>
        </article>
      </Reveal>
    </section>
  );
}

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="mx-auto max-w-4xl px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-20">
      <Reveal>
        <h2 id="contact-title" className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
          {contact.headingStart} <em className="italic text-rose">{contact.headingItalic}</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">{contact.line}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 font-medium text-on-rose shadow-sm transition-[filter,transform] hover:brightness-95 motion-safe:hover:-translate-y-0.5"
        >
          <MailIcon size={18} />
          {site.email}
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <p>
        <span className="font-serif italic text-rose-ink">{site.monogram}</span> · © {new Date().getFullYear()}{" "}
        {site.name}
      </p>
    </footer>
  );
}
