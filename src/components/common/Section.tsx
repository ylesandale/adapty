import React from 'react'
import { cn } from '@/lib/utils'
import { sectionPadding, containerWidth } from '@/constants'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark' | 'default'
  containerClassName?: string
}

/**
 * Reusable section wrapper with consistent padding and container
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant = 'default',
  containerClassName,
}) => {
  const variantClasses = {
    light: 'bg-white',
    dark: 'bg-[#1a1a1a] text-white',
    default: 'bg-background',
  }

  return (
    <section
      className={cn(
        'relative',
        sectionPadding,
        variantClasses[variant],
        className
      )}
    >
      <div className={cn(containerWidth, containerClassName)}>{children}</div>
    </section>
  )
}

