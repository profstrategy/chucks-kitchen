'use client'
import AppHeading from "@/components/reusables/app-heading"
import BrandLogo from "@/components/reusables/brand-logo"

import Image from "next/image"
import SignInForm from "./sign-in-form"

// ─── Main component ───────────────────────────────────────────────────────────

const SignIn = () => {
  return (
    <>
      {/* ════════════════════════════════════════════
          MOBILE  (default → hidden on md+)
      ════════════════════════════════════════════ */}
      <section
        className="flex flex-col md:hidden min-h-screen bg-white px-5 py-8 gap-6"
        aria-label="Sign in to your account"
      >
        {/* Brand */}
        <div className="flex flex-col items-center gap-1">
          <BrandLogo className="text-center" />
          <AppHeading variant="h2" as="h1" colorStyle="dark" className="text-center font-semibold">
            Login your Account
          </AppHeading>
        </div>

        {/* Form */}
        <form noValidate onSubmit={e => e.preventDefault()} className="flex flex-col gap-4">
          <SignInForm />
        </form>
      </section>


      {/* ════════════════════════════════════════════
          TABLET + DESKTOP  (md and above)
      ════════════════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen bg-[#F9FAFB]">

        {/* ── Left panel — hero image with orange overlay ── */}
        <aside
          className="relative w-[46%] lg:w-[48%] shrink-0 flex flex-col items-center justify-center"
          aria-hidden="true"
        >
          {/* Background image */}
          <Image
            src="/images/onboarding-desktop.png"
            alt=""
            fill
            sizes="48vw"
            className="object-cover object-center"
            priority
          />
          {/* Orange overlay — #FF7A18 at ~70% opacity */}
          <div className="absolute inset-0 bg-[#FF7A18] opacity-70" />

          {/* Overlay text */}
          <div className="relative z-10 px-10 lg:px-16 text-center flex flex-col gap-4">
            <h2
              className="text-white font-bold text-[28px] lg:text-[32px] leading-tight"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Chuks Kitchen
            </h2>
            <p
              className="text-white/90 text-[15px] lg:text-base leading-[26px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </aside>

        {/* ── Right panel — form ── */}
        <main
          className="flex flex-1 flex-col items-center justify-center px-8 lg:px-16 xl:px-24 py-12"
          aria-label="Sign in to your account"
        >
          <div className="w-full max-w-110 flex flex-col gap-6">

            {/* Brand + heading */}
            <div className="flex flex-col items-center gap-1">
              <BrandLogo className="text-center" />
              <AppHeading variant="h2" as="h1" colorStyle="dark" className="text-center font-semibold">
                Login your Account
              </AppHeading>
            </div>

            {/* Form */}
            <form noValidate onSubmit={e => e.preventDefault()} className="flex flex-col gap-4">
              <SignInForm />
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default SignIn