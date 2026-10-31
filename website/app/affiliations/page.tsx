import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site, partners } from "@/data/site";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight, LinkedIn } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Affiliations & Partners",
  description:
    "A sourced record of BUPEC sponsors and collaborators, including Rupali Bank, Trust Bank, IFIC Bank and the Centre for Policy Dialogue.",
  path: "/affiliations",
});

const partnershipForms = [
  {
    title: "Title sponsorship",
    body: "Put your name on a national platform — event branding, stage presence, media coverage and direct access to a field of motivated students.",
  },
  {
    title: "Round sponsorship",
    body: "Own a specific stage of a competition, from the case release to the final jury, with a brief that fits your organisation's priorities.",
  },
  {
    title: "Host a session",
    body: "Send a practitioner to EconTalk, EconMaster or a campus session and put a real problem in front of the room.",
  },
  {
    title: "Research collaboration",
    body: "Work with the research desk on a bounded question — a dataset, a survey, a policy brief — with student capacity and faculty oversight.",
  },
];

export default function AffiliationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliations"
        title="Partners who put real problems on the table."
        intro="BUPEC's programmes are built with organisations that want a serious conversation with students — not a logo placement."
      >
        <Button href={`mailto:${site.email}?subject=Partnership%20enquiry`}>
          Partner with us
          <ArrowRight size={17} />
        </Button>
        <Button href="/events" variant="outline">
          See the programmes
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Sponsor archive"
                title="The organisations behind the editions."
                intro="Sponsors and collaborators documented in BUPEC's LinkedIn updates and published event records, with each programme and role shown on its card."
              />
              <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-body/45">
                Documented partnerships
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {partners.map((partner, index) => {
              return (
                <Reveal key={partner.name} delay={index * 80}>
                  <article className="flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-accent/60 sm:p-8">
                    <div className="flex items-start justify-between">
                      {partner.logo ? <div className="flex h-20 items-center">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" className="partner-logo max-h-20 max-w-40 object-contain object-left" /></div> : <span className="flex h-20 max-w-40 items-center font-display text-2xl font-bold leading-tight text-ink">{partner.name}</span>}
                      <span className="border border-line bg-mist px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink/55">
                        {partner.role}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{partner.name}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.1em] text-accent">
                      {partner.context}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-body">{partner.description}</p>
                    {partner.source ? <a href={partner.source} target="_blank" rel="noreferrer noopener" className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent underline-offset-4 hover:underline">{partner.source.includes("linkedin") ? <><LinkedIn size={14} /> View on LinkedIn</> : <>View source <ArrowUpRight size={14} /></>}</a> : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to partner"
              title="Four ways in, all of them useful."
              intro="We would rather design one meaningful collaboration than collect logos. Here is what usually works."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {partnershipForms.map((form, index) => (
              <Reveal key={form.title} delay={(index % 2) * 80}>
                <article className="flex h-full gap-4 sm:gap-5 border border-line bg-paper p-5 sm:p-7">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{form.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{form.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Academic home"
                title="Supervised by the Department of Economics."
                intro="BUPEC operates under the supervision of the Department of Economics in the Faculty of Arts and Social Sciences. Faculty oversight keeps the club's research standards honest and its competitions fair."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="https://www.bup.edu.bd/department_home/1" variant="outline-dark" external>
                  Visit the department
                  <ArrowUpRight size={16} />
                </Button>
                <Button href="/about">About the club</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-4xl bg-ink p-6 text-white sm:p-8">
              <p className="eyebrow text-accent-2">The university</p>
              <p className="mt-5 font-display text-2xl font-semibold leading-snug text-white">
                {site.university}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {site.address.line2}
              </p>
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center justify-between gap-3 text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  <span className="break-all">{site.email}</span>
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex min-h-11 items-center justify-between gap-3 text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  <span>{site.phone}</span>
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(44rem 24rem at 30% 0%, rgba(21,130,169,0.32), transparent 62%), linear-gradient(180deg, #071f35, #0b395d)",
          }}
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-8 lg:grid-cols-[1.3fr_auto]">
          <div>
            <p className="eyebrow text-accent-2">Partnerships</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Tell us what you want students to understand. We will build the room around it.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
              Write to {site.email} with the subject &ldquo;Partnership enquiry&rdquo; and a sentence about what
              you have in mind. We reply to every serious note.
            </p>
          </div>
          <Button href={`mailto:${site.email}?subject=Partnership%20enquiry`} className="shrink-0">
            Start a conversation
            <ArrowRight size={17} />
          </Button>
        </div>
      </section>
    </>
  );
}
