'use client'
import AppHeading from "@/components/reusables/app-heading"
import BrandLogo from "@/components/reusables/brand-logo"
import Image from "next/image"
import SignUpForm from "./sign-up-form"

// ─── Main component ───────────────────────────────────────────────────────────

const SignUp = () => {
  const headingBlock = (
    <div className="flex flex-col items-center gap-1">
      <BrandLogo className="text-center" />
      <AppHeading variant="h2" as="h1" colorStyle="dark" className="text-center font-semibold">
        Create Your Account
      </AppHeading>
    </div>
  )

  return (
    <>
      {/* ════════════════════════════════
          MOBILE  (hidden on md+)
      ════════════════════════════════ */}
      <section
        className="flex flex-col md:hidden min-h-screen bg-white px-5 py-8 gap-6"
        aria-label="Create your Chuks Kitchen account"
      >
        {headingBlock}
        <form noValidate onSubmit={e => e.preventDefault()}>
          <SignUpForm />
        </form>
      </section>

      {/* ════════════════════════════════
          TABLET + DESKTOP  (hidden below md)
      ════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen bg-[#F9FAFB]">

        <aside
          className="relative w-[46%] lg:w-[48%] shrink-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src="/images/onboarding-desktop.png"
            alt=""
            fill
            sizes="48vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#FF7A18] opacity-70" />
          <div className="relative z-10 px-10 lg:px-16 text-center flex flex-col gap-4">
            <h2
              className="text-white font-bold text-[28px] lg:text-[32px] leading-tight"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Chuks Kitchen
            </h2>
            <p
              className="text-white/90 text-[15px] lg:text-base leading-6.5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </aside>

        {/* Right — form panel */}
        <main
          className="flex flex-1 flex-col items-center justify-center px-8 lg:px-16 xl:px-24 py-10 overflow-y-auto"
          aria-label="Create your Chuks Kitchen account"
        >
          <div className="w-full max-w-110 flex flex-col gap-6">
            {headingBlock}
            <form noValidate onSubmit={e => e.preventDefault()}>
              <SignUpForm />
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default SignUp