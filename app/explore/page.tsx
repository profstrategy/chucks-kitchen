import type { Metadata } from "next"
import Navbar from "@/components/reusables/navbar"
import DiscoverHeroSection from "../pages/explore-screen/hero-section"
import MenuCategories from "../pages/explore-screen/menu-categories"
import PopularSection from "../pages/explore-screen/popular-section"
import JollofRiceEntrees from "../pages/explore-screen/jollof-rice-entrees"
import SwallowAndSoup from "../pages/explore-screen/swallow-soup"

// ─── Metadata ─────────────────────────────────────────────────────────────────

const BASE_URL = "https://chucks-kitchen.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Explore Our Menu",

  description:
    "Explore Chuks Kitchen's full menu of authentic Nigerian home cooking. Rated 4.8 by over 1,200 customers. Browse Jollof Rice, Swallow & Soups, Grills, Beverages, Desserts and more — delivered fresh to your door.",

  keywords: [
    "Nigerian food menu",
    "Chuks Kitchen menu",
    "explore Nigerian dishes",
    "jollof rice delivery",
    "swallow and soup",
    "Nigerian home cooking menu",
    "order Nigerian food online",
    "egusi soup delivery",
    "pounded yam delivery",
    "authentic Nigerian restaurant",
    "Nigerian food Lagos delivery",
  ],

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: `${BASE_URL}/explore`,
    siteName: "Chuks Kitchen",
    title: "Explore — Chuks Kitchen Nigerian Home Cooking | ⭐ 4.8 (1.2k reviews)",
    description:
      "Browse our full menu of handcrafted Nigerian dishes. Jollof Rice, Egusi, Pounded Yam, Grills and more. Rated 4.8 stars by over 1,200 happy customers.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Chuks Kitchen — Explore Authentic Nigerian Home Cooking",
      },
    ],
    locale: "en_NG",
  },

  // ── Twitter / X ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Explore — Chuks Kitchen Nigerian Home Cooking | ⭐ 4.8 (1.2k reviews)",
    description:
      "Browse our full menu of handcrafted Nigerian dishes. Jollof Rice, Egusi, Pounded Yam, Grills and more.",
    images: ["/images/hero-image.png"],
    creator: "@chukskitchen",
    site: "@chukskitchen",
  },

  alternates: {
    canonical: `${BASE_URL}/explore`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
// Adds a rich result to Google search — star rating, cuisine type, price range

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Chuks Kitchen",
  description:
    "Authentic Nigerian home cooking — handcrafted with passion, delivered with care.",
  url: BASE_URL,
  servesCuisine: ["Nigerian", "African", "West African"],
  priceRange: "₦₦",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  hasMenu: `${BASE_URL}/explore`,
  areaServed: {
    "@type": "City",
    name: "Lagos",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExplorePage() {
  return (
    <>
      {/* Inject structured data into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section>
        <Navbar />
        <DiscoverHeroSection />
        <MenuCategories />
        <PopularSection />
        <JollofRiceEntrees />
        <SwallowAndSoup />
      </section>
    </>
  )
}