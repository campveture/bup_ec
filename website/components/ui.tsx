import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "dark" | "outline" | "outline-dark";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "accent", className = "", external }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`;
  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"} ${className}`}>
      {eyebrow ? <p className={`eyebrow ${light ? "text-accent-2" : "text-accent"}`}>{eyebrow}</p> : null}
      <h2
        className={`mt-5 text-[2.2rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <div className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/65" : "text-body"}`}>
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero relative overflow-hidden bg-ink text-white">
      <div className="container-x relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.44fr)] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow text-accent-2">BUPEC / {eyebrow}</p>
          <h1 className="mt-8 max-w-5xl text-[2.8rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]">
            {title}
          </h1>
        </div>
        <div className="flex flex-col justify-end border-l border-white/20 pl-5 lg:pb-2 lg:pl-7">
          <span className="mb-8 hidden font-mono text-6xl text-white/15 lg:block" aria-hidden="true">↗</span>
          {intro ? <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p> : null}
          {children ? <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
      </div>
      <div className="h-1 bg-accent" aria-hidden="true" />
    </section>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-mist px-3 py-1 text-sm font-semibold uppercase tracking-[0.1em] text-ink/70 ${className}`}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "paper" | "mist" | "ink";
  className?: string;
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-body",
    mist: "bg-mist text-body",
    ink: "bg-ink text-white",
  };

  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Divider() {
  return <div className="rule" aria-hidden="true" />;
}
