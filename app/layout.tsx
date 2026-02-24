import type { Metadata } from "next";
import { Roboto, Inter, Island_Moments } from "next/font/google";
import "./globals.css";
import Footer from "@/components/reusables/footer";

const islandMoments = Island_Moments({
  variable: "--font-island-moments",
  subsets: ["latin"],
  weight: "400",
  fallback: ["cursive"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["sans-serif"],
});

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Chucks Kitchen",
  description: "Your Authentic Taste of Nigeria",
  keywords: [
    "online food ordering",
    "food delivery service",
    "order food online",
    "food delivery in Lagos",
    "Mr Chuks restaurant",
    "restaurant customer management system",
  ],
  authors: [{ name: "Chuks", url: "https://chucks-kitchen.vercel.app" }],
  icons: { icon: "/logo.png" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${islandMoments.variable} ${roboto.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
