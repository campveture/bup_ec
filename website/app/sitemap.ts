import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { insights } from "@/data/insights";
import { baseUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/events/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/members/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/alumni/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/insights/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/affiliations/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/join/`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}/`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}/`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes, ...insightRoutes];
}
