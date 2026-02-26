import AppButton from '@/components/reusables/app-button'
import AppHeading from '@/components/reusables/app-heading'
import Image from 'next/image'

const Discover = () => {
    return (
        <section aria-label="discover" className="relative">

            {/* ── Full-viewport hero image ── */}
            <div className="relative h-svh md:h-[92vh] w-full">
                <Image
                    src="/images/discover.png"
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
                        className="font-extrabold"
                    >
                        Introducing Our New Menu Additions!
                    </AppHeading>

                    {/* Sub-headline */}
                    <p className="text-white font-semibold text-[20px] md:text-[24px] md:leading-8.5 leading-7 max-w-[350px] md:max-w-115"
                       >
                        Explore exciting new dishes, crafted with the freshest
                        ingredients and authentic Nigerian flavors. Limited time
                        offer!
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
        </section>
    )
}

export default Discover 