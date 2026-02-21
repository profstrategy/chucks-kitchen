import Image from 'next/image'
import AppHeading from './app-heading'
import AppButton from './app-button'
type AppCardProps = {
    title: string,
    description?: string,
    imageSrc: string,
    cartButton?: React.ReactNode,
    exploreButton?: React.ReactNode,
    onClick?: () => void,
    price?: string,
}
const AppCard = ({ title, description, imageSrc, onClick, price, cartButton, exploreButton }: AppCardProps) => {
    return (
        <div className={`bg-white flex flex-col items-center rounded-[14px] px-0.5 w-full md:w-auto ${exploreButton ? 'gap-12.5' : 'gap-6.25'}`}>
            <Image src={imageSrc} alt={title} />
            <div className='flex flex-col gap-1.75'>
                <AppHeading variant='h2'>{title}</AppHeading>
                {description && <p>{description}</p>}
            </div>

            <div>
                {exploreButton && <AppButton variant='primary' onClick={onClick} ariaLabel={`Explore ${title}`}>{exploreButton}</AppButton>}

                {price || cartButton && <div>
                    <p>{price}</p>
                    <AppButton variant='primary' onClick={onClick} ariaLabel={`Order ${title}`}>Add to Cart</AppButton>
                </div>}
            </div>
        </div>
    )
}

export default AppCard