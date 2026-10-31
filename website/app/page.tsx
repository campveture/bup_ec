import Link from "next/link";
import type { Metadata } from "next";
import { pillars, partners } from "@/data/site";
import { events } from "@/data/events";
import { insights } from "@/data/insights";
import { achievements } from "@/data/achievements";
import { panel } from "@/data/team";
import { Reveal } from "@/components/reveal";
import { Button, ArrowLink } from "@/components/ui";
import { ArrowRight, ArrowUpRight, LinkedIn } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "BUP Economics Club | Bangladesh University of Professionals" },
  description:
    "The student economics club of Bangladesh University of Professionals. Explore policy competitions, seminars, research and the people behind BUPEC.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const [featuredInsight, ...moreInsights] = insights;

  return (
    <>
      <section className="home-hero relative overflow-hidden bg-ink text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/3d8ab4df0eed79d4.jpg" alt="BUPEC members and guests at EconTalk 2024" className="absolute inset-0 h-full w-full object-cover object-center opacity-70 parallax-slow" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20" aria-hidden="true" />
        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
            <span>BUPEC / An open space for economic thinking</span>
            <span>Dhaka, Bangladesh · Since 2017</span>
          </div>

          <div className="max-w-3xl">
            <p className="eyebrow text-accent-2">Bangladesh University of Professionals</p>
            <h1 className="home-hero-title mt-8 font-semibold tracking-tight text-white hero-enter">
              Economics,<br />
              <span className="font-display italic font-medium text-accent-2">out in the</span><br />
              open<span className="text-accent-2">.</span>
            </h1>
            <p className="mt-8 max-w-xl border-l-2 border-accent-2 pl-5 text-base leading-relaxed text-white/85 sm:text-lg hero-enter hero-enter-delay">
              We turn economic ideas into debate, research and public work. From policy competitions to open seminars, BUPEC makes room for students to test what they know.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/events">Explore programmes <ArrowUpRight size={17} /></Button>
              <Button href="/join" variant="outline">Become a member</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-accent text-white">
        <div className="container-x grid gap-px bg-white/20 sm:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="group flex min-h-16 items-center justify-between gap-4 bg-accent px-4 py-3 transition-colors hover:bg-ink sm:px-6">
              <span className="flex items-baseline gap-3"><span className="font-mono text-xs text-white/60">0{index + 1}</span><span className="font-display text-xl font-semibold">{event.name}</span></span>
              <ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>

      <section className="overflow-hidden border-y border-line bg-paper py-5" aria-label="Club keywords">
        <div className="marquee-mask">
          <div className="marquee-track gap-10 font-display text-2xl font-medium text-ink/30 sm:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex shrink-0 items-center gap-10 px-5">
                <span>Economics in action</span>
                <span className="text-accent">✦</span>
                <span>Debate</span>
                <span className="text-accent">✦</span>
                <span>Policy</span>
                <span className="text-accent">✦</span>
                <span>Research</span>
                <span className="text-accent">✦</span>
                <span>POMAC</span>
                <span className="text-accent">✦</span>
                <span>EconTalk</span>
                <span className="text-accent">✦</span>
                <span>EconMaster</span>
                <span className="text-accent">✦</span>
                <span>BUPEC</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-5 sm:py-8" aria-label="BUPEC in photographs">
        <div className="container-x grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          {achievements.filter((item) => item.image).slice(0, 2).map((item) => (
            <figure key={item.title} className="group relative min-h-64 overflow-hidden bg-ink sm:min-h-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.imageAlt ?? ""} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-night/90 via-night/65 to-transparent p-5 pt-16 text-white sm:p-7">
                <span><span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-2">{item.year} / In the room</span><span className="mt-1 block font-display text-xl font-semibold sm:text-2xl">{item.title}</span></span>
                <a href={item.source} target="_blank" rel="noreferrer noopener" aria-label={`View photo source for ${item.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/60 hover:bg-white hover:text-ink"><ArrowUpRight size={17} /></a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-14 text-white sm:py-20" aria-label="Meet the 2026 panel">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-white/20 pb-6">
            <div><p className="eyebrow text-accent-2">The people / 2026</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">A club made of <em className="text-accent-2">people.</em></h2></div>
            <ArrowLink href="/members" className="text-white">Meet the panel</ArrowLink>
          </div>
          <div className="flex snap-x gap-3 overflow-x-auto pb-5 sm:gap-5">
            {panel.slice(0, 10).map((member, index) => <Link key={member.name} href="/members" className={`group relative w-40 shrink-0 snap-start overflow-hidden bg-white/10 sm:w-48 ${index % 2 ? "sm:translate-y-3" : ""}`}>
              <div className="aspect-square overflow-hidden rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}<img src={member.photo} alt={member.name} loading="lazy" className="h-full w-full scale-125 object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.35]" />
              </div>
              <span className="block min-h-16 p-3 text-xs font-semibold leading-snug text-white">{member.name}<span className="mt-1 block font-normal text-white/60">{member.role}</span></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28" id="approach">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-36">
              <p className="eyebrow text-accent">01 / The practice</p>
              <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.7rem]">Thinking is a <em className="font-medium text-accent">public act.</em></h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-body">BUPEC brings students into conversation with evidence, experts and one another. The work moves from a classroom question to a room full of people ready to challenge it.</p>
              <div className="mt-7"><ArrowLink href="/about">Our story and mission</ArrowLink></div>
            </div>
          </Reveal>
          <div className="border-t-2 border-ink">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 60}>
                <div className="group grid gap-4 border-b border-line py-7 sm:grid-cols-[3.5rem_1fr] sm:py-9">
                  <span className="font-mono text-sm font-semibold text-accent">{pillar.number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-3xl">{pillar.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">{pillar.description}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{pillar.points.join(" / ")}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[28rem] items-center overflow-hidden bg-ink py-20 text-white sm:min-h-[38rem]" aria-label="BUPEC editorial artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}<img src="/editorial-landscape.png" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/10" aria-hidden="true" />
        <div className="container-x"><p className="eyebrow text-accent-2">From the question to the room</p><p className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">Ideas move<br /><em className="font-normal text-accent-2">when people do.</em></p></div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28" id="programmes">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-7 border-b border-white/30 pb-8">
            <div>
              <p className="eyebrow text-accent-2">02 / The programmes</p>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">More ways in.<br /><em className="font-medium text-accent-2">One open conversation.</em></h2>
            </div>
            <ArrowLink href="/events" className="text-white">View every programme</ArrowLink>
          </div>

          {events.map((event, index) => (
            <Reveal key={event.slug} delay={index * 70}>
              <Link href={`/events/${event.slug}`} className="programme-row group grid gap-5 border-b border-white/20 py-8 transition-colors hover:bg-white/[0.04] sm:grid-cols-[3.5rem_9rem_1fr_auto] sm:items-center sm:gap-6 sm:py-8 tilt">
                <span className="font-mono text-sm text-accent-2">0{index + 1}</span>
                <div className="aspect-[4/3] overflow-hidden bg-accent/30">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={event.cover ?? "/editorial-data.png"} alt="" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">{event.category} / {event.edition}</span>
                  <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{event.name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{event.summary}</p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center border border-white/40 text-white transition-colors group-hover:border-accent-2 group-hover:bg-accent-2 group-hover:text-ink sm:h-16 sm:w-16"><ArrowUpRight size={22} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28" id="achievements">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-accent">03 / The record</p>
              <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Work worth remembering.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body">Selected milestones from the club’s LinkedIn updates and Bangladesh University of Professionals records.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {achievements.map((item, index) => (
              <Reveal key={item.year + item.title} delay={(index % 2) * 70}>
                <article className="achievement-card card-lift flex h-full flex-col border border-line bg-paper">
                  {item.image ? (
                    <div className="aspect-[16/9] overflow-hidden bg-ink">
                      {/* Original event photograph is hosted by BUP. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.imageAlt ?? ""} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                    </div>
                  ) : (
                    <div className="achievement-art flex aspect-[16/9] items-center justify-center bg-ink text-white" aria-hidden="true">
                      <span className="font-display text-[6rem] leading-none text-accent-2 sm:text-[8rem]">{item.year.slice(2)}</span>
                      <span className="absolute font-mono text-xs uppercase tracking-[0.28em] text-white">POMAC / 6.0</span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3 border-b border-line pb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent"><span>{item.label}</span><span>{item.year}</span></div>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{item.description}</p>
                    <a href={item.source} target="_blank" rel="noreferrer noopener" className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-ink underline-offset-4 hover:underline">{item.source.includes("linkedin") ? <><LinkedIn size={14} /> {item.sourceLabel}</> : <>{item.sourceLabel}<ArrowUpRight size={15} /></>}</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28" id="insights">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-ink pb-8">
            <div><p className="eyebrow text-accent">04 / Research desk</p><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Ideas in print.</h2></div>
            <ArrowLink href="/insights">All insights</ArrowLink>
          </div>
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <Link href={`/insights/${featuredInsight.slug}`} className="group block border-b border-line py-9 lg:border-r lg:pr-12">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Featured / {featuredInsight.category} / {featuredInsight.date}</span>
              <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.12] text-ink transition-colors group-hover:text-accent sm:text-4xl lg:text-5xl">{featuredInsight.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-body">{featuredInsight.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink">Read the article <ArrowRight size={16} /></span>
            </Link>
            <div className="lg:pl-9">
              {moreInsights.map((insight, index) => (
                <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block border-b border-line py-7">
                  <span className="font-mono text-xs text-accent">0{index + 2} / {insight.category}</span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent">{insight.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-body/70">{insight.readTime} <ArrowUpRight size={14} /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-12">
        <div className="container-x grid gap-6 lg:grid-cols-[12rem_1fr]">
          <p className="eyebrow text-accent">With support from</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => <div key={partner.name} className="flex flex-col border-l-2 border-accent pl-4">
              {partner.logo ? <div className="flex h-16 items-center pb-3">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" className="partner-logo max-h-full max-w-32 object-contain object-left" /></div> : <div className="flex h-16 items-center pb-3 font-display text-lg font-bold leading-tight text-ink" aria-hidden="true">{partner.name}</div>}
              <p className="font-display text-base font-semibold text-ink">{partner.name}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-body/65">{partner.role}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 text-white sm:py-28">
        <div className="container-x grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="eyebrow text-white/80">05 / Your move</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">Good questions need <em className="font-medium">more voices.</em></h2><p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">Write, debate, organise or simply start by listening. There is a place for you at BUPEC.</p></div>
          <Button href="/join" variant="dark" className="w-fit">Join BUPEC <ArrowUpRight size={17} /></Button>
        </div>
      </section>
    </>
  );
}
