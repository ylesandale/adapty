import React from 'react'
import { Section, SectionTitle, StatsGrid } from '@/components/common'
import { DecorativeBlur } from '@/constants'

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
 * Stats section component displaying key metrics
 * @component
 */
export const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <Section className={className}>
      <SectionTitle size="medium" className="max-w-5xl mx-auto">
        Adapty обрабатывает доход от подписок с самым высоким SLA уровнем в
        индустрии
      </SectionTitle>

      <StatsGrid stats={stats} />

      <DecorativeBlur />
    </Section>
  )
}
