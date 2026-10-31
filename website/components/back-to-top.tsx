"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white focus-visible:outline-none sm:bottom-8 sm:right-8"
    >
      <ArrowRight size={18} className="-rotate-90" />
    </button>
  );
}