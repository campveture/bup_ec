import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site, values, timeline, pillars } from "@/data/site";
import { PageHero, Section, SectionHeading, Button, ArrowLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Sparkle } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Founded in 2017, BUP Economics Club gives students of Bangladesh University of Professionals a platform for economic debate, research and national competition.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the club"
        title="The club that makes economics public."
        intro="BUPEC was founded in 2017 to give students of Bangladesh University of Professionals a place to practise economics — not just study it. Nine years on, that is still the whole job."
      >
        <Button href="/events">
          Our programmes
          <ArrowRight size={17} />
        </Button>
        <Button href="/members" variant="outline">
          Meet the panel
        </Button>
      </PageHero>

      <section className="bg-mist py-5 sm:py-8">
        <figure className="container-x grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="aspect-[16/10] overflow-hidden bg-ink lg:aspect-[16/8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/e910e16b63e775b7.jpg" alt="Guests and participants applaud a POMAC 4.0 presentation at BUP" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
          </div>
          <figcaption className="flex flex-col justify-between bg-ink p-7 text-white sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-2">In the room / POMAC 4.0</span>
            <p className="my-12 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">A question becomes useful when other people can challenge the answer.</p>
            <a href="https://bup.edu.bd/gallery-view/8/57/2" target="_blank" rel="noreferrer noopener" className="text-xs font-bold uppercase tracking-[0.16em] text-white/70 underline-offset-4 hover:underline">Photo: BUP event gallery ↗</a>
          </figcaption>
        </figure>
      </section>

      {/* Story */}
      <Section tone="paper">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Founded in 2017, built on one idea." />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-body sm:text-base">
              <p>
                Economics is often taught as a set of models and examined as a set of answers. It is much less
                often practised as a public argument — a claim, evidence, a counter-claim and a decision made
                under uncertainty.
              </p>
              <p>
                BUPEC was founded in 2017 to close that gap. Its mandate was to give students at Bangladesh
                University of Professionals somewhere to test ideas outside the classroom: through debate,
                publication and direct contact with practitioners.
              </p>
              <p>
                That mandate has aged well. The club now runs three flagship programmes, publishes student
                research and hosts national competition — while remaining, deliberately, a
                student-run organisation supervised by the Department of Economics.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6">
              <ArrowLink href="/events">See the programmes</ArrowLink>
              <ArrowLink href="/insights">Read student research</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-4xl border border-line bg-mist p-6 sm:p-9">
              <p className="eyebrow text-accent">The basics</p>
              <p className="mt-6 font-display text-[1.65rem] font-medium italic leading-snug text-ink">
                &ldquo;{site.motto}&rdquo;
              </p>
              <dl className="mt-7 divide-y divide-line border-t border-line">
                {[
                  { label: "Founded", value: "2017" },
                  { label: "University", value: site.university },
                  { label: "Supervision", value: site.department },
                  { label: "Membership", value: "BUP students" },
                  { label: "Programmes", value: "POMAC · EconTalk · EconMaster" },
                  { label: "Email", value: site.email, href: `mailto:${site.email}` },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col min-[440px]:flex-row min-[440px]:items-baseline min-[440px]:justify-between gap-1 min-[440px]:gap-5 py-3.5">
                    <dt className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-body/50">
                      {row.label}
                    </dt>
                    <dd className="text-left min-[440px]:text-right text-sm font-medium text-ink break-words">
                      {row.href ? (
                        <a href={row.href} className="underline decoration-accent/60 underline-offset-4">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Mission / vision / values */}
      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title="A mandate, a horizon and a set of habits."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="relative h-full overflow-hidden rounded-4xl bg-ink p-6 text-white sm:p-10">
                <div className="grain-light absolute inset-0 opacity-30" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <Sparkle size={18} className="text-accent-2" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-white">Mission</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/65">
                    To give every student interested in economics the opportunity to take part in economic debate
                    and discussion — through student and faculty presentations, panel discussions, publications,
                    films, lectures from outside the BUP community and expeditions to sites of economic interest.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-white/65">
                    The club is also a forum for student input and a venue for the exchange of information.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="h-full rounded-4xl border border-line bg-paper p-6 sm:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent-3/40">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-ink/70" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold text-ink">Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-body">
                  To present BUP as a platform that takes part in the development of society and the world through
                  economic knowledge sharing, research and findings.
                </p>
                <p className="mt-4 text-base leading-relaxed text-body">
                  We measure progress by whether our members can carry that work beyond the campus.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="mt-5 rounded-4xl border border-line bg-paper p-6 sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-display text-2xl font-semibold text-ink">Our values</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-body/45">
                  Four habits we hold each other to
                </p>
              </div>
              <dl className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <div key={value.title} className="border-t border-line pt-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-accent">0{index + 1}</span>
                      <dt className="font-display text-lg font-semibold text-ink">{value.title}</dt>
                    </div>
                    <dd className="mt-2 text-sm leading-relaxed text-body">{value.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What we do */}
      <Section tone="paper">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="How we work" title="Four portfolios, one calendar." />
              <ArrowLink href="/events" className="shrink-0">
                See them in action
              </ArrowLink>
            </div>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 60}>
                <div className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                  <span className="font-mono text-sm font-semibold text-accent">{pillar.number}</span>
                  <h3 className="text-2xl font-semibold text-ink">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="The short history." />
          </Reveal>

          <div className="mt-12 border-y border-line">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 60}>
                <div className="grid gap-2 border-b border-line py-7 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <p className="font-display text-xl font-semibold text-accent">{item.year}</p>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 24rem at 70% 0%, rgba(21,130,169,0.32), transparent 60%), linear-gradient(180deg, #071f35, #0b395d)",
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-8 lg:grid-cols-[1.3fr_auto]">
        <div>
          <p className="eyebrow text-accent-2">Get involved</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Bring your questions. We will bring the room.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/join">
            Join BUPEC
            <ArrowRight size={17} />
          </Button>
          <Button href={`mailto:${site.email}`} variant="outline">
            Contact the club
          </Button>
        </div>
      </div>
    </section>
  );
}
