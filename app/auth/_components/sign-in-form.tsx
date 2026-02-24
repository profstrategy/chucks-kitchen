import AuthButton from "@/components/reusables/auth-button"
import Link from "next/link"
import { AuthSvg } from "./auth-svg"
import OrDivider from "./divider"
import AppButton from "@/components/reusables/app-button"
import AppTextInput from "@/components/reusables/app-text-input"
import { useState } from "react"

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-4 w-full">

      {/* ── Inputs ── */}
      <div className="flex flex-col gap-4">
        <AppTextInput
          label="Email or phone number"
          icon={AuthSvg.mail}
          placeholder="name@gmail.com"
          type="email"
          autoComplete="email"
          aria-label="Email or phone number"
        />

        {/* Password with toggle */}
        <div className="flex flex-col gap-0">
          <div className="relative">
            <AppTextInput
              label="Password"
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="flex items-center justify-center focus-visible:outline focus-visible:outline-[#FF7A18] rounded-sm"
                >
                  {showPassword ? AuthSvg.eyeOnIcon : AuthSvg.visibility}
                </button>
              }
              placeholder="••••••"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              aria-label="Password"
            />
          </div>
          <div className="flex justify-end mt-1.5">
            <Link
              href="/auth/forgot-password"
              className="text-[12px] text-[#1E88E5] leading-4 hover:underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-[#1E88E5] rounded-sm"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>

      {/* ── Primary CTA ── */}
      <AppButton
        variant="primary"
        type="submit"
        ariaLabel="Continue signing in"
        className="w-full py-4.5"
      >
        Continue
      </AppButton>

      {/* ── Divider ── */}
      <OrDivider />

      {/* ── Social auth ── */}
      <div className="flex flex-col gap-3">
        <AuthButton
          provider="google"
          icon={AuthSvg.google}
          
          onClick={() => alert('Google sign-in coming soon!')}
        >
          Continue with Google
        </AuthButton>
        <AuthButton
          provider="facebook"
          icon={AuthSvg.facebook}
          onClick={() => alert('Facebook sign-in coming soon!')}
        >
          Continue with Facebook
        </AuthButton>
      </div>

      {/* ── Footer link ── */}
      <p className="font-normal text-[12px] leading-4 text-center text-gray-600">
        Don't have an account?{' '}
        <Link
          href="/auth/sign-up"
          className="text-[#1E88E5] font-medium hover:underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-[#1E88E5] rounded-sm"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default SignInForm