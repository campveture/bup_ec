import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "@/components/logo";
import { ArrowUpRight, LinkedIn, Facebook } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/20 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">BUP Economics Club / Dhaka</p>
            <p className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">A place for the questions that move us forward.</p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-accent-2 pb-1 text-sm font-semibold text-white hover:text-accent-2">{site.email}<ArrowUpRight size={17} /></a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Explore</p>
              <div className="grid gap-3 text-sm text-white/75">
                <Link href="/about" className="hover:text-white">About</Link>
                <Link href="/events" className="hover:text-white">Events</Link>
                <Link href="/insights" className="hover:text-white">Insights</Link>
                <Link href="/members" className="hover:text-white">Members</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Connect</p>
              <div className="grid gap-3 text-sm text-white/75">
                <Link href="/join" className="hover:text-white">Join BUPEC</Link>
                <Link href="/alumni" className="hover:text-white">Alumni</Link>
                <Link href="/affiliations" className="hover:text-white">Partners</Link>
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 hover:text-white"><LinkedIn size={15} /> LinkedIn</a>
                <a href={site.socials.facebook} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 hover:text-white"><Facebook size={15} /> Facebook</a>
                {site.socials.instagram ? <a href={site.socials.instagram} target="_blank" rel="noreferrer noopener" className="hover:text-white">Instagram ↗</a> : null}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Find us</p>
              <p className="max-w-xs text-sm leading-relaxed text-white/75">{site.department}<br />{site.university}<br />{site.address.line2}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/20 py-8">
          <Link href="/" className="inline-flex items-center gap-3"><Logo className="h-11 w-11" /><span className="text-sm font-semibold uppercase tracking-[0.14em]">BUP Economics Club</span></Link>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Initiating development through knowledge</span>
        </div>
        <div className="flex flex-wrap justify-between gap-2 py-5 text-xs text-white/45"><span>© {new Date().getFullYear()} BUP Economics Club</span><span>Student led since 2017</span></div>
      </div>
    </footer>
  );
}
