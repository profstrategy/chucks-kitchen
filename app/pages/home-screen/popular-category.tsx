'use client'
import AppCard from "@/components/reusables/app-card"
import AppHeading from "@/components/reusables/app-heading"

const MOBILE_LIMIT = 3

const popularCategories = [
    { id: 0, name: 'Jollof Delights',  image: '/images/jollof-delight.png' },
    { id: 1, name: 'Swallow & Soups',  image: '/images/swallow.png'        },
    { id: 2, name: 'Grills & BBQ',     image: '/images/grills.png'         },
    { id: 3, name: 'Sweet Treats',     image: '/images/sweet-treats.png'   },
    { id: 4, name: 'Jollof Delights',  image: '/images/jollof-delight.png' },
    { id: 5, name: 'Jollof Delights',  image: '/images/grills.png'         },
]

const hasMore = popularCategories.length > MOBILE_LIMIT
const mobileItems = popularCategories.slice(0, MOBILE_LIMIT)


const PopularCategory = () => {
    return (
        <section aria-label="Popular Categories" className="w-full max-w-7xl m-auto px-5 md:px-12 py-24">

            <AppHeading variant="h1" className="text-[32px] leading-10.5 text-center mb-8.35 md:mb-12.5">
                Popular Categories
            </AppHeading>

            {popularCategories.length > 0 ? (
                <>
                    {/* ── Mobile: first 2 items only (below md) ── */}
                    <div className="grid grid-cols-1 gap-8.25 md:hidden">
                        {mobileItems.map((category) => (
                            <AppCard
                                key={category.id}
                                variant="explore"
                                title={category.name}
                                imageAlt={`${category.name} image`}
                                imageSrc={category.image}
                            />
                        ))}
                    </div>

                    {/* ── Desktop / tablet: all items (md and above) ── */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-12.5 md:grid-rows-2">
                        {popularCategories.map((category) => (
                            <AppCard
                                key={category.id}
                                variant="explore"
                                title={category.name}
                                imageAlt={`${category.name} image`}
                                imageSrc={category.image}
                            />
                        ))}
                    </div>

                    {/* ── "View All" — mobile only, only when array.length > 2 ── */}
                    {hasMore && (
                        <p
                            role="button"
                            tabIndex={0}
                            aria-label="View all categories"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click()
                            }}
                            className="text-primary-blue text-center mt-8.25 md:hidden cursor-pointer hover:opacity-70 transition-opacity duration-150 focus-visible:outline focus-visible:outline-current rounded-sm"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '140%',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            View All Categories
                        </p>
                    )}
                </>
            ) : (
                <p className="text-center text-gray-500">No popular categories available at the moment.</p>
            )}
        </section>
    )
}

export default PopularCategory