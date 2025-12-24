import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeIn, fadeInUp } from '@/constants'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
  centered?: boolean
}

/**
 * Reusable animated section title
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  size = 'large',
  centered = true,
}) => {
  const sizeClasses = {
    small: 'text-lg md:text-xl',
    medium: 'text-2xl md:text-3xl lg:text-4xl',
    large: 'text-3xl md:text-4xl lg:text-5xl',
  }

  const animation = size === 'small' ? fadeInUp : fadeIn

  return (
    <motion.h2
      className={cn(
        'font-bold leading-tight mb-12 md:mb-16 lg:mb-20',
        sizeClasses[size],
        centered && 'text-center',
        className
      )}
      {...animation}
    >
      {children}
    </motion.h2>
  )
}

