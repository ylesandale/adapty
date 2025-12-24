import React from 'react'
import { Section, SectionTitle, LogoGrid } from '@/components/common'
import { DecorativeBlurAlt } from '@/constants'

interface TrustSectionProps {
  /** Optional CSS classes */
  className?: string
}

const trustedApps = [
  {
    name: 'Feeld',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg',
    alt: 'Feeld',
  },
  {
    name: 'Bumble',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg',
    alt: 'Bumble',
  },
  {
    name: 'Weewoo',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/weewoo.svg',
    alt: 'Weewoo',
  },
  {
    name: 'AppNation',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp',
    alt: 'AppNation',
  },
  {
    name: 'Almus',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/almus.svg',
    alt: 'Almus',
  },
  {
    name: 'Impala Studios',
    logoUrl:
      'https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg',
    alt: 'Impala Studios',
  },
  {
    name: 'HUBX',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg',
    alt: 'HUBX',
  },
]

/**
 * Trust section component displaying trusted companies/apps
 * @component
 */
export const TrustSection: React.FC<TrustSectionProps> = ({ className }) => {
  return (
    <Section className={className}>
      <SectionTitle
        size="small"
        className="text-muted-foreground font-medium max-w-4xl mx-auto"
      >
        Доверяют более 15,000+ приложений и крупнейших мировых издателей
        приложений
      </SectionTitle>

      <LogoGrid logos={trustedApps} />

      <DecorativeBlurAlt />
    </Section>
  )
}
