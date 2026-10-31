import type { Metadata } from "next";

const baseUrl = "https://bupec.vercel.app";

/**
 * Builds consistent per-page metadata. Without this, Next merges the root
 * layout's `openGraph` object into every child route, so sub-pages end up
 * advertising the homepage title on social cards.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  /** Page title, without the "| BUP Economics Club" suffix. */
  title: string;
  description: string;
  /** Route path beginning with "/", used for the canonical URL. */
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: "BUP Economics Club",
      locale: "en_BD",
      title: `${title} | BUP Economics Club`,
      description,
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
      title: `${title} | BUP Economics Club`,
      description,
      images: ["/og.png"],
    },
  };
}

export { baseUrl };
