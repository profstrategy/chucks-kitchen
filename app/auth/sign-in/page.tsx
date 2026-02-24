import type { Metadata } from "next";
import SignIn from "../_components/sign-in";

export const metadata: Metadata = {
  title: "Sign In | Chucks Kitchen",
  description:
    "Sign in to your Chucks Kitchen account to order meals, track orders, and manage your food preferences online.",
  keywords: [
    "Chucks Kitchen login",
    "Chucks Kitchen sign in",
    "food ordering login",
    "restaurant account login",
    "order food online",
  ],
  openGraph: {
    title: "Sign In | Chuks Kitchen",
    description:
      "Sign in to your Chuks Kitchen account to order meals, track orders, and manage your food preferences online.",
    url: "https://chucks-kitchen.vercel.app/auth/sign-in",
    siteName: "Chuks Kitchen",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign In | Chuks Kitchen",
    description:
      "Sign in to your Chuks Kitchen account to order meals, track orders, and manage your food preferences online.",
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://chucks-kitchen.vercel.app/auth/sign-in",
  },
};

const SignInPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <SignIn />
    </section>
  );
};

export default SignInPage;