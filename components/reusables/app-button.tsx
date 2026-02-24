type AppButtonProps = {
  children: React.ReactNode,
  variant: 'primary' | 'secondary',
  type?: 'button' | 'submit' | 'reset',
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  ariaLabel?: string,
}

const variantStyles: Record<AppButtonProps['variant'], string> = {
  primary: 'bg-primary-orange text-white hover:bg-orange-600 active:bg-orange-700',
  secondary: 'bg-white text-primary-blue border-primary-blue hover:bg-blue-50 active:bg-blue-100',
}

const AppButton = (props: AppButtonProps) => {
  const { children, variant, type = 'button', disabled, onClick, ariaLabel, className='' } = props;

  return (
    <button
      type={type}
      className={`
        rounded-[10px] border-2 ${className.trim()}
        focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-150
        ${variantStyles[variant]}
      `}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default AppButton