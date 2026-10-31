import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site, faqs } from "@/data/site";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { JoinForm } from "@/components/join-form";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Check, Plus, Mail } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Join BUPEC",
  description:
    "Apply to join BUP Economics Club. Membership is open to students of Bangladesh University of Professionals — no prior research experience required.",
  path: "/join",
});

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Your way in begins with EconSurge."
        intro="EconSurge is BUPEC's recruitment event. Explore the documented selection process and watch for the next official intake announcement."
      />

      <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}<img src="/editorial-landscape.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="container-x relative grid gap-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="eyebrow text-accent-2">Recruitment / EconSurge</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">More than a form. <em className="text-accent-2">A first move.</em></h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">The documented EconSurge 6.0 process included registration, a micro-gig and discussion, and a personal interview.</p></div><Button href="/events/econsurge">Explore EconSurge <ArrowUpRight size={16} /></Button></div>
      </section>

      <figure className="relative h-64 overflow-hidden bg-ink sm:h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/3d8ab4df0eed79d4.jpg" alt="BUPEC students and guests at EconTalk 2024" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover object-center" />
        <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">A room full of BUPEC / EconTalk 2024</figcaption>
      </figure>

      <Section tone="paper">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <Reveal>
              <div>
                <p className="eyebrow text-accent">What happens next</p>
                <ol className="mt-6 divide-y divide-line border-y border-line">
                  {[
                    {
                      title: "Watch for the next EconSurge",
                      body: "Check BUPEC's official announcements for the current intake dates and registration link.",
                    },
                    {
                      title: "Prepare your application",
                      body: "The documented roadshow asks for a concise CV and a registration form.",
                    },
                    {
                      title: "Micro-gig and discussion",
                      body: "The documented second round includes a task and cluster discussion.",
                    },
                    {
                      title: "Personal interview",
                      body: "Shortlisted applicants complete the interview round before the club announces its panel.",
                    },
                  ].map((step, index) => (
                    <li key={step.title} className="flex items-start gap-3.5 py-5 sm:gap-4">
                      <span className="mt-0.5 shrink-0 font-mono text-sm text-accent">0{index + 1}</span>
                      <div>
                        <h2 className="text-base font-semibold text-ink">{step.title}</h2>
                        <p className="mt-1 text-sm leading-relaxed text-body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 border border-line bg-mist p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-body/50">
                  Eligibility
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Currently enrolled at BUP",
                    "Any department welcome",
                    "No prior research experience needed",
                    "Able to commit a few hours a week",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-ink">
                        <Check size={11} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-6 bg-ink p-5 sm:p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-2/80">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${site.email}?subject=Membership%20application`}
                  className="mt-3 inline-flex items-center gap-2 break-all font-display text-lg text-white underline decoration-accent-2/60 underline-offset-4"
                >
                  <Mail size={16} className="shrink-0 text-accent-2" />
                  {site.email}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Include your name, student ID, department and batch.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div><p className="mb-4 border-l-2 border-accent bg-mist p-4 text-sm leading-relaxed text-ink">This email form is for expressing interest only. It does not register you for a current EconSurge edition; follow the club's official intake announcement for that link.</p><JoinForm /></div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading eyebrow="FAQ" title="Questions we actually get." />
              <p className="mt-5 text-sm leading-relaxed text-body">
                Still unsure? Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-ink underline decoration-accent underline-offset-4"
                >
                  {site.email}
                </a>{" "}
                and a member of the panel will answer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border-t border-line">
              {faqs.map((faq) => (
                <details key={faq.question} className="details-ec group border-b border-line py-5">
                  <summary className="flex min-h-11 items-start justify-between gap-6">
                    <span className="text-base font-medium leading-relaxed text-ink sm:text-base">
                      {faq.question}
                    </span>
                    <span className="details-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink/60 transition-transform duration-300">
                      <Plus size={14} />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-2 sm:pr-10 text-sm leading-relaxed text-body">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-ink py-14 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Looking for something else — a partnership, a speaker slot, a research collaboration?
          </p>
          <Button href={`mailto:${site.email}?subject=General%20enquiry`} variant="accent" className="shrink-0">
            Contact the club
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
