'use client'
import AppCard from "@/components/reusables/app-card"
import AppHeading from "@/components/reusables/app-heading"

const MOBILE_LIMIT = 3

const popularItems = [
    { id: 0, image: '/images/jollof-delight.png', name: 'Jollof Rice & Fried Chicken',   description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',  price: '₦3,500' },
    { id: 1, image: '/images/eba.png',             name: 'Eba & Egusi Soup (Goat Meat)',   description: 'Hearty Egusi soup with tender goat meat, served with soft Eba.',            price: '₦3,500' },
    { id: 2, image: '/images/pounded-yam.png',     name: 'Pounded Yam & Edikaikong',       description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',                price: '₦3,800' },
    { id: 3, image: '/images/peppered-snail.png',  name: 'Peppered Snail',                 description: 'Spicy and savory peppered snail, perfect as a starter.',                   price: '₦2,500' },
    { id: 4, image: '/images/tilapia.png',         name: 'Grilled Tilapia Fish',           description: 'Whole grilled tilapia seasoned with our special spices.',                  price: '₦4,500' },
    { id: 5, image: '/images/jollof-delight.png',  name: 'Jollof Rice & Fried Chicken',   description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',  price: '₦3,500' },
]

const mobileItems = popularItems.slice(0, MOBILE_LIMIT)
const hasMore = popularItems.length > MOBILE_LIMIT

const PopularSection = () => {
    return (
        <section aria-label="Popular dishes" className="w-full max-w-7xl m-auto px-5 md:px-12 py-9.25">
            <AppHeading variant="h1" className="mb-1 md:mb-5">
                Popular
            </AppHeading>

            {popularItems.length > 0 ? (
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
                        {popularItems.map((item) => (
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

export default PopularSection