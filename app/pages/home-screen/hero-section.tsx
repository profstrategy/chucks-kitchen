import AppButton from "@/components/reusables/app-button"
import AppHeading from "@/components/reusables/app-heading"
import Image from "next/image"
import { homeSvgs } from "./homeSvgs"

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="relative mb-7">

      {/* ── Full-viewport hero image ── */}
      <div className="relative h-svh md:h-[92vh] w-full">
        <Image
          src="/images/hero-image.png"
          alt="An overhead spread of authentic Nigerian dishes — jollof rice, egusi, plantain and more — shared at a table"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.72) 100%)',
          }}
          aria-hidden="true"
        />

        {/* ── Hero copy + CTA ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-12 max-w-7xl mx-auto gap-4 md:gap-10.5">

          {/* Headline */}
          <AppHeading
            variant="h1"
            colorStyle="light"
            className="max-w-96 md:max-w-160"
          >
            The Heart of Nigerian Home Cooking
          </AppHeading>

          {/* Sub-headline */}
          <p className="text-white font-semibold text-[16px] md:text-[18px] leading-6 max-w-[320px] md:max-w-115"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Handcrafted with passion, delivered with care.
          </p>

          {/* CTA */}
          <AppButton
            variant="primary"
            ariaLabel="Discover what's new at Chuks Kitchen"
            className="self-start font-semibold text-[14px] md:text-[16px] leading-6 py-3 md:py-4 px-6 md:px-7 mt-1"
          >
            Discover what&apos;s new
          </AppButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <label htmlFor="hero-search" className="sr-only">
          What are you craving for today?
        </label>
        <div className="flex items-center gap-3 bg-white rounded-xl md:rounded-2xl shadow-lg px-4 md:px-5 h-14 md:h-16 w-full">
          {homeSvgs.searchIcon}
          <input
            id="hero-search"
            type="search"
            placeholder="What are you craving for today?"
            aria-label="Search for Nigerian dishes"
            className="flex-1 bg-transparent text-[14px] md:text-[15px] text-gray-800 placeholder:text-gray-400 outline-none leading-5"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection