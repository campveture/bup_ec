import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75svh] items-center overflow-hidden bg-ink py-20 text-white">
      <div className="home-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="container-x relative">
        <p className="eyebrow text-accent-2">Error 404</p>
        <h1 className="mt-5 font-display text-[5rem] font-semibold leading-none text-white sm:text-[8rem]">
          404
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/65">
          This page is not in the programme index. It may have moved, or it may never have existed.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">
            Back to the homepage
            <ArrowRight size={17} />
          </Button>
          <Button href="/events" variant="outline">
            Browse programmes
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/40">
          Looking for something specific?{" "}
          <Link href="/join" className="inline-flex min-h-11 items-center underline decoration-accent-2/60 underline-offset-4 hover:text-white">
            Contact the club
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
