import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 bg-[#5ce1e6] rounded-lg">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" className="text-navy" />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-navy"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-navy"
          />
        </svg>
      </div>
      <span className="text-2xl font-bold text-foreground">
        info<span className="text-foreground">tek</span>
      </span>
    </Link>
  )
}
