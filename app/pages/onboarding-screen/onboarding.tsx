import AppButton from "@/components/reusables/app-button"
import AppHeading from "@/components/reusables/app-heading"
import Image from "next/image"
import OnboardingCard from "./onboarding-card"
import Link from "next/link"

// ─── Feature items from both designs ─────────────────────────────────────────

const FEATURES = [
    { id: 1, label: 'Freshly Prepared' },
    { id: 2, label: 'Support Local Business' },
    { id: 3, label: 'Fast & Reliable Delivery' },
]

// ─── Component ────────────────────────────────────────────────────────────────

const Onboarding = () => {
    return (
        // Outer wrapper: full viewport height, white bg, relative for any absolute children
        <div className="min-h-screen bg-white relative overflow-x-hidden">

            {/* ══════════════════════════════════════════════
          MOBILE LAYOUT  (default, hidden on md+)
      ══════════════════════════════════════════════ */}
            <section
                className="flex flex-col md:hidden min-h-screen"
                aria-label="Welcome to Chuks Kitchen"
            >
                <div className="flex flex-col gap-2.5">
                    <div className="relative w-full h-65 xs:h-[300px] sm:h-85 shrink-0">
                        <Image
                            src="/images/onboarding-mobile.png"
                            alt="A spread of delicious Nigerian food on a dining table"
                            fill
                            sizes="100vw"
                            className="object-cover object-center pt-1.5 px-5 rounded-md"
                            priority
                        />
                    </div>
                    <div className="grid justify-end px-5">
                        <AppButton
                            variant="secondary"
                            ariaLabel="Sign in to your account"
                            className="w-36 py-2 text-sm"
                        >
                            Sign In
                        </AppButton>
                    </div>
                </div>

                {/* Content area */}
                <div className="flex flex-col flex-1 px-5 pt-9.25 pb-8 gap-2.5">

                    {/* Brand wordmark */}
                    <p
                        aria-label="Chuks Kitchen"
                        role="img"
                        className="text-[#FF7A18] text-center leading-none"
                        style={{ fontFamily: '"Island Moments", cursive', fontSize: '40.81px' }}
                    >
                        Chuks Kitchen
                    </p>

                    {/* Headline + description */}
                    <div className="flex flex-col gap-3">
                        <AppHeading variant="h1" as="h1" colorStyle="dark">
                            Your Authentic Taste of Nigeria
                        </AppHeading>

                        <p className="text-[#4B5563] text-base leading-6.5 font-normal font-[Poppins]">
                            Experience homemade flavors delivered fresh to your desk or home.
                            We bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>
                    </div>

                    {/* Feature cards — stacked on mobile */}
                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list" aria-label="Our features">
                        {FEATURES.map(({ id, label }) => (
                            <li key={id}>
                                <OnboardingCard>{label}</OnboardingCard>
                            </li>
                        ))}
                    </ul>

                    {/* CTA buttons — pushed to bottom */}
                    <div className="flex flex-col gap-3 mt-auto pt-2">
                        <AppButton
                            variant="primary"
                            ariaLabel="Start your order now"
                            className="w-full"
                        >
                            Start Your Order
                        </AppButton>
                        <AppButton
                            variant="secondary"
                            ariaLabel="Learn more about Chuks Kitchen"
                            className="w-full"
                        >
                            Learn More About Us
                        </AppButton>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════
          TABLET + DESKTOP LAYOUT  (md and above)
      ══════════════════════════════════════════════ */}
            <div className="hidden md:flex flex-col min-h-screen">

                {/* ── Top nav bar ──
                <header className="w-full flex items-center justify-end px-8 lg:px-12 py-4">
                    <p
                        aria-label="Chuks Kitchen"
                        role="img"
                        className="text-[#FF7A18]"
                        style={{ fontFamily: '"Island Moments", cursive', fontSize: '36px', lineHeight: 1 }}
                    >
                        Chuks Kitchen
                    </p>
                    <AppButton
                        variant="secondary"
                        ariaLabel="Sign in to your account"
                        className="w-25 py-2 text-sm"
                    >
                        Sign In
                    </AppButton>
                </header> */}

                {/* ── Main two-column split ── */}
                <main className="flex flex-1">

                    {/* Left — hero image, fills full height of main */}
                    <div className="relative w-[48%] lg:w-[52%] shrink-0">
                        <Image
                            src="/images/onboarding-desktop.png"
                            alt="Friends and family enjoying authentic Nigerian food together"
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Right — content panel */}
                    <section
                        className="flex flex-col justify-center flex-1 px-10 lg:px-16 xl:px-20 py-12 gap-6"
                        aria-label="Welcome to Chuks Kitchen"
                    >

                        {/* Headline */}
                        <AppHeading
                            variant="h1"
                            as="h1"
                            colorStyle="dark"
                            className="text-right text-[36px] lg:text-[40px] leading-[1.2]"
                        >
                            Your Authentic Taste of Nigeria
                        </AppHeading>

                        {/* Description */}
                        <p className="text-[#4B5563] text-[15px] lg:text-base leading-6.5 font-normal font-[Poppins]">
                            Experience homemade flavors delivered fresh to your desk or home.
                            We bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>

                        {/* Feature cards — 2-col grid on desktop matching the design */}
                        <ul
                            className="grid grid-cols-2 gap-x-4 gap-y-3 list-none p-0 m-0"
                            role="list"
                            aria-label="Our features"
                        >
                            {FEATURES.map(({ id, label }) => (
                                <li key={id}>
                                    <OnboardingCard>{label}</OnboardingCard>
                                </li>
                            ))}
                        </ul>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3 mt-2">
                            <AppButton
                                variant="primary"
                                ariaLabel="Start your order now"
                                className="w-full"
                            >
                                Start Your Order
                            </AppButton>
                            <AppButton
                                variant="secondary"
                                ariaLabel="Learn more about Chuks Kitchen"
                                className="w-full"
                            >
                                Learn More About Us
                            </AppButton>
                        </div>
                    </section>
                </main>

                {/* ── Footer bar ── */}
                <footer className="w-full text-center py-4 px-8">
                    <p className="text-[#9CA3AF] text-xs font-[Poppins]">
                        © 2024 Chuks Kitchen.{' '}
                        <Link
                            href="/privacy"
                            className="hover:text-[#FF7A18] underline-offset-2 hover:underline transition-colors focus-visible:outlinefocus-visible:outline-[#FF7A18] rounded-sm"
                        >
                            Privacy Policy
                        </Link>
                        {' '}
                        <Link
                            href="/terms"
                            className="hover:text-[#FF7A18] underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-[#FF7A18] rounded-sm"
                        >
                            Terms of Service
                        </Link>
                    </p>
                </footer>
            </div>

        </div>
    )
}

export default Onboarding