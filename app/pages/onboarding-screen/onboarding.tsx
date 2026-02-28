import AppButton from "@/components/reusables/app-button"
import AppHeading from "@/components/reusables/app-heading"
import Image from "next/image"
import OnboardingCard from "./onboarding-card"
import Link from "next/link"
import BrandLogo from "@/components/reusables/brand-logo"

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
                        <Link href="/auth/sign-in">
                            <AppButton
                                variant="secondary"
                                ariaLabel="Sign in to your account"
                                className="w-36 py-2.75 font-semibold text-[16px] leading-6"
                            >
                                Sign In
                            </AppButton>
                        </Link>
                    </div>
                </div>

                {/* Content area */}
                <div className="flex flex-col flex-1 px-5 pt-9.25 pb-8 gap-2.5">

                    {/* Brand wordmark */}
                    <BrandLogo />

                    {/* Headline + description */}
                    <div className="flex flex-col gap-3">
                        <AppHeading variant="h1" as="h1" colorStyle="dark">
                            Your Authentic Taste of Nigeria
                        </AppHeading>

                        <p className="text-[#1F2937] tracking-tighter leading-6.5 text-base font-normal">
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
                        <Link href={'/home'}>
                            <AppButton
                                variant="primary"
                                ariaLabel="Start your order now"
                                className="w-full py-[18px]"
                            >
                                Start Your Order
                            </AppButton>
                        </Link>
                        <AppButton
                            variant="secondary"
                            ariaLabel="Learn more about Chuks Kitchen"
                            className="w-full py-4.5"
                        >
                            Learn More About Us
                        </AppButton>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════
          TABLET + DESKTOP LAYOUT  (md and above)
      ══════════════════════════════════════════════ */}
            <div className="hidden min-h-screen md:grid md:grid-cols-[40%_1fr] lg:grid-cols-[42%_1fr] lg:gap-10">

                {/* Left — hero image, fills full height of main */}
                <div className="relative w-full lg:w-full h-auto shrink-0">
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
                    className="flex flex-col justify-center md:gap-6 xl:gap-9 w-full px-4 lg:px-12.25"
                    aria-label="Welcome to Chuks Kitchen"
                >

                    {/* ── Top nav bar ── */}
                    <header className="w-full flex justify-between">
                        <BrandLogo />
                        <Link href="/auth/sign-in">
                            <AppButton
                                variant="secondary"
                                ariaLabel="Sign in to your account"
                                className=" text-md font-semibold py-3.75 px-12 "
                            >
                                Sign In
                            </AppButton>
                        </Link>
                    </header>

                    <div className="flex flex-col md:gap-4.5 lg:gap-9">
                        {/* Headline */}
                        <AppHeading
                            variant="h1"
                            as="h1"
                            colorStyle="dark"
                            className="text-left text-[36px] lg:text-[40px] leading-[1.2]"
                        >
                            Your Authentic Taste of Nigeria
                        </AppHeading>

                        {/* Description */}
                        <p className="text-[#4B5563] text-[16px] leading-6 font-medium">
                            Experience homemade flavors delivered fresh to your desk or home.
                            We bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>



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


                        <div className="flex flex-col gap-9">
                            {/* CTA buttons */}
                            <div className="flex flex-col gap-3">
                                <Link href={'/home'}>
                                    <AppButton
                                        variant="primary"
                                        ariaLabel="Start your order now"
                                        className="w-full py-[18px]"
                                    >
                                        Start Your Order
                                    </AppButton>
                                </Link>
                                <AppButton
                                    variant="secondary"
                                    ariaLabel="Learn more about Chuks Kitchen"
                                    className="w-full py-4.5"
                                >
                                    Learn More About Us
                                </AppButton>
                            </div>
                        </div>
                    </div>
                    {/* ── Footer bar ── */}
                    <footer className="w-full text-center">
                        <p className="font-medium leading-5 text-[14px]">
                            © 2024 Chuks Kitchen.{'  '}
                            <Link
                                href="/privacy"
                                className="hover:text-[#cbc4ec] text-[#64B5F6] font-medium leading-5 text-[14px] underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-[#64B5F6] rounded-sm"
                            >
                                Privacy Policy
                            </Link>
                            {' '}
                            <Link
                                href="/terms"
                                className="hover:text-[#cbc4ec] text-[#64B5F6] font-medium leading-5 text-[14px] underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-[#64B5F6] rounded-sm"
                            >
                                Terms of Service
                            </Link>
                        </p>
                    </footer>
                </section>
            </div>

        </div>
    )
}

export default Onboarding