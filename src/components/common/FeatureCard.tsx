import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cardBase, fadeInUp, cardHover } from '@/constants'

interface FeatureCardProps {
  title: string
  imageUrl: string
  imageAlt: string
  href: string
  features: string[]
  delay?: number
}

/**
 * Feature card with image, title, and feature list
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageUrl,
  imageAlt,
  href,
  features,
  delay = 0,
}) => {
  return (
    <motion.a
      href={href}
      className={cn('group flex flex-col', cardBase)}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={{ ...fadeInUp.transition, duration: 0.15, delay }}
      {...cardHover}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 md:p-6 lg:p-5 xl:p-6 flex-1">
        {/* Title with Arrow */}
        <div className="flex items-center justify-between mb-5 md:mb-6 pb-3 md:pb-4 border-b-2 border-border">
          <h3 className="text-base md:text-lg lg:text-base xl:text-lg font-semibold text-foreground">
            {title}
          </h3>
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-accent transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
        </div>

        {/* Features List */}
        <ul className="flex flex-col gap-2.5 md:gap-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}

