# 🍛 Chuks Kitchen

> Authentic Nigerian home cooking — handcrafted with passion, delivered with care.

**Live URL:** [https://chucks-kitchen-gamma.vercel.app](https://chucks-kitchen-gamma.vercel.app)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screens & Features](#screens--features)
- [Reusable Component Library](#reusable-component-library)
- [SEO & Metadata Strategy](#seo--metadata-strategy)
- [Design System](#design-system)
- [Required Assets](#required-assets)
- [Known Limitations & Roadmap](#known-limitations--roadmap)
- [Contributing](#contributing)

---

## Overview

Chuks Kitchen is a Nigerian home cooking delivery web application. Users can browse an authentic menu, explore categories, and place orders. The frontend is built with a strong focus on **accessibility (WCAG 2.1 AA)**, **SEO performance**, and **reusable component architecture** to support future scaling.

This is a pure frontend implementation. There is no backend or database connected yet — data is currently hardcoded and ready to be swapped out for API calls.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14 (App Router) | Framework — SSR, file-based routing, image optimisation, metadata API |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety — discriminated unions enforce correct component props at compile time |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling — fast to write, no unused CSS shipped |

### Fonts (Google Fonts)

Add these to your root `layout.tsx`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Island+Moments&family=Jost:wght@400;500;600&family=Poppins:wght@400;500;600&family=Inter:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

| Font | Used For |
|---|---|
| Island Moments | Brand wordmark / logo |
| Jost | Section headings |
| Poppins | Body text, inputs, prices |
| Inter | Secondary labels, "View All" links |

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-org/chucks-kitchen.git
cd chucks-kitchen

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

No environment variables are required for the current frontend-only implementation. When the backend is connected, create a `.env.local` file at the root:

```env
# Example — update when API is ready
NEXT_PUBLIC_API_URL=https://api.chuckskitchen.com
```

---

## Project Structure

```
chucks-kitchen/
├── app/
│   ├── auth/                          # Authentication screens (isolated architecture)
│   │   ├── _components/               # All auth UI components (sign-in form, sign-up form, SVGs)
│   │   ├── sign-in/
│   │   │   └── page.tsx               # /auth/sign-in — noindex, build-time rendered
│   │   └── sign-up/
│   │       └── page.tsx               # /auth/sign-up — noindex, build-time rendered
│   │
│   ├── home/
│   │   └── page.tsx                   # / — fully indexed, OG + JSON-LD configured
│   │
│   ├── explore/
│   │   └── page.tsx                   # /explore — fully indexed, Restaurant schema JSON-LD
│   │
│   ├── pages/                         # All screen-level UI components
│   │   ├── home-screen/               # Hero, Popular Categories, Chef's Specials
│   │   ├── explore-screen/            # Discover Hero, Menu Categories dropdown, food sections
│   │   └── onboarding-screen/         # Onboarding layout and feature cards
│   │
│   ├── layout.tsx                     # Root layout — font imports, Navbar, global styles
│   └── globals.css                    # Tailwind base + custom CSS variables
│
├── components/
│   └── reusables/                     # Shared component library (see section below)
│       ├── app-button.tsx
│       ├── app-card.tsx
│       ├── app-heading.tsx
│       ├── app-text-input.tsx
│       ├── auth-button.tsx
│       ├── brand-logo.tsx
│       └── navbar.tsx
│
└── public/
    ├── images/                        # All page images (see Required Assets)
    ├── icons/                         # Favicon variants + Apple touch icon
    ├── logo.png                       # Brand logo
    ├── favicon.ico
    └── manifest.json                  # PWA manifest
```

> **Why is `auth` separated?**
> Authentication is treated as its own architecture — its own components folder, its own routing group, and its own `noindex` metadata. This keeps auth logic completely isolated from the main app and makes it easy to swap in a full auth library (e.g. NextAuth, Clerk) later without touching any other screen.

---

## Screens & Features

### User Flow

```
First visit → Onboarding Screen
                  ↓
         "Start Your Order" → (authenticated?) → Home Page
                                              → Sign In
         "Sign In" button   → Sign In Screen
                                  ↓
                           Don't have account? → Sign Up Screen
```

### Onboarding (`/`)

- Full-viewport hero image with brand tagline and feature cards
- Mobile: Sign In button overlaid on image top-right
- Desktop: Left image panel + right content panel split
- CTA: **Start Your Order** → redirects based on auth state

### Sign In (`/auth/sign-in`)

- Email/phone + password form
- Password visibility toggle (show/hide)
- Forgot Password link
- Social auth: Continue with Google / Continue with Apple
- Link to Sign Up

### Sign Up (`/auth/sign-up`)

- Email, phone number, password, confirm password fields
- Independent password and confirm-password visibility toggles
- Terms & Conditions checkbox (required before form submits)
- Social auth: Continue with Google / Continue with Apple
- Link to Sign In

### Home (`/home`)

- **Hero section:** Full-viewport food image, headline, CTA button, floating search bar
- **Popular Categories:** 6 food categories in a responsive grid
- **Chef's Specials:** Featured dishes with price and Add to Cart

### Explore (`/explore`)

- **Discover Hero:** Rating (4.8 ⭐, 1.2k reviews), search, location context
- **Menu Categories dropdown:** Accessible combobox — click a category to filter
- **Popular section:** Horizontal cards on mobile, vertical grid on desktop
- **Jollof Rice & Entrees section**
- **Swallow & Soups section**

---

## Reusable Component Library

All shared components live in `components/reusables/`. They are built for **maximum reusability** — no prop drilling, TypeScript-enforced variants, and native HTML attribute spreading.

---

### `AppHeading`

Polymorphic heading with visual style decoupled from semantic tag.

```tsx
<AppHeading variant="h1" as="h2" colorStyle="light" className="text-center">
  Your Authentic Taste of Nigeria
</AppHeading>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `h1` \| `h2` \| `h3` \| `h4` | required | Controls typography size/weight |
| `as` | any HTML tag | same as `variant` | Overrides the rendered HTML element |
| `colorStyle` | `dark` \| `lightDark` \| `light` | `dark` | Controls text colour |
| `className` | `string` | `''` | Tailwind override/extension |

---

### `AppButton`

```tsx
<AppButton variant="primary" ariaLabel="Start your order" className="w-full">
  Start Your Order
</AppButton>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary` \| `secondary` | required | Orange fill vs white/blue outlined |
| `type` | `button` \| `submit` \| `reset` | `button` | HTML button type |
| `disabled` | `boolean` | `false` | Disables interaction + visual opacity |
| `ariaLabel` | `string` | — | Screen reader label |
| `onClick` | `() => void` | — | Click handler |
| `className` | `string` | `''` | Tailwind override |

---

### `AppCard`

Three variants enforced by a **TypeScript discriminated union** — missing required props are caught at compile time.

```tsx
// Explore variant — horizontal on mobile, vertical on desktop
<AppCard
  variant="explore"
  title="Jollof Rice & Fried Chicken"
  imageSrc="/images/jollof.png"
  description="Our signature Jollof rice..."
  price="₦3,500"
  onAddToCart={() => handleAddToCart(item)}
/>

// Popular variant — vertical, Explore button CTA
<AppCard variant="popular" title="Jollof Delights" imageSrc="/images/jollof.png" />

// Menu variant — vertical, price + Add to Cart CTA
<AppCard variant="menu" title="..." description="..." price="₦3,500" onAddToCart={fn} imageSrc="..." />
```

| Variant | Required Extra Props | CTA |
|---|---|---|
| `popular` | none | Explore button |
| `menu` | `description`, `price`, `onAddToCart` | Price + Add to Cart button |
| `explore` | `description`, `price`, `onAddToCart` | Price + orange `+` button |

> **`explore` mobile layout:** Renders as a horizontal card (image left, content right) on screens below `md`. Switches to the standard vertical card on `md+`.

---

### `AppTextInput`

Extends `React.InputHTMLAttributes<HTMLInputElement>` — all native input props work out of the box.

```tsx
<AppTextInput
  label="Email"
  icon={AuthSvg.mail}
  placeholder="name@gmail.com"
  type="email"
  autoComplete="email"
  error="Please enter a valid email"
/>
```

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Renders a `<label>` above the input |
| `icon` | `React.ReactNode` | Right-aligned icon slot (supports toggle buttons) |
| `error` | `string` | Red border + error message below input |

---

### `AuthButton`

Social authentication button.

```tsx
<AuthButton provider="google" icon={AuthSvg.google} onClick={handleGoogleAuth}>
  Continue with Google
</AuthButton>
```

| Prop | Type | Description |
|---|---|---|
| `provider` | `google` \| `apple` | Derives accessible `aria-label` |
| `icon` | `React.ReactNode` | Provider icon (set `aria-hidden` on the SVG) |
| `onClick` | `() => void` | Auth handler |

---

### `BrandLogo`

```tsx
<BrandLogo size="md" className="text-center" />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `sm` \| `md` \| `lg` | `md` |
| `className` | `string` | `''` |

---

### `Navbar`

Self-contained — manages its own open/close state and reads the active route internally via `usePathname()`. No props required.

```tsx
<Navbar />
```

**Behaviours:**
- Sticky (`top-0 z-40`) with shadow
- Mobile drawer closes on route change and Escape key
- Body scroll locked when drawer is open
- `aria-expanded` + `aria-controls` on hamburger for screen readers

---

## SEO & Metadata Strategy

| Page | Indexed | OG Image | JSON-LD |
|---|---|---|---|
| Home (`/`) | ✅ Yes | `og-image.png` | — |
| Explore (`/explore`) | ✅ Yes | `og-explore.png` | `Restaurant` schema with `aggregateRating` |
| Sign In (`/auth/sign-in`) | ❌ No | ✅ | — |
| Sign Up (`/auth/sign-up`) | ❌ No | ✅ | — |

The `title.template: "%s | Chuks Kitchen"` in the home `page.tsx` means every child page only needs to export a short `title` string — the brand suffix is appended automatically by Next.js.

The Explore page JSON-LD `aggregateRating` enables **Google rich result star snippets** — the 4.8 ⭐ rating displays directly in search results below the URL.

---

## Design System

### Colour Tokens

Add these to your `globals.css` to replace arbitrary values:

```ts
colors: {
  'primary-orange': '#FF7A18',
  'primary-blue':   '#1E88E5',
  'input-text-color':        '#3B4758',
  'sub-text-on-black':   '#BDBDBD',
}
```

### Breakpoints (Tailwind defaults used)

| Prefix | Min Width | Target |
|---|---|---|
| _(none)_ | 0px | Mobile |
| `md:` | 768px | Tablet + Desktop |
| `lg:` | 1024px | Large desktop |
| `xl:` | 1280px | Wide desktop |

---

## Required Assets

Ensure these files exist in `/public` before deploying:

```
public/
├── images/
│   ├── hero-image.png          # Home hero full-viewport background
│   ├── onboarding-desktop.png  # Onboarding + auth left panel image
│   ├── onboarding-mobile.png   # Onboarding mobile hero image
│   ├── jollof-delight.png
│   ├── swallow.png
│   ├── grills.png
│   ├── sweet-treats.png
│   ├── egusi-soup.png
│   ├── spicy.png
│   ├── eba.png
│   ├── pounded-yam.png
│   ├── peppered-snail.png
│   └── tilapia.png
├── icons/
│   ├── icon-16.png
│   ├── icon-32.png
│   └── apple-touch-icon.png    # 180×180px
├── logo.png
```

---

## Known Limitations & Roadmap

### Current Limitations

| Area | Detail |
|---|---|
| **Data** | All menu items and categories are hardcoded arrays. No API connected yet. |
| **Auth** | Sign in / sign up forms have UI only — no authentication logic is wired up. |
| **Cart** | "Add to Cart" buttons trigger `alert('coming soon')` — no cart state exists yet. |
| **Search** | The hero and menu category search inputs are UI only — no filtering logic. |
| **Routing** | "Start Your Order" and nav links point to placeholder routes. |

### Planned Improvements

- [ ] **API integration** — Replace hardcoded arrays with `fetch` calls to a backend REST or GraphQL API
- [ ] **Authentication** — Implement NextAuth.js or Clerk for Google/Apple OAuth + email auth
- [ ] **Dynamic item pages** — Add `/explore/[slug]` for individual dish detail pages
- [ ] **Cart & checkout** — Global cart state (Zustand or Context), checkout flow, order summary
- [ ] **Search & filter** — Wire `MenuCategories` dropdown and hero search to filter rendered items
- [ ] **Performance** — Audit and reduce image payload sizes, implement `next/font` to replace Google Fonts `<link>` tag, add `loading="lazy"` where `priority` is not needed
- [ ] **Animations** — Add scroll-triggered reveals on section entry using Framer Motion
- [ ] **Error states** — Add empty states and error boundaries to all data-dependent sections
- [ ] **Testing** — Unit tests for reusable components (Jest + React Testing Library)

---

## Contributing

1. Branch from `main` using the convention `feature/your-feature-name` or `fix/bug-description`
2. Keep components in `components/reusables/` truly generic — no screen-specific logic inside them
3. All new interactive elements must meet WCAG 2.1 AA — `focus-visible` styles and `aria-label` are non-negotiable
4. Data arrays that are currently hardcoded are intentionally at **module level** (outside component functions) — keep them there until API integration
5. The discriminated union pattern in `AppCard` is intentional — if you add a new card variant, add a new type branch; do not add optional props to existing variants
6. Run `npm run build` before opening a PR to catch TypeScript errors early
