import type { Metadata } from "next"
import Home from "../pages/home-screen/home"
import Navbar from "@/components/reusables/navbar"
import InlineNavigation from "@/components/reusables/inline-navigation"

// ─── Metadata ─────────────────────────────────────────────────────────────────

const BASE_URL = "https://chucks-kitchen.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Chuks Kitchen — The Heart of Nigerian Home Cooking",
    template: "%s | Chuks Kitchen",
  },

  description:
    "Handcrafted with passion, delivered with care. Chuks Kitchen brings the authentic heart of Nigerian home cooking straight to your door. Order fresh, homemade Nigerian meals today.",

  keywords: [
    "Nigerian home cooking",
    "authentic Nigerian food",
    "Nigerian food delivery",
    "homemade Nigerian meals",
    "Chuks Kitchen",
    "jollof rice delivery",
    "Nigerian cuisine online",
    "Nigerian food Lagos",
    "order Nigerian food",
    "African food delivery",
  ],

  authors: [{ name: "Chuks Kitchen", url: BASE_URL }],

  creator: "Chuks Kitchen",

  publisher: "Chuks Kitchen",

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Chuks Kitchen",
    title: "Chuks Kitchen — The Heart of Nigerian Home Cooking",
    description:
      "Handcrafted with passion, delivered with care. Authentic Nigerian home cooking delivered fresh to your desk or door.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Chuks Kitchen — Authentic Nigerian Home Cooking",
      },
    ],
    locale: "en_NG",
  },

  // ── Twitter / X card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Chuks Kitchen — The Heart of Nigerian Home Cooking",
    description:
      "Handcrafted with passion, delivered with care. Authentic Nigerian home cooking delivered fresh to your door.",
  },

  // ── Canonical ───────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
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

  // ── PWA manifest ────────────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Mobile browser chrome colour ────────────────────────────────────────────
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF7A18" },
    { media: "(prefers-color-scheme: dark)",  color: "#FF7A18" },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-white">
      <Home />
      <InlineNavigation />
    </section>
    </>
  )
}