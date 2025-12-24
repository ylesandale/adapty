import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PromotionalBannerProps {
  /** Banner label text */
  label: string
  /** Banner title text */
  title: string
  /** Banner link URL */
  href: string
  /** Optional CSS classes */
  className?: string
}

/**
 * Promotional banner component with label, title, and link
 * @component
 */
export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  label,
  title,
  href,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-3 rounded-full border-2 border-[#242424] bg-[#C8F560] px-4 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group',
        className
      )}
    >
      <span className="rounded-full bg-[#242424] px-3 py-1 text-xs font-semibold text-white">
        {label}
      </span>
      <span className="text-sm font-medium text-[#242424]">{title}</span>
      <ArrowRight className="h-4 w-4 text-[#242424] transition-transform group-hover:translate-x-1" />
    </a>
  )
}
