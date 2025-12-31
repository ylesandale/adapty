'use client'

import React from 'react'
import { motion, MotionProps } from 'framer-motion'

interface AnimatedElementProps extends Omit<MotionProps, 'initial' | 'animate' | 'transition'> {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * Reusable animated element wrapper
 * Provides consistent fade-in-up animation
 */
export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

