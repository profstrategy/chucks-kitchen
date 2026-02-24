import Image from 'next/image'
import AppHeading from './app-heading'
import AppButton from './app-button'

type BaseCardProps = {
  title: string
  imageSrc: string
  imageAlt?: string     
  onClick?: () => void
}

type ExploreCardProps = BaseCardProps & {
  variant: 'explore'
  description?: never
  price?: never
  onAddToCart?: never
}

type MenuCardProps = BaseCardProps & {
  variant: 'menu'
  description: string
  price: string
  onAddToCart: () => void
}

type AppCardProps = ExploreCardProps | MenuCardProps

const CARD_STYLES = {
  explore: {
    // w:358  pt:2 pr:4 pb:18 pl:4  gap:10
    wrapper: 'pt-px pr-1 pb-[18px] pl-1 gap-[10px] w-[358px]',
    imageClass: 'h-[200px]',
  },
  menu: {
    // w:356  pt:2 pr:2 pb:46 pl:2  gap:25
    wrapper: 'pt-px pr-px pb-[46px] pl-px gap-[25px] w-[356px]',
    imageClass: 'h-[220px]',
  },
}


const AppCard = (props: AppCardProps) => {
  const { variant, title, imageSrc, imageAlt, onClick } = props
  const { wrapper, imageClass } = CARD_STYLES[variant]

  const resolvedAlt = imageAlt ?? title

  return (
    <article
      className={`bg-white flex flex-col rounded-[14px] overflow-hidden w-full max-w-full shadow-sm hover:shadow-md transition-shadow duration-200 ${wrapper}`}
      aria-label={variant === 'explore' ? title : undefined}
    >
      <div className={`relative w-full overflow-hidden rounded-[10px] ${imageClass}`}>
        <Image
          src={imageSrc}
          alt={resolvedAlt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-1">

        {/* Title */}
        <AppHeading
          variant="h3"
          as="h3"
          colorStyle="dark"
          className={variant === 'explore' ? 'text-center' : 'text-left'}
        >
          {title}
        </AppHeading>

        {/* Description — menu variant only */}
        {variant === 'menu' && (
          <p className="text-gray-600 text-sm leading-5.5 font-normal mt-1">
            {props.description}
          </p>
        )}

        {/* ── CTA row ── */}
        {variant === 'explore' ? (
          <div className="mt-auto pt-2 flex justify-center">
            <AppButton
              variant="primary"
              onClick={onClick}
              ariaLabel={`Explore ${title}`}
              className="px-8"
            >
              Explore
            </AppButton>
          </div>
        ) : (
          <div className="mt-auto pt-4 flex items-center justify-between gap-4">
            {/* <data> gives screen readers + scrapers a machine-readable price value */}
            <data
              value={props.price.replace(/[^\d.]/g, '')}
              className="font-semibold text-[18px] text-primary-color whitespace-nowrap"
            >
              {props.price}
            </data>

            <AppButton
              variant="primary"
              onClick={props.onAddToCart}
              ariaLabel={`Add ${title} to cart`}
              className="px-6 py-3 text-sm"
            >
              Add to cart
            </AppButton>
          </div>
        )}
      </div>
    </article>
  )
}

export default AppCard