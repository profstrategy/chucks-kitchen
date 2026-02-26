import AuthButton from "@/components/reusables/auth-button"
import Link from "next/link"
import { AuthSvg } from "./auth-svg"
import OrDivider from "./divider"
import AppButton from "@/components/reusables/app-button"
import AppTextInput from "@/components/reusables/app-text-input"
import { useState } from "react"

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex flex-col gap-4 w-full">

      {/* ── Inputs ── */}
      <div className="flex flex-col gap-4">
        <AppTextInput
          label="Email"
          icon={AuthSvg.mail}
          placeholder="name@gmail.com"
          type="email"
          autoComplete="email"
          aria-label="Email address"
        />

        <AppTextInput
          label="Phone number"
          icon={AuthSvg.phoneIcon}
          placeholder="8123340690"
          type="tel"
          autoComplete="tel"
          inputMode="numeric"
          aria-label="Phone number"
        />

        <AppTextInput
          label="Password"
          icon={
            <PasswordToggle
              show={showPassword}
              onToggle={() => setShowPassword(p => !p)}
            />
          }
          placeholder="QWE123#"
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          aria-label="Password"
        />

        <AppTextInput
          label="Confirm password"
          icon={
            <PasswordToggle
              show={showConfirm}
              onToggle={() => setShowConfirm(p => !p)}
            />
          }
          placeholder="QWE123#"
          type={showConfirm ? 'text' : 'password'}
          autoComplete="new-password"
          aria-label="Confirm password"
        />
      </div>

      {/* ── Terms checkbox ── */}
      <label className="flex items-start gap-2.5 cursor-pointer group">
        <div className="relative shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            aria-label="I agree to the Terms & Conditions and Privacy Policy"
            className="peer sr-only"
          />
          {/* Custom checkbox box */}
          <div
            className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-colors duration-150
              ${agreed
                ? 'bg-[#FF7A18] border-[#FF7A18]'
                : 'bg-white border-gray-400 group-hover:border-[#FF7A18]'
              }`}
            aria-hidden="true"
          >
            {agreed && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                <path d="M1 4L3.66667 6.5L9 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
        <span className="text-[12px] leading-5 text-gray-600 font-[Poppins]">
          I agree to the{' '}
          <Link
            href="/terms"
            className="text-[#1E88E5] hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-[#1E88E5] rounded-sm"
          >
            Terms &amp; Conditions
          </Link>
          {' '}and{' '}
          <Link
            href="/privacy"
            className="text-[#1E88E5] hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-[#1E88E5] rounded-sm"
          >
            Privacy Policy
          </Link>
        </span>
      </label>

      {/* ── Primary CTA ── */}
      <AppButton
        variant="primary"
        type="submit"
        ariaLabel="Create your account"
        className="w-full py-4.5"
        disabled={!agreed}
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
          onClick={() => alert('Google sign-up coming soon!')}
        >
          Continue with Google
        </AuthButton>
        <AuthButton
          provider="facebook"
          icon={AuthSvg.facebook}
          onClick={() => alert('Facebook sign-up coming soon!')}
        >
          Continue with Facebook
        </AuthButton>
      </div>

      {/* ── Footer link ── */}
      <p className="font-normal text-[12px] leading-4 text-center text-gray-600">
        Already have an account?{' '}
        <Link
          href="/auth/sign-in"
          className="text-[#1E88E5] font-medium hover:underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-[#1E88E5] rounded-sm"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}

export default SignUpForm

const PasswordToggle = ({
  show,
  onToggle,
}: {
  show: boolean
  onToggle: () => void
}) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={show ? 'Hide password' : 'Show password'}
    className="flex items-center justify-center focus-visible:outline focus-visible:outline-[#FF7A18] rounded-sm"
  >
    {show ? AuthSvg.eyeOnIcon : AuthSvg.visibility}
  </button>
)