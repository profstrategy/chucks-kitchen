import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Head back to Chuks Kitchen and keep exploring our authentic Nigerian menu.",
  robots: { index: false, follow: false },
}

// ─── Floating food emojis ─────────────────────────────────────────────────────

const FOOD_ITEMS = [
  { emoji: "🍛", top: "8%",  left: "6%",  size: "52px", delay: "0s",   duration: "6s"   },
  { emoji: "🥘", top: "15%", left: "88%", size: "40px", delay: "1.2s", duration: "7.5s" },
  { emoji: "🍖", top: "72%", left: "4%",  size: "44px", delay: "0.6s", duration: "8s"   },
  { emoji: "🥗", top: "78%", left: "91%", size: "38px", delay: "2s",   duration: "6.5s" },
  { emoji: "🍲", top: "42%", left: "3%",  size: "36px", delay: "1.8s", duration: "7s"   },
  { emoji: "🐟", top: "38%", left: "93%", size: "42px", delay: "0.4s", duration: "9s"   },
  { emoji: "🌶️", top: "88%", left: "48%", size: "34px", delay: "2.5s", duration: "5.5s" },
  { emoji: "🫙", top: "5%",  left: "52%", size: "30px", delay: "3s",   duration: "8.5s" },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 7.5L10 1.667L17.5 7.5V17.5C17.5 17.942 17.3244 18.3659 17.0118 18.6785C16.6993 18.9911 16.2754 19.1667 15.8333 19.1667H4.16667C3.72464 19.1667 3.30072 18.9911 2.98816 18.6785C2.67559 18.3659 2.5 17.942 2.5 17.5V7.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 19.1667V10H12.5V19.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ExploreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="8.5" stroke="#FF7A18" strokeWidth="1.5"/>
    <path d="M13.5 6.5L11.5 11.5L6.5 13.5L8.5 8.5L13.5 6.5Z" stroke="#FF7A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen bg-[#FFFAF6] flex flex-col items-center justify-center overflow-hidden px-5"
      aria-label="Page not found"
    >

      {/* ── Soft radial background glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,122,24,0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── Floating food emojis ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        {FOOD_ITEMS.map((item, i) => (
          <span
            key={i}
            className="ck-food-float absolute"
            style={{
              top: item.top,
              left: item.left,
              fontSize: item.size,
              '--ck-delay': item.delay,
              '--ck-dur': item.duration,
            } as React.CSSProperties}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[480px] w-full">

        {/* 404 */}
        <div className="ck-pop-in mb-2">
          <span
            className="ck-shimmer-text select-none"
            style={{
              fontFamily: '"Island Moments", cursive',
              fontSize: 'clamp(96px, 22vw, 160px)',
              lineHeight: 1,
              display: 'block',
            }}
            aria-label="404"
          >
            404
          </span>
        </div>

        {/* Plate divider */}
        <div className="ck-fade-up-1 flex items-center gap-3 w-full mb-6" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF7A18]/30 to-transparent" />
          <span style={{ fontSize: '22px' }}>🍽️</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF7A18]/30 to-transparent" />
        </div>

        {/* Heading */}
        <h1
          className="ck-fade-up-2 text-[#111827] font-bold mb-3"
          style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(22px, 5vw, 30px)',
            lineHeight: '1.25',
          }}
        >
          Hmm, this dish isn&apos;t on the menu.
        </h1>

        {/* Sub-copy */}
        <p
          className="ck-fade-up-3 text-[#6B7280] mb-10"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.7',
          }}
        >
          The page you&apos;re looking for has gone cold — or maybe it never existed.
          Head back to the kitchen and find something delicious.
        </p>

        {/* CTAs */}
        <div className="ck-fade-up-4 flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            href="/home"
            className="flex items-center justify-center gap-2 w-full sm:w-auto flex-1 rounded-[10px] border-2 py-3.5 px-8 font-semibold text-sm text-white transition-colors duration-150
              bg-[#FF7A18] border-[#FF7A18] hover:bg-orange-600 active:bg-orange-700
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
          >
            <HomeIcon />
            Back to Home
          </Link>

          <Link
            href="/explore"
            className="flex items-center justify-center gap-2 w-full sm:w-auto flex-1 rounded-[10px] border-2 py-3.5 px-8 font-semibold text-sm transition-colors duration-150
              bg-white border-[#FF7A18] text-[#FF7A18] hover:bg-orange-50 active:bg-orange-100
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <ExploreIcon />
            Explore Menu
          </Link>
        </div>
      </div>

      {/* ── Bottom brand stamp ── */}
      <p
        className="absolute bottom-6 text-[#D1D5DB] text-xs select-none"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        aria-hidden="true"
      >
        © {new Date().getFullYear()} Chuks Kitchen
      </p>

    </main>
  )
}