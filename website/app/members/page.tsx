import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { panel, panelAnnouncementUrl, memberSlug } from "@/data/team";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, LinkedIn } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Members & Panel",
  description:
    "The executive panel of BUP Economics Club — the portfolios that run the club's programmes, research and partnerships.",
  path: "/members",
});

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Members & panel"
        title="People behind the work."
        intro="Meet the students featured in BUPEC's 2026 panel announcement. Their portfolios span research, communications, operations and more."
      >
        <Button href="/join">
          Join the next intake
          <ArrowRight size={17} />
        </Button>
        <Button href="/alumni" variant="outline">
          Alumni network
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Panel '26"
                title="The people doing the work."
                intro="These 25 profiles come from the supplied panel announcement cards. The remaining leadership portraits can be added when their cards are available."
              />
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href={panelAnnouncementUrl} target="_blank" rel="noreferrer noopener" className="text-sm font-semibold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline">Official panel post ↗</a>
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline"><LinkedIn size={14} /> LinkedIn</a>
                {site.socials.instagram ? <a href={site.socials.instagram} target="_blank" rel="noreferrer noopener" className="text-sm font-semibold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline">Instagram ↗</a> : null}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {panel.map((member, index) => (
              <Reveal key={member.name} delay={(index % 4) * 70}>
                <Link href={`/members/${memberSlug(member.name)}`} className="block h-full">
                <article className="group card-lift flex h-full flex-col bg-paper p-5 transition-colors duration-300 hover:bg-mist sm:p-6">
                  <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full bg-ink text-white ring-2 ring-line sm:w-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}<img src={member.photo} alt={`${member.name}, ${member.role}`} loading="lazy" className="h-full w-full scale-125 object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.35]" />
                    <span className="absolute right-3 top-3 font-mono text-xs text-white/70">0{index + 1}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-accent">{member.role}</p>
                  <p className="mt-auto pt-5 text-xs font-medium uppercase tracking-[0.12em] text-body/60">{member.group} / 2026</p>
                </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="A panel, not a hierarchy." />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Elected each term",
                body: "The panel is chosen by the membership at the start of the academic term, with faculty oversight from the Department of Economics.",
              },
              {
                title: "Portfolio ownership",
                body: "Each head owns a budget, a calendar and a standard. Nothing is nobody's job — that is the point of naming portfolios.",
              },
              {
                title: "Open handover",
                body: "Every portfolio keeps its records in a shared drive so the next panel inherits a process, not a mystery.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="h-full border border-line bg-paper p-6 sm:p-7">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-4xl border border-line bg-paper p-6 sm:p-8 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-ink">Think you belong on this list?</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">
                  Recruitment opens each year. Tell us which portfolio fits you and why — we read every
                  application.
                </p>
              </div>
              <Button href="/join" className="shrink-0">
                Apply to join
                <ArrowRight size={17} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-ink py-14 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2/80">Questions</p>
            <p className="mt-2 text-lg text-white/75">Reach the panel directly.</p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center gap-2 font-display text-xl text-white underline decoration-accent-2/60 underline-offset-4 hover:decoration-accent"
          >
            {site.email}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
