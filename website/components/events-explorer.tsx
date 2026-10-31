"use client";

import { useState } from "react";
import { events, type EventCategory } from "@/data/events";
import { EventCard } from "@/components/event-card";

const filters: Array<"All" | EventCategory> = ["All", "Competition", "Seminar", "Learning", "Workshop", "Recruitment"];

export function EventsExplorer() {
  const [active, setActive] = useState<"All" | EventCategory>("All");
  const shown = active === "All" ? events : events.filter((event) => event.category === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by type">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`inline-flex min-h-11 items-center rounded-full border px-3.5 sm:px-4 text-xs sm:text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-paper text-ink/70 hover:border-ink/30 hover:text-ink"
                }`}
              >
                {filter}
                <span className={`ml-1.5 sm:ml-2 text-xs sm:text-sm font-medium ${isActive ? "text-white/50" : "text-body/45"}`}>
                  {filter === "All" ? events.length : events.filter((event) => event.category === filter).length}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-sm uppercase tracking-[0.12em] text-body/50" aria-live="polite">
          Showing {shown.length} of {events.length}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 text-sm text-body">No programmes in this category yet.</p>
      ) : null}
    </div>
  );
}
