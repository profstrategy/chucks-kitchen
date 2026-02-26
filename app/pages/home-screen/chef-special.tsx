'use client'
import AppCard from "@/components/reusables/app-card"
import AppHeading from "@/components/reusables/app-heading"

const MOBILE_LIMIT = 3

const popularCategories = [
    { id: 0, name: 'Jollof Rice & Fried Chicken', image: '/images/jollof-delight.png', description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.', price: '₦3,500' },
    { id: 1, name: 'Spicy Tilapia Pepper Soup',   image: '/images/spicy.png',          description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',   price: '₦3,500' },
    { id: 2, name: 'Spicy Tilapia Pepper Soup',   image: '/images/spicy.png',          description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',   price: '₦3,500' },
    { id: 3, name: 'Spicy Tilapia Pepper Soup',   image: '/images/spicy.png',          description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',   price: '₦3,500' },
    { id: 4, name: 'Spicy Tilapia Pepper Soup',   image: '/images/spicy.png',          description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',   price: '₦3,500' },
    { id: 5, name: 'Egusi Soup & Pounded Yam',    image: '/images/egusi-soup.png',     description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',  price: '₦3,500' },
]

const hasMore = popularCategories.length > MOBILE_LIMIT
const mobileItems = popularCategories.slice(0, MOBILE_LIMIT)

const ChefSpecial = () => {
    return (
        <section aria-label="Chef Specials" className="w-full max-w-7xl m-auto px-5 md:px-12 py-24">

            <AppHeading variant="h1" className="text-[32px] leading-10.5 text-center mb-8.35 md:mb-12.5">
                Chef&apos;s Specials
            </AppHeading>

            {popularCategories.length > 0 ? (
                <>
                    {/* ── Mobile: first 3 items only (below md) ── */}
                    <div className="grid grid-cols-1 gap-8.25 md:hidden">
                        {mobileItems.map((item) => (
                            <AppCard
                                key={item.id}
                                variant="menu"
                                title={item.name}
                                imageAlt={`${item.name} image`}
                                imageSrc={item.image}
                                description={item.description}
                                price={item.price}
                                onAddToCart={() => alert('coming soon')}
                            />
                        ))}
                    </div>

                    {/* ── Desktop / tablet: all items (md and above) ── */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-12.5 md:grid-rows-2">
                        {popularCategories.map((item) => (
                            <AppCard
                                key={item.id}
                                variant="menu"  
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
                            aria-label="View all chef specials"
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
                            View All Specials
                        </p>
                    )}
                </>
            ) : (
                <p className="text-center text-gray-500">No chef&apos;s specials available at the moment.</p>
            )}
        </section>
    )
}

export default ChefSpecial