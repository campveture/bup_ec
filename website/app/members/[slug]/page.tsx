import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { panel, getMember, memberSlug } from "@/data/team";
import { PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight, LinkedIn, Users } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return panel.map((member) => ({ slug: memberSlug(member.name) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.role}`,
    description: `${member.name}, ${member.role} at BUP Economics Club (${member.group}, 2026 panel).`,
  };
}

export default async function MemberProfilePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const index = panel.findIndex((m) => memberSlug(m.name) === slug);
  const prev = index > 0 ? panel[index - 1] : null;
  const next = index < panel.length - 1 ? panel[index + 1] : null;

  return (
    <>
      <PageHero
        eyebrow="Member profile"
        title={member.name}
        intro={`${member.role} · ${member.group} · BUPEC panel 2026`}
      >
        <Button href="/members" variant="outline">
          Back to panel
          <ArrowRight size={17} />
        </Button>
        <Button href={site.socials.linkedin} external>
          Connect on LinkedIn
          <ArrowUpRight size={17} />
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="container-x grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <Reveal>
            <div className="mx-auto w-48 lg:mx-0 lg:w-full">
              <div className="aspect-square overflow-hidden rounded-full bg-ink ring-4 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  className="h-full w-full scale-125 object-cover object-[center_22%]"
                />
              </div>
              <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-body/60 lg:text-left">
                Panel 2026 · #{String(index + 1).padStart(2, "0")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-accent">Portfolio</p>
                <h2 className="mt-4 text-3xl font-semibold text-ink">{member.role}</h2>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {member.name} serves on the 2026 BUPEC executive panel in the {member.group.toLowerCase()} stream,
                  contributing to the club&apos;s programmes, research and operations. Portfolios at BUPEC own a budget,
                  a calendar and a standard — nothing is nobody&apos;s job.
                </p>
              </div>

              <dl className="grid gap-4 border-y border-line py-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-body/50">Name</dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-ink">{member.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-body/50">Role</dt>
                  <dd className="mt-1 text-base font-medium text-ink">{member.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-body/50">Stream</dt>
                  <dd className="mt-1 text-base font-medium text-ink">{member.group}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-body/50">Edition</dt>
                  <dd className="mt-1 text-base font-medium text-ink">Panel 2026</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-dark"
                >
                  <LinkedIn size={16} />
                  View BUPEC on LinkedIn
                </a>
                <Link href="/members" className="btn btn-outline-dark">
                  <Users size={16} />
                  All panel members
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <div className="container-x flex items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6">
            {prev ? (
              <Link href={`/members/${memberSlug(prev.name)}`} className="group text-sm font-semibold text-ink">
                <span className="block text-xs uppercase tracking-[0.14em] text-body/50">Previous</span>
                <span className="mt-1 inline-flex items-center gap-2 group-hover:text-accent">
                  <ArrowRight size={14} className="rotate-180" />
                  {prev.name}
                </span>
              </Link>
            ) : null}
            {next ? (
              <Link href={`/members/${memberSlug(next.name)}`} className="group text-sm font-semibold text-ink">
                <span className="block text-xs uppercase tracking-[0.14em] text-body/50">Next</span>
                <span className="mt-1 inline-flex items-center gap-2 group-hover:text-accent">
                  {next.name}
                  <ArrowRight size={14} />
                </span>
              </Link>
            ) : null}
          </div>
          <Link href="/join" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
            Join the next intake →
          </Link>
        </div>
      </Section>
    </>
  );
}