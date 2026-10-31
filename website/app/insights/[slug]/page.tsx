import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsight } from "@/data/insights";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return { title: "Note not found" };

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      url: `/insights/${insight.slug}`,
      siteName: "BUP Economics Club",
      locale: "en_BD",
      title: `${insight.title} | BUP Economics Club`,
      description: insight.excerpt,
      publishedTime: insight.date,
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
      title: `${insight.title} | BUP Economics Club`,
      description: insight.excerpt,
      images: ["/og.png"],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const more = insights.filter((item) => item.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <section className="bg-paper pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
        <div className="container-x max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-body/50 transition-colors hover:text-ink"
          >
            <ArrowRight size={14} className="rotate-180" />
            All insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.12em]">
            <span className="border border-line bg-mist px-3 py-1 text-accent">{insight.category}</span>
            <span className="text-body/45">{insight.date}</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span className="text-body/45">{insight.readTime}</span>
          </div>

          <h1 className="mt-6 text-[2.3rem] font-semibold leading-[1.08] text-ink sm:text-[3.2rem]">
            {insight.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">{insight.excerpt}</p>

          <div className="mt-8 flex items-center gap-3 border-t border-line pt-5 text-xs text-body/55">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-accent-2">
              EC
            </span>
            <span>
              BUPEC Research Desk
              <span className="mx-2 text-line">|</span>
              {site.shortName}
            </span>
          </div>
        </div>
      </section>

      <article className="container-x max-w-3xl pb-16 sm:pb-24">
        <div className="prose-ec">
          {insight.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {index === 0 ? <blockquote>{insight.pullQuote}</blockquote> : null}
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="text-sm leading-relaxed text-body/55">
            Written and edited by members of BUP Economics Club.
          </p>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Response to: ${insight.title}`)}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-accent underline-offset-4"
          >
            Reply to this note
            <ArrowUpRight size={15} />
          </a>
        </div>
      </article>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">More from the desk</h2>
            <Link
              href="/insights"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              All notes
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {more.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link
                  href={`/insights/${item.slug}`}
                  className="group flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-accent/60"
                >
                  <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.12em]">
                    <span className="text-accent">{item.category}</span>
                    <span className="text-body/40">{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">{item.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                    Read
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
