import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site, stats } from "@/data/site";
import { events } from "@/data/events";
import { achievements } from "@/data/achievements";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { EventsExplorer } from "@/components/events-explorer";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { ArrowRight, Calendar, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Events & Programmes",
  description:
    "Explore BUPEC events: POMAC, EconTalk, EconMaster, EconSurge, Datalytics, Enlightenomics and workshops.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & programmes"
        title="An archive of ideas in motion."
        intro="Competitions, seminars, training, recruitment and student conversations. Explore the programmes and the editions that made them."
      >
        <Button href="/join">
          Join the club
          <ArrowRight size={17} />
        </Button>
        <Button href={`mailto:${site.email}?subject=Event%20enquiry`} variant="outline">
          Propose a session
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="The programme"
              title="Find your way in."
              intro="Filter by format to explore BUPEC's documented events and their individual pages. Eligibility varies by event and edition."
            />
          </Reveal>

          <div className="mt-10">
            <EventsExplorer />
          </div>
        </div>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <div className="container-x">
          <SectionHeading eyebrow="From the archive" title="The rooms behind the work." intro="Moments from POMAC and EconTalk, photographed by BUP and event press." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {achievements.filter((item) => item.image).map((item) => (
              <figure key={item.title} className="group overflow-hidden border border-line bg-mist">
                <div className="aspect-[16/10] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.imageAlt ?? ""} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <figcaption className="flex items-center justify-between gap-3 p-4 text-xs font-semibold uppercase tracking-[0.1em] text-ink sm:p-5"><span>{item.label}</span><a href={item.source} target="_blank" rel="noreferrer noopener" className="shrink-0 text-accent underline-offset-4 hover:underline">Photo source ↗</a></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Future editions */}
      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Stay in the loop"
              title="The next question is coming."
              intro="The club announces dates and registration details on its social channels when each edition is confirmed."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-4xl border border-line bg-paper p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    <Calendar size={14} />
                    Next edition
                  </span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-sm font-medium uppercase tracking-[0.08em] text-ink/55">
                    Date to be announced
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-ink">Next EconTalk</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  The annual seminar brings a new economic question into an open room. Write to us if you have a topic worth putting on the agenda.
                </p>
                <a
                  href={`mailto:${site.email}?subject=EconTalk%20topic%20suggestion`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                >
                  Suggest a theme
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-4xl border border-line bg-paper p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    <Calendar size={14} />
                    Registration
                  </span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-sm font-medium uppercase tracking-[0.08em] text-ink/55">
                    Opens before each edition
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-ink">Next POMAC edition</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  POMAC 6.0 concluded in September 2026. Follow the club for the next competition announcement and registration window.
                </p>
                <a
                  href={`mailto:${site.email}?subject=POMAC%20registration%20interest`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                >
                  Register your interest
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Numbers */}
      <section className="bg-ink py-12 text-white sm:py-16">
        <div className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="lg:border-l lg:border-white/12 lg:pl-7">
              <p className="font-display text-4xl font-semibold leading-none text-accent-2 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} animate={stat.value !== 2017} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x flex flex-col items-start justify-between gap-8 rounded-4xl border border-line bg-mist p-6 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow text-accent">Partner with a programme</p>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              Sponsor a round, host a session, or put a real problem in front of students from across Bangladesh.
            </h2>
          </div>
          <Button href={`mailto:${site.email}?subject=Partnership%20enquiry`} className="shrink-0">
            Start a conversation
            <ArrowRight size={17} />
          </Button>
        </div>
      </Section>
    </>
  );
}
