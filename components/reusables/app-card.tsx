import Image from 'next/image'
import AppHeading from './app-heading'
import AppButton from './app-button'

// ─── Plus icon ────────────────────────────────────────────────────────────────

const PlusIcon = (
  <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.75 9.375C18.75 9.67337 18.6315 9.95952 18.4205 10.1705C18.2095 10.3815 17.9234 10.5 17.625 10.5H10.5V17.625C10.5 17.9234 10.3815 18.2095 10.1705 18.4205C9.95952 18.6315 9.67337 18.75 9.375 18.75C9.07663 18.75 8.79048 18.6315 8.5795 18.4205C8.36853 18.2095 8.25 17.9234 8.25 17.625V10.5H1.125C0.826631 10.5 0.540483 10.3815 0.329505 10.1705C0.118526 9.95952 0 9.67337 0 9.375C0 9.07663 0.118526 8.79048 0.329505 8.5795C0.540483 8.36853 0.826631 8.25 1.125 8.25H8.25V1.125C8.25 0.826631 8.36853 0.540483 8.5795 0.329505C8.79048 0.118526 9.07663 0 9.375 0C9.67337 0 9.95952 0.118526 10.1705 0.329505C10.3815 0.540483 10.5 0.826631 10.5 1.125V8.25H17.625C17.9234 8.25 18.2095 8.36853 18.4205 8.5795C18.6315 8.79048 18.75 9.07663 18.75 9.375Z" fill="white"/>
  </svg>
)

// ─── Types ────────────────────────────────────────────────────────────────────

type BaseCardProps = {
  title: string
  imageSrc: string
  imageAlt?: string
  onClick?: () => void
}

type PopularCardProps = BaseCardProps & {
  variant: 'popular'
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

type ExploreCardProps = BaseCardProps & {
  variant: 'explore'
  description: string
  price: string
  onAddToCart: () => void
}

type AppCardProps = PopularCardProps | MenuCardProps | ExploreCardProps

// ─── Card style maps ──────────────────────────────────────────────────────────

const CARD_STYLES = {
  popular: { wrapper: 'pt-px pr-1 pb-[18px] pl-1 gap-[10px]',    imageClass: 'h-[200px]' },
  menu:    { wrapper: 'pt-px pr-px pb-[46px] pl-px gap-[25px]',  imageClass: 'h-[220px]' },
  explore: { wrapper: 'pt-px pr-px pb-[46px] pl-px gap-[25px]',  imageClass: 'h-[220px]' },
}

const AddButton = ({ title, onAddToCart, size = 'md' }: { title: string; onAddToCart: () => void; size?: 'sm' | 'md' }) => (
  <button
    type="button"
    onClick={onAddToCart}
    aria-label={`Add ${title} to cart`}
    className={`bg-[#FF7A18] hover:bg-orange-600 active:bg-orange-700 rounded-full flex items-center justify-center
      transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]
      shrink-0 ${size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'}`}
  >
    {PlusIcon}
  </button>
)

// ─── Component ────────────────────────────────────────────────────────────────

const AppCard = (props: AppCardProps) => {
  const { variant, title, imageSrc, imageAlt, onClick } = props
  const { wrapper, imageClass } = CARD_STYLES[variant]
  const resolvedAlt = imageAlt ?? title

  if (variant === 'explore') {
    return (
      <article
        className="bg-white rounded-[14px] overflow-hidden w-full shadow-sm hover:shadow-md transition-shadow duration-200"
        aria-label={title}
      >

        {/* ── Mobile: horizontal card ── */}
        <div className="flex md:hidden items-center gap-3 p-3">
          <div className="relative w-[90px] h-[80px] shrink-0 rounded-[10px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={resolvedAlt}
              fill
              sizes="90px"
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="flex flex-col flex-1 min-w-0 gap-0.5">
            <AppHeading variant="h3" as="h3" colorStyle="dark" className="text-left text-[15px] leading-[22px]">
              {title}
            </AppHeading>
            <p className="text-gray-500 text-[12px] leading-[18px] font-normal line-clamp-2">
              {props.description}
            </p>
            <data
              value={props.price.replace(/[^\d.]/g, '')}
              className="font-semibold text-[14px] text-[#FF7A18] whitespace-nowrap mt-1"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {props.price}
            </data>
          </div>

          <AddButton title={title} onAddToCart={props.onAddToCart} size="sm" />
        </div>

        {/* ── Desktop / tablet: vertical card ── */}
        <div className={`hidden md:flex flex-col ${wrapper}`}>
          <div className={`relative w-full overflow-hidden rounded-[10px] ${imageClass}`}>
            <Image
              src={imageSrc}
              alt={resolvedAlt}
              fill
              sizes="(max-width: 1280px) 33vw, 360px"
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="flex flex-col flex-1 px-1">
            <AppHeading variant="h3" as="h3" colorStyle="dark" className="text-left">
              {title}
            </AppHeading>
            <p className="text-gray-600 text-sm leading-[22px] font-normal mt-1">
              {props.description}
            </p>
            <div className="mt-auto pt-4 flex items-center justify-between gap-4">
              <data
                value={props.price.replace(/[^\d.]/g, '')}
                className="font-semibold text-[18px] text-[#FF7A18] whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {props.price}
              </data>
              <AddButton title={title} onAddToCart={props.onAddToCart} size="md" />
            </div>
          </div>
        </div>

      </article>
    )
  }

  return (
    <article
      className={`bg-white flex flex-col rounded-[14px] overflow-hidden w-full max-w-full shadow-sm hover:shadow-md transition-shadow duration-200 ${wrapper}`}
      aria-label={variant === 'popular' ? title : undefined}
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

      <div className="flex flex-col flex-1 px-1">
        <AppHeading
          variant="h3"
          as="h3"
          colorStyle="dark"
          className={variant === 'popular' ? 'text-center' : 'text-left'}
        >
          {title}
        </AppHeading>

        {variant === 'menu' && (
          <p className="text-gray-600 text-sm leading-[22px] font-normal mt-1">
            {props.description}
          </p>
        )}

        {variant === 'popular' ? (
          <div className="mt-auto pt-2 flex justify-end">
            <AppButton
              variant="secondary"
              onClick={onClick}
              ariaLabel={`Explore ${title}`}
              className="px-4 py-2 border-2"
            >
              Explore
            </AppButton>
          </div>
        ) : (
          <div className="mt-auto pt-4 flex items-center justify-between gap-4">
            <data
              value={props.price.replace(/[^\d.]/g, '')}
              className="font-semibold text-[18px] text-[#FF7A18] whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
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