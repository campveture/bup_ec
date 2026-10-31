import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { site } from "@/data/site";
import { baseUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const description =
  "The official student economics club of Bangladesh University of Professionals. Debate, policy competition, research and the annual EconTalk seminar.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BUP Economics Club | Bangladesh University of Professionals",
    template: "%s | BUP Economics Club",
  },
  description,
  applicationName: site.name,
  keywords: [
    "BUP Economics Club",
    "BUPEC",
    "BUP Economics",
    "economics club Bangladesh",
    "POMAC",
    "EconTalk",
    "Bangladesh University of Professionals",
    "student club Dhaka",
  ],
  authors: [{ name: site.name, url: baseUrl }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "/",
    siteName: site.name,
    title: "BUP Economics Club | Bangladesh University of Professionals",
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
    title: "BUP Economics Club",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071f35",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: baseUrl,
  foundingDate: "2017",
  description,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bangladesh University of Professionals, Mirpur Cantonment",
    addressLocality: "Dhaka",
    postalCode: "1216",
    addressCountry: "BD",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: site.university,
  },
  sameAs: [site.socials.facebook, site.socials.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
