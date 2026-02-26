'use client'
import AppCard from "@/components/reusables/app-card"
import AppHeading from "@/components/reusables/app-heading"

const MOBILE_LIMIT = 3

const jollofentrees = [
    { id: 0, image: '/images/amala.png', name: 'Amala with Gbegiri & Ewedu', description: 'Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.', price: '₦3,100' },
    { id: 1, image: '/images/fufu.png', name: 'Fufu & Okra Soup (Fish)', description: 'Light Fufu served with fresh okra soup and tilapia fish.', price: '₦3,300' },
    { id: 2, image: '/images/fufu.png', name: 'Fufu & Okra Soup (Fish)', description: 'Light Fufu served with fresh okra soup and tilapia fish.', price: '₦3,300' },
    { id: 3, image: '/images/fufu.png', name: 'Fufu & Okra Soup (Fish)', description: 'Light Fufu served with fresh okra soup and tilapia fish.', price: '₦3,300' },
    { id: 4, image: '/images/fufu.png', name: 'Fufu & Okra Soup (Fish)', description: 'Light Fufu served with fresh okra soup and tilapia fish.', price: '₦3,300' },

    { id: 5, image: '/images/fufu.png', name: 'Fufu & Okra Soup (Fish)', description: 'Light Fufu served with fresh okra soup and tilapia fish.', price: '₦3,300' },
]

const mobileItems = jollofentrees.slice(0, MOBILE_LIMIT)
const hasMore = jollofentrees.length > MOBILE_LIMIT

const SwallowAndSoup = () => {
    return (
        <section aria-label="Swallow & Soups" className="w-full max-w-7xl m-auto px-5 md:px-12 mb-9.75">
            <AppHeading variant="h1" className="mb-1 md:mb-5">
                Swallow & Soups
            </AppHeading>

            {jollofentrees.length > 0 ? (
                <>
                    {/* ── Mobile: first 3 items, horizontal card layout (below md) ── */}
                    <div className="flex flex-col gap-6.75 md:hidden">
                        {mobileItems.map((item) => (
                            <AppCard
                                key={item.id}
                                variant="explore"
                                title={item.name}
                                imageAlt={`${item.name} image`}
                                imageSrc={item.image}
                                description={item.description}
                                price={item.price}
                                onAddToCart={() => alert('coming soon')}
                            />
                        ))}
                    </div>

                    {/* ── Desktop / tablet: all items, vertical card layout (md+) ── */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:grid-rows-2">
                        {jollofentrees.map((item) => (
                            <AppCard
                                key={item.id}
                                variant="explore"
                                title={item.name}
                                imageAlt={`${item.name} image`}
                                imageSrc={item.image}
                                description={item.description}
                                price={item.price}
                                onAddToCart={() => alert('coming soon')}
                            />
                        ))}
                    </div>

                    {/* ── "View All" — mobile only, when array.length > MOBILE_LIMIT ── */}
                    {hasMore && (
                        <p
                            role="button"
                            tabIndex={0}
                            aria-label="View all popular dishes"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click()
                            }}
                            className="text-primary-blue text-center mt-8 md:hidden cursor-pointer hover:opacity-70 transition-opacity duration-150 focus-visible:outline focus-visible:outline-current rounded-sm"
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
                <p className="text-center text-gray-500">No popular dishes available at the moment.</p>
            )}
        </section>
    )
}

export default SwallowAndSoup