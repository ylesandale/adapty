'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container, AnimatedElement } from './common';

interface FeaturesSectionProps {
  /** Optional CSS classes */
  className?: string;
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
];

/**
 * Features section - Vercel style
 * @component
 */
export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  className,
}) => {
  return (
    <section className={cn('py-20 md:py-28 bg-white', className)}>
      <Container>
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Управляйте своим <span className="text-gradient">подписочным бизнесом</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Быстрее и дешевле.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col vercel-card overflow-hidden hover:border-black transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-1">
                {/* Title with Arrow */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-2">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};
