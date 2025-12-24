import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/constants'

interface Stat {
  value: string
  label: string
  sublabel?: string
}

interface StatsGridProps {
  stats: Stat[]
}

/**
 * Reusable stats grid component
 */
export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 xl:gap-20">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 whitespace-nowrap">
            {stat.value}
          </div>
          <div className="text-base md:text-lg text-muted-foreground">
            {stat.label}
          </div>
          {stat.sublabel && (
            <div className="text-sm text-muted-foreground mt-1">
              {stat.sublabel}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
