import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardBase, fadeInUp, cardHover } from '@/constants'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
  delay?: number
  hover?: boolean
  onClick?: () => void
}

/**
 * Reusable card component with animations
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  href,
  delay = 0,
  hover = true,
  onClick,
}) => {
  const Component = href ? motion.a : motion.div

  const props = href
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <Component
      className={cn('group', cardBase, className)}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={{ ...fadeInUp.transition, delay }}
      {...(hover ? cardHover : {})}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  )
}

