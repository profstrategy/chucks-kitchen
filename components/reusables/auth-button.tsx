type Props = {
    children: React.ReactNode,
    icon: React.ReactNode,
    provider: 'google' | 'apple'
    onClick?: () => void
}

const AuthButton = (props: Props) => {
    const { children, icon, provider, onClick } = props;
    const label = `Continue with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`;

    return (
        <button
            type="button"
            className="bg-white border border-[#BDBDBD] w-auto py-1.5 flex items-center gap-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label={label}
            onClick={onClick}
        >
            <span aria-hidden="true">{icon}</span>
            {children}
        </button>
    )
}

export default AuthButton