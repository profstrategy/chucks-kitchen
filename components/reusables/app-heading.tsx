import { HTMLAttributes } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4'
type ColorStyle = 'dark' | 'lightDark' | 'light'

type Props = {
    variant: Variant
    colorStyle?: ColorStyle
    as?: Variant | 'p' | 'span' | 'legend' | 'label'
    className?: string
} & HTMLAttributes<HTMLElement>

const colorMap: Record<ColorStyle, string> = {
    dark: 'text-black',
    lightDark: 'text-[#1F2937]',
    light: 'text-white',
}

const variantMap: Record<Variant, string> = {
    h1: 'text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[61px]',
    h2: 'font-semibold text-[24px] leading-[32px]',
    h3: 'text-[16px] font-medium leading-[24px]',
    h4: 'font-medium text-[14px] leading-[20px]',
}

const AppHeading = (props: Props) => {
    const {
        children,
        variant,
        colorStyle = 'dark',
        as,
        className = '',
        ...rest
    } = props

    const Tag = as ?? variant

    return (
        <Tag
            className={`${colorMap[colorStyle]} ${variantMap[variant]} ${className}`.trim()}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default AppHeading