'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudiesSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface CaseStudy {
  id: string
  icon: string
  iconAlt: string
  title: string
  subtitle: string
  result: string
  description: string
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'productivity-app',
    icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp',
    iconAlt: 'Productivity app',
    title: 'Productivity app',
    subtitle: 'Продуктивность',
    result: '+50% общей выручки',
    description: 'Как ценовые тесты раскрыли потенциал',
    link: '/case-studies/productivity-app-and-autopilot/',
  },
  {
    id: 'text-on-pic',
    icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp',
    iconAlt: 'Text on Pic',
    title: 'Text on Pic',
    subtitle: 'Фото и видео',
    result: 'Рост MRR более 30%',
    description: 'Как увеличить доход с помощью правильных тестов',
    link: '/case-studies/photo-editing-app-and-autopilot/',
  },
  {
    id: 'trip-planning',
    icon: 'https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp',
    iconAlt: 'Secret app',
    title: 'Trip planning',
    subtitle: 'Путешествия',
    result: '+102% рост ARPU',
    description: 'Новая онбординг удвоила доход с пользователя',
    link: '/case-studies/travel-app/',
  },
  {
    id: 'going-merry',
    icon: 'https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp',
    iconAlt: 'Going Merry',
    title: 'Going Merry',
    subtitle: 'Издатель приложения',
    result: 'Рост MRR в 5 раз',
    description:
      'Как масштабировать доход от подписок с помощью Paywall Builder',
    link: '/case-studies/going-merry/',
  },
  {
    id: 'shmoody',
    icon: 'https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp',
    iconAlt: 'Shmoody',
    title: 'Shmoody',
    subtitle: 'Ментальное здоровье',
    result: 'ARR вырос с $0 до $2M',
    description: 'Как вырасти от бесплатного приложения до $2M ARR с Adapty',
    link: '/case-studies/shmoody/',
  },
  {
    id: 'lively',
    icon: 'https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png',
    iconAlt: 'Lively',
    title: 'Lively',
    subtitle: 'Здоровье и фитнес',
    result: 'На 83% меньше возвратов',
    description: 'Сэкономлено 82% потенциально дохода',
    link: '/case-studies/lively/',
  },
  {
    id: 'glam-ai',
    icon: 'https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp',
    iconAlt: 'Glam AI',
    title: 'Glam AI',
    subtitle: 'Макияж и красота',
    result: 'ROAS от Adapty – 108%',
    description: 'До 1.2 млн долларов в год за 3 месяца',
    link: '/case-studies/glam-ai/',
  },
  {
    id: 'pepapp',
    icon: 'https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp',
    iconAlt: 'Pepapp icon',
    title: 'Pepapp',
    subtitle: 'Здоровье и фитнес',
    result: 'Окупаемость – 400%',
    description: 'Как сделать Adapty бесплатным с помощью Refund Saver',
    link: '/case-studies/pepapp/',
  },
  {
    id: 'fotorama',
    icon: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
    iconAlt: 'Fotorama',
    title: 'Fotorama',
    subtitle: 'Фото и Видео',
    result: '-40% возвратов',
    description: 'Как снизить уровень возвратов с помощью Adapty',
    link: '/case-studies/fotorama/',
  },
]

/**
 * Case studies section - Vercel style
 * @component
 */
export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  className,
}) => {
  return (
    <section className={cn('py-20 md:py-28 bg-secondary', className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">Истории успеха</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Реальные истории роста{' '}
            <span className="text-gradient">наших клиентов</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.a
              key={study.id}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col vercel-card hover:border-black p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={study.icon}
                  alt={study.iconAlt}
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {study.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-2xl font-bold text-gradient mb-3">
                {study.result}
              </div>
              <p className="text-muted-foreground mb-4 flex-1">
                {study.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                Читать кейс
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://adapty.io/ru/case-studies/"
            className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть все кейсы
            <svg
              className="fill-current"
              fill="none"
              height="12"
              viewBox="0 0 8 12"
              width="8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
