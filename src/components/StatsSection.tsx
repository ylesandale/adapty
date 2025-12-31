'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Container, AnimatedElement } from './common'

interface StatsSectionProps {
  /** Optional CSS classes */
  className?: string
}

const stats = [
  {
    value: '$2 млрд.',
    label: 'обрабатываемого дохода',
  },
  {
    value: '99.99%',
    label: 'времени безотказной работы',
  },
  {
    value: '2.5 млрд.',
    label: 'обслуживаемых пользователей',
  },
  {
    value: '60 млрд.',
    label: 'обращений к API / месяц',
  },
]

/**
 * Stats section - Vercel style
 * @component
 */
export const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 md:py-28 bg-secondary', className)}>
      <Container>
        <AnimatedElement className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto">
          Adapty обрабатывает доход от подписок с{' '}
          <span className="text-gradient">самым высоким SLA</span> уровнем в
          индустрии
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedElement
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-border"
              delay={index * 0.1}
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-3 whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </section>
  )
}
