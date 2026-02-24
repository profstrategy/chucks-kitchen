import { HTMLAttributes } from 'react'
import AppHeading from './app-heading';

// ─── Data ────────────────────────────────────────────────────────────────────

const BRAND = {
  name: 'Chuks Kitchen',
  tagline:
    'Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.',
}

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'My Order', href: '/order' },
  { label: 'Account', href: '/account' },
  { label: 'Contact', href: '/contact' },
]

const CONTACT = {
  phone: '+234 801 234 5678',
  email: 'hello@chukskitchen.com',
  nav: '123 Taste Blvd, Lagos, Nigeria',
}

const SOCIALS: { label: string; href: string }[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

// ─── Sub-component ───────────────────────────────────────────────────────────

/** Small body text used for links, contact details, and social items */
const BodyText = ({
  children,
  className = '',
  ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`text-white/80 ${className}`}
    style={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
    }}
    {...rest}
  >
    {children}
  </span>
)

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#5C3D1E' }}
      aria-label="Site footer"
    >
      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-17.25">
        <div
          className="grid gap-10 lg:grid-cols-[300px_200px_200px_200px] md:grid-cols-2" 
        >

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-3 w-full m-auto" aria-label="Brand information">
            {/* Logo / wordmark */}
            <p
              aria-label="Chuks Kitchen"
              style={{
                fontFamily: '"Island Moments", cursive',
                fontWeight: 400,
                fontSize: '37.02px',
                lineHeight: '37.02px',
                color: '#FF7A18',
                margin: 0,
              }}
            >
              {BRAND.name}
            </p>

            {/* Tagline */}
            <p
              className="text-white w-full"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '36px',
                margin: 0,
              }}
            >
              {BRAND.tagline}
            </p>
          </div>

          {/* ── Quick Links column ── */}
          <nav aria-label="Quick links" className='md:grid md:justify-center lg:block'>
            <AppHeading variant='h2' colorStyle='light' className='font-normal leading-9 mb-4'>Quick Links</AppHeading>
            <ul className="flex flex-col gap-1 list-none p-0 m-0" role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-[#FF7A18] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm transition-colors duration-150"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact Us column ── */}
          <nav className="not-italic" aria-label="Contact information">
            <AppHeading variant='h2' colorStyle='light' className='font-normal leading-9 mb-4'>Contact Us</AppHeading>
            <ul className="flex flex-col gap-1 list-none" role="list">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="hover:text-[#FF7A18] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm transition-colors duration-150"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[#FF7A18] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm transition-colors duration-150"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <BodyText>{CONTACT.nav}</BodyText>
              </li>
            </ul>
          </nav>

          {/* ── Socials column ── */}
          <nav aria-label="Social media links" className='md:grid md:justify-center lg:block'>
            {/* No header in the design — sr-only for screen readers */}
            <AppHeading variant='h2' colorStyle='light' className='font-normal leading-9 mb-4'>Social Media</AppHeading>
            <ul className="flex flex-col gap-1 list-none p-0 m-0 my-0" role="list">
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="hover:text-[#FF7A18] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm transition-colors duration-150"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Copyright bar ── */}
        <div
          className="mt-8 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <BodyText>
            <small style={{ fontSize: 'inherit' }}>
              © 2020 Lift Media. All rights reserved.
            </small>
          </BodyText>
        </div>
      </div>
    </footer>
  )
}

export default Footer