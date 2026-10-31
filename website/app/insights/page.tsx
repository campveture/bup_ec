import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { insights } from "@/data/insights";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Student research and commentary from BUP Economics Club — on taxation, competition policy, the national budget and the questions our programmes raise.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the research desk."
        intro="Student writing on the questions our programmes put on the table — concise, evidence-led and open to disagreement."
      />

      <Section tone="paper">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal>
              <Link
                href={`/insights/${featured.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-ink p-6 text-white sm:p-10"
              >
                <div className="grain-light absolute inset-0 opacity-25" aria-hidden="true" />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.14em]">
                    <span className="text-accent-2">{featured.category}</span>
                    <span className="text-white/40">{featured.date}</span>
                  </div>

                  <h2 className="mt-6 max-w-xl text-2xl min-[400px]:text-3xl font-semibold leading-[1.12] text-white sm:text-[2.4rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60">{featured.excerpt}</p>

                  <div className="mt-auto flex items-end justify-between gap-6 pt-10">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      Read the note
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                    <span className="text-sm uppercase tracking-[0.12em] text-white/35">
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="flex flex-col gap-6">
              {rest.map((insight, index) => (
                <Reveal key={insight.slug} delay={90 + index * 80} className="flex-1">
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="group flex h-full flex-col rounded-4xl border border-line bg-paper p-6 transition-colors hover:border-accent/60 sm:p-7"
                  >
                    <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.12em]">
                      <span className="text-accent">{insight.category}</span>
                      <span className="text-body/40">{insight.date}</span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold leading-snug text-ink sm:text-[1.4rem]">
                      {insight.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-body">{insight.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                        Read
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                      <span className="text-sm uppercase tracking-[0.1em] text-body/35">
                        {insight.readTime}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Write with us"
              title="A first byline is worth more than a first certificate."
              intro="Insights is edited by the research desk and open to members. Bring a question, a dataset or an argument you cannot stop thinking about — we will help you make it publishable."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="lg:justify-self-end">
              <Button href={`mailto:${site.email}?subject=Write%20for%20Insights`}>
                Pitch a note
                <ArrowUpRight size={16} />
              </Button>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-body/55">
                We publish short, readable pieces — 800 to 1,500 words — with sources named and claims kept
                honest.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
