import type { Metadata } from "next"
import SignUp from "../_components/sign-up"

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Create Account | Chuks Kitchen",
  description:
    "Create your free Chuks Kitchen account to order authentic Nigerian meals, track your deliveries, and manage your food preferences from anywhere.",
  keywords: [
    "Chuks Kitchen sign up",
    "create account",
    "Nigerian food delivery",
    "order Nigerian food online",
    "Chuks Kitchen register",
    "homemade Nigerian meals",
    "Lagos food delivery",
  ],
  openGraph: {
    title: "Create Account | Chuks Kitchen",
    description:
      "Join Chuks Kitchen and enjoy authentic Nigerian homemade meals delivered fresh to your door.",
    url: "https://chucks-kitchen.vercel.app/auth/sign-up",
    siteName: "Chuks Kitchen",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Create Account | Chuks Kitchen",
    description:
      "Join Chuks Kitchen and enjoy authentic Nigerian homemade meals delivered fresh to your door.",
  },
  robots: {
    index: false, 
    follow: false,
  },
  alternates: {
    canonical: "https://chucks-kitchen.vercel.app/auth/sign-up",
  },
}

const SignUpPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <SignUp />
    </section>
  )
}

export default SignUpPage
