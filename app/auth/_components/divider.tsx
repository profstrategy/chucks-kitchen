// ─── Divider with text ────────────────────────────────────────────────────────

const OrDivider = () => (
  <div className="flex items-center gap-3 w-full">
    <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
    <p className="font-normal text-[12px] leading-4 text-gray-500 shrink-0">Or continue with</p>
    <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
  </div>
)

export default OrDivider