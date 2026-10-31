"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "@/components/logo";
import { ArrowUpRight, Close, Menu } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header sticky top-0 z-50 bg-paper text-ink">
      <div className="hidden border-b border-line sm:block">
        <div className="container-x flex h-7 items-center justify-between text-[10px] font-semibold uppercase tracking-[0.19em] text-body/70">
          <span>Bangladesh University of Professionals</span>
          <span>Economics in action · Est. 2017</span>
        </div>
      </div>

      <nav aria-label="Main" className="container-x flex h-[74px] items-center gap-5 lg:h-[82px]">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3" aria-label="BUP Economics Club home">
          <Logo className="h-11 w-11 shrink-0 rounded-none sm:h-12 sm:w-12" />
          <span className="flex flex-col leading-none">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">BUP</span>
            <span className="mt-1 font-display text-lg font-semibold tracking-tight sm:text-xl">Economics Club<span className="text-accent">.</span></span>
          </span>
        </Link>

        <div className="ml-auto hidden h-full items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link relative inline-flex h-full items-center px-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors xl:px-3 ${
                isActive(item.href) ? "text-accent" : "text-ink hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/join" className="ml-auto hidden min-h-11 shrink-0 items-center gap-2 border border-ink bg-ink px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent lg:ml-2 lg:inline-flex">
          Join the club <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
        >
          {open ? <Close size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div id="mobile-menu" className={`${open ? "block" : "hidden"} max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-paper lg:hidden`}>
        <div className="container-x grid grid-cols-2 gap-px bg-line py-px">
          {[{ label: "Home", href: "/" }, ...site.nav].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex min-h-16 items-center justify-between gap-2 bg-paper px-4 text-sm font-semibold ${isActive(item.href) ? "text-accent" : "text-ink"}`}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-body/40">0{index + 1}</span>
            </Link>
          ))}
          <Link href="/join" className="col-span-2 flex min-h-16 items-center justify-between bg-ink px-4 text-sm font-semibold text-white">
            Join BUPEC <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
