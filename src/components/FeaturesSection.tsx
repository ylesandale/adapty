import React from 'react'
import { Section, SectionTitle, FeatureCard } from '@/components/common'
import { DecorativeBlur } from '@/constants'

interface FeaturesSectionProps {
  /** Optional CSS classes */
  className?: string
}

const featureCards = [
  {
    title: 'Для разработчиков',
    imageUrl:
      'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
    imageAlt: 'Card Cover Sdk Install',
    href: 'https://adapty.io/ru/for-developers/',
    features: [
      'Подписки SDK',
      'Сбережение на возвратах',
      'Удалённая конфигурация',
      'Резервные пейволлы',
    ],
  },
  {
    title: 'Для владельцев',
    imageUrl:
      'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
    imageAlt: 'Card Cover Charts',
    href: 'https://adapty.io/ru/for-app-owners/',
    features: [
      'Аналитика доходов',
      'Аналитика LTV',
      'Прогнозы ИИ для LTV и доходов',
    ],
  },
  {
    title: 'Для маркетологов',
    imageUrl:
      'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
    imageAlt: 'Card Cover Paywalls',
    href: 'https://adapty.io/ru/for-marketers/',
    features: [
      'A/B тестирование',
      'Конструктор без кода',
      'Локализации',
      'Ориентирование',
    ],
  },
]

/**
 * Features section component with cards for different audiences
 * @component
 */
export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  className,
}) => {
  return (
    <Section className={className}>
      <SectionTitle>
        Управляйте своим подписочным бизнесом.{' '}
        <br className="hidden sm:block" />
        Быстрее и дешевле.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-5 xl:gap-6">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>

      <DecorativeBlur />
    </Section>
  )
}
