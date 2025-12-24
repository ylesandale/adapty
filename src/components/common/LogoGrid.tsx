import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, logoHover } from '@/constants'

interface Logo {
  name: string
  logoUrl: string
  alt: string
}

interface LogoGridProps {
  logos: Logo[]
  columns?: string
}

/**
 * Reusable logo grid with animations
 */
export const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  columns = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7',
}) => {
  return (
    <div
      className={`grid ${columns} gap-8 md:gap-10 lg:gap-12 items-center justify-items-center`}
    >
      {logos.map((logo) => (
        <motion.div
          key={logo.name}
          className="flex items-center justify-center w-full h-12 md:h-14"
          initial={fadeInUp.initial}
          whileInView={{ ...fadeInUp.whileInView, opacity: 0.6 }}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
          {...logoHover}
        >
          <img
            src={logo.logoUrl}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            draggable="false"
          />
        </motion.div>
      ))}
    </div>
  )
}
