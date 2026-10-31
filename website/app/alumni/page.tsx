import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site, pathways } from "@/data/site";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight, Globe } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Alumni",
  description:
    "Where BUP Economics Club members go next — public policy, banking, development, academia, consulting and beyond.",
  path: "/alumni",
});

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title="The work leaves the campus with them."
        intro="A club is judged by what its members do afterwards. BUPEC alumni carry the habit of evidence and argument into public service, markets, research and classrooms."
      >
        <Button href={`mailto:${site.email}?subject=Alumni%20network`}>
          Join the alumni network
          <ArrowUpRight size={16} />
        </Button>
      </PageHero>

      <figure className="relative h-64 overflow-hidden bg-ink sm:h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/72d95dc7c0fe4a9a.jpg" alt="BUPEC members at the POMAC 3.0 launch" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover object-center" />
        <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Across editions / POMAC 3.0</figcaption>
      </figure>

      <Section tone="paper">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Where members go"
              title="Six directions, one training."
              intro="Members leave with different titles but a shared method: define the question, find the evidence, name the limit, make the argument."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((path, index) => (
              <Reveal key={path.title} delay={(index % 3) * 70}>
                <article className="flex h-full flex-col border border-line bg-paper p-5 sm:p-6 transition-colors duration-300 hover:border-accent/60">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-mist text-ink/60">
                      <Globe size={16} />
                    </span>
                    <span className="font-mono text-sm text-body/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{path.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{path.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {path.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-ink/50"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Give back"
                title="An alumni network is a resource, not a mailing list."
                intro="If BUPEC gave you a room, a deadline or a first byline, there is a way to return the favour that takes an afternoon."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${site.email}?subject=Alumni%20network`}>
                  Get in touch
                  <ArrowRight size={17} />
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {[
              {
                title: "Mentor a member",
                body: "Take one student through a research question or a first application. One hour a month is enough to change a trajectory.",
              },
              {
                title: "Speak at EconTalk",
                body: "Bring a live problem from your desk into a room of students who will ask about it for the next hour.",
              },
              {
                title: "Open a door",
                body: "Host a session, share an internship, or put a real case in front of a POMAC team.",
              },
              {
                title: "Write for Insights",
                body: "Publish a short note on what your work has taught you about the economy — edited by the research desk.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-ink py-14 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Are you a former member with a story worth telling? We would like to hear it.
          </p>
          <a
            href={`mailto:${site.email}?subject=Alumni%20story`}
            className="inline-flex min-h-11 items-center gap-2 font-display text-xl text-white underline decoration-accent-2/60 underline-offset-4 hover:decoration-accent"
          >
            Share your story
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
