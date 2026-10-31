import Link from "next/link";
import type { ClubEvent } from "@/data/events";
import { ArrowUpRight } from "@/components/icons";

export function EventCard({ event, compact = false }: { event: ClubEvent; compact?: boolean }) {
  return (
    <Link href={`/events/${event.slug}`} className="group flex h-full flex-col border border-line bg-paper transition-colors hover:border-accent">
      <div className={`relative flex items-end overflow-hidden bg-ink p-5 text-white sm:p-7 ${compact ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {event.cover ? <>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={event.cover} alt={event.coverAlt ?? event.name} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden="true" /></> : <div className="home-hero-grid absolute inset-0 opacity-40" aria-hidden="true" />}
        <div className="relative flex w-full items-end justify-between gap-3">
          <span className={`font-display font-semibold leading-none text-accent-2 ${event.cover ? "text-5xl" : "text-[6rem] sm:text-[8rem]"}`}>{event.cover ? event.name : event.mark}</span>
          <span className="mb-2 border-l border-white/30 pl-3 text-right text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{event.category}<br />{event.edition}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{event.status}</span>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-ink">{event.name}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-body/60">{event.fullName}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-body">{event.summary}</p>
        <span className="mt-auto flex items-center justify-between border-t border-line pt-5 text-xs font-bold uppercase tracking-[0.13em] text-ink sm:mt-7">Explore programme <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
      </div>
    </Link>
  );
}
