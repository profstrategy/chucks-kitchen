'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import BrandLogo from "./brand-logo"
import AppButton from "./app-button"
import { useRouter } from "next/navigation"

// ─── Nav items ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { name: "Home", href: "/home" },
  { name: "Explore", href: "/explore" },
  { name: "My Orders", href: "/my-orders" },
  { name: "Account", href: "/account" },
]

// ─── SVGs ─────────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.7071 1.70711C20.0976 1.31658 20.0976 0.683417 19.7071 0.292893C19.3166 -0.0976311 18.6834 -0.0976311 18.2929 0.292893L10 8.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8.58579 10L0.292893 18.2929C-0.0976311 18.6834 -0.0976311 19.3166 0.292893 19.7071C0.683417 20.0976 1.31658 20.0976 1.70711 19.7071L10 11.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L11.4142 10L19.7071 1.70711Z" fill="#171717" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="2.5" rx="1.25" fill="#171717" />
    <rect y="7.5" width="24" height="2.5" rx="1.25" fill="#171717" />
    <rect y="15" width="24" height="2.5" rx="1.25" fill="#171717" />
  </svg>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isActive = (href: string) =>
    href === '/home' ? pathname === '/home' : pathname.startsWith(href)

  const navLinkClass = (href: string) =>
    `text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-[#FF7A18] rounded-sm
     ${isActive(href) ? 'text-[#FF7A18]' : 'text-[#171717] hover:text-[#FF7A18]/70'}`

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">

          {/* ── Single bar — layout shifts with breakpoint ── */}
          <div className="flex items-center justify-between h-15 md:h-17">

            {/* Brand */}
            <BrandLogo />

            {/* ── Desktop nav links (md+) ── */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center gap-10 lg:gap-14"
            >
              <ul className="flex items-center gap-10 lg:gap-14 list-none m-0 p-0" role="list">
                {NAV_ITEMS.map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className={navLinkClass(item.href)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Desktop login button (md+) ── */}
            <div className="hidden md:block">
              <AppButton
                variant="primary"
                ariaLabel="Login to your account"
                className="py-3 px-12"
                onClick={() => router.push('/auth/sign-in')}
              >
                Login
              </AppButton>
            </div>

            {/* ── Mobile hamburger (below md) ── */}
            <button
              type="button"
              onClick={() => setIsOpen(prev => !prev)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus-visible:outline focus-visible:outline-[#FF7A18] transition-colors"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Slide-in drawer */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed top-15 left-0 right-0 z-40 bg-white border-b border-gray-100
          shadow-lg md:hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}
      >
        <div className="px-5 pt-4 pb-6 flex flex-col gap-2">
          <ul className="flex flex-col gap-1 list-none m-0 p-0" role="list">
            {NAV_ITEMS.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-colors duration-150
                    focus-visible:outline focus-visible:outline-[#FF7A18]
                    ${isActive(item.href)
                      ? 'bg-[#FF7A18]/10 text-[#FF7A18]'
                      : 'text-[#171717] hover:bg-gray-50 hover:text-[#FF7A18]/80'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile login button */}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <AppButton
              variant="primary"
              ariaLabel="Login to your account"
              className="w-full py-4.5"
              onClick={() => router.push('/auth/sign-in')}
            >
              Login
            </AppButton>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar