import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent } from "@/data/events";
import { eventSeasons } from "@/data/event-seasons";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { EventCard } from "@/components/event-card";
import { Button, Section, SectionHeading } from "@/components/ui";
import { ArrowRight, Check, ArrowUpRight } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) return { title: "Programme not found" };

  return {
    title: event.name,
    description: event.summary,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      type: "website",
      url: `/events/${event.slug}`,
      siteName: "BUP Economics Club",
      locale: "en_BD",
      title: `${event.name} | BUP Economics Club`,
      description: event.summary,
      images: [
        {
          url: "/og.png",
          width: 512,
          height: 512,
          alt: "BUP Economics Club — Bangladesh University of Professionals",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.name} | BUP Economics Club`,
      description: event.summary,
      images: ["/og.png"],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) notFound();

  const others = events.filter((item) => item.slug !== event.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20 lg:py-24">
        <div className="home-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:gap-12">
          <div>
          <Link
            href="/events"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white"
          >
            <ArrowRight size={14} className="rotate-180" />
            All programmes
          </Link>

          <p className="eyebrow mt-8 text-accent-2">{event.category} · {event.edition}</p>
          <h1 className="mt-5 text-[3.2rem] font-semibold leading-[0.98] text-white sm:text-7xl lg:text-[6rem]">
            {event.name}
          </h1>
          <p className="mt-3 font-display text-lg italic text-white/70 sm:text-xl">{event.fullName}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{event.summary}</p>
          {event.source ? <a href={event.source} target="_blank" rel="noreferrer noopener" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-2 underline-offset-4 hover:underline">Research source: {event.sourceLabel ?? "View record"}<ArrowUpRight size={14} /></a> : null}

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}?subject=${encodeURIComponent(`${event.name} enquiry`)}`}>
              Ask about {event.name}
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/events" variant="outline">
              Explore other programmes
            </Button>
          </div>
          </div>
          <div className="hidden items-end justify-center overflow-hidden border-l border-white/20 lg:flex" aria-hidden="true">
            {event.cover ? <>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={event.cover} alt="" className="h-full w-full object-cover opacity-85" referrerPolicy="no-referrer" /></> : <span className="font-display text-[20rem] font-semibold leading-[0.75] text-accent-2/70">{event.mark}</span>}
          </div>
        </div>
      </section>

      {eventSeasons[event.slug]?.length ? <Section tone="paper">
        <div className="container-x">
          <SectionHeading eyebrow="Edition archive" title={`${event.name} through the seasons.`} intro="Explore each documented edition here. Image and information sources are linked on each card." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {eventSeasons[event.slug].map((season) => <article key={season.title} className="flex h-full flex-col overflow-hidden border border-line bg-paper">
              {season.image ? <div className="aspect-[16/10] overflow-hidden bg-ink">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={season.image} alt={season.imageAlt ?? season.title} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-contain" /></div> : <div className="flex aspect-[16/10] items-center justify-center bg-ink text-accent-2"><span className="font-display text-7xl font-semibold">{season.year}</span></div>}
              <div className="flex flex-1 flex-col p-6"><p className="eyebrow text-accent">{season.year} / Archive</p><h2 className="mt-3 text-2xl font-semibold text-ink">{season.title}</h2><p className="mt-3 text-sm leading-relaxed text-body">{season.description}</p><a href={season.source} target="_blank" rel="noreferrer noopener" className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline">{season.sourceLabel}<ArrowUpRight size={15} /></a></div>
            </article>)}
          </div>
        </div>
      </Section> : null}

      {/* Facts */}
      <div className="border-b border-line bg-mist">
        <div className="container-x grid grid-cols-2 gap-y-6 py-7 sm:grid-cols-4">
          {event.facts.map((fact) => (
            <div key={fact.label} className="border-l border-line pl-3.5 sm:pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-body/45">{fact.label}</p>
              <p className="mt-1.5 font-display text-lg font-semibold text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Section tone="paper">
        <div className="container-x grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading eyebrow="The programme" title={`What ${event.name} is for.`} />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-body sm:text-base">
                {event.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">How it runs</h2>
              </Reveal>
              <ol className="mt-7 divide-y divide-line border-y border-line">
                {event.format.map((step, index) => (
                  <Reveal key={step.label} delay={index * 60}>
                    <li className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
                      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                        {step.label}
                      </span>
                      <p className="text-sm leading-relaxed text-body">{step.description}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="mt-14">
              <Reveal>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Highlights</h2>
              </Reveal>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {event.highlights.map((highlight, index) => (
                  <Reveal key={highlight} delay={index * 60}>
                    <li className="flex h-full items-start gap-3 rounded-2xl border border-line bg-mist/60 p-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-ink">
                        <Check size={12} />
                      </span>
                      <span className="text-sm leading-relaxed text-body">{highlight}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={120}>
              <div className="rounded-4xl border border-line bg-mist p-5 sm:p-7">
                <p className="eyebrow text-accent">At a glance</p>
                <dl className="mt-5 divide-y divide-line border-t border-line">
                  {[
                    { label: "Programme", value: event.name },
                    { label: "Format", value: event.category },
                    { label: "Edition", value: event.edition },
                    { label: "Cadence", value: event.status },
                  ].map((row) => (
                    <div key={row.label} className="flex flex-col min-[380px]:flex-row min-[380px]:items-baseline min-[380px]:justify-between gap-1 min-[380px]:gap-4 py-3">
                      <dt className="text-sm font-semibold uppercase tracking-[0.1em] text-body/45">
                        {row.label}
                      </dt>
                      <dd className="text-left min-[380px]:text-right text-sm font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 rounded-2xl bg-paper p-5">
                  <p className="text-sm font-semibold text-ink">Taking part</p>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Registration and dates are announced on our Facebook page. For partnerships, speaking slots or
                    team enquiries, write to the club.
                  </p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`${event.name} enquiry`)}`}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-accent underline-offset-4"
                  >
                    <span className="break-all">{site.email}</span>
                    <ArrowUpRight size={14} className="shrink-0" />
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Keep exploring" title="The other two rooms." />
              <Link
                href="/events"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                All programmes
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 80}>
                <EventCard event={other} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
