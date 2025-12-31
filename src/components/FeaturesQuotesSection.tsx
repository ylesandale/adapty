'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeaturesQuotesSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface Quote {
  logo: string
  logoAlt: string
  logoWidth?: number
  logoHeight?: number
  appName?: string
  appCategory?: string
  message: string
  authorAvatar: string
  authorName: string
  authorPosition: string
  isLogoType?: boolean // true for horizontal logos (like Smartist, Bickster), false for app icons
}

interface Feature {
  id: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
  imageAlt: string
  quote: Quote
  reverse?: boolean
  isExternal?: boolean
}

const features: Feature[] = [
  {
    id: 'paywall-ab-testing',
    title: 'Тестируйте пейволлы без релизов приложения',
    description:
      'Управляйте пейволлами, таргетируйте их, локализуйте и персонализируйте не выходя из браузера.',
    buttonText: 'Больше про A/B-тесты',
    buttonLink: 'https://adapty.io/ru/paywall-ab-testing/',
    image:
      'https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp',
    imageAlt: 'Paywall A/B testing',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png',
      logoAlt: 'Logo Smartist Black',
      logoWidth: 321,
      logoHeight: 82,
      message:
        '«Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения».',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp',
      authorName: 'Ильгар Тали',
      authorPosition: 'Основатель и директор по позиционированию',
      isLogoType: true,
    },
    reverse: false,
  },
  {
    id: 'refund-saver',
    title: 'Сократите ставку возврата на 40%',
    description:
      'Перестаньте терять доход из-за возвратов – Adapty автоматически делится данными о действиях пользователей с Apple для запросов на возврат и уменьшает их.',
    buttonText: 'Настройка Refund Saver',
    buttonLink: 'https://adapty.io/ru/refund-saver/',
    image:
      'https://adapty.io/assets/uploads/2025/05/refund-rate@2x-1024x768.webp',
    imageAlt: 'Refund Rate',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
      logoAlt: 'Fotorama',
      logoWidth: 460,
      logoHeight: 460,
      appName: 'Fotorama',
      appCategory: 'Фото и видео',
      message:
        '"Я никогда не думала, что возврат денег может иметь такое значение. Мы просто щелкнули выключателем, настроили его, и вдруг нам показалось, что мы перестали позволять деньгам ускользать".',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp',
      authorName: 'Берк Чагатай Албайрак',
      authorPosition: 'Старший менеджер по продуктам',
      isLogoType: false,
    },
    reverse: true,
  },
  {
    id: 'ltv-analytics',
    title: 'Смотрите показатели подписок в любой момент',
    description:
      'Следите за экономикой приложения в реальном времени, используя готовую систему аналитики с более чем 20 показателями.',
    buttonText: 'Больше об аналитике',
    buttonLink: 'https://adapty.io/ru/ltv-analytics/',
    image:
      'https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp',
    imageAlt: 'App Monetization Strategies',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg',
      logoAlt: 'Moonly app icon',
      appName: 'Moonly',
      appCategory: 'Лунный календарь',
      message:
        '«Аналитика Adapty предоставляет неоценимые сведения об успешности нашего приложения. Благодаря подробным показателям дохода, оттока и ARPU, мы принимаем обоснованные решения для оптимизации нашей финансовой стратегии.»',
      authorAvatar: 'https://adapty.io/assets/uploads/2024/02/Nikolay.png',
      authorName: 'Николай Чеботарев',
      authorPosition: 'Руководитель UA в Moonly.app',
      isLogoType: false,
    },
    reverse: false,
  },
  {
    id: 'paywall-builder',
    title: 'Конструктор пейволлов',
    description:
      'Создавайте красивые нативные пейволлы для iOS, Android, Flutter и React Native без единой строчки кода.',
    buttonText: 'Больше о создании пейволлов',
    buttonLink: 'https://adapty.io/ru/paywall-builder/',
    image:
      'https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp',
    imageAlt: 'No Code Paywall Builder',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2024/02/app-icon-cat.png',
      logoAlt: 'App Icon Cat',
      logoWidth: 96,
      logoHeight: 97,
      appName: 'Moodworks Inc',
      appCategory: 'Здоровье',
      message:
        '«Конструктор пейволлов и инструменты A/B-тестирования Adapty в сочетании друг с другом — это революция для всех, кто пытается проводить много тестов и находить быстрые выигрышные решения.»',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp',
      authorName: 'Майк МакСуини',
      authorPosition: 'Директор по продукту',
      isLogoType: false,
    },
    reverse: true,
  },
  {
    id: 'funnelfox',
    title: 'Быстро увеличьте доход от приложения с помощью веб-воронок',
    description:
      'Создавайте и запускайте веб-воронки для приложений, интегрируйте платежи, оптимизируйте с помощью A/B-тестирования и развивайтесь по всему миру — всё в одной платформе, без необходимости в программировании.',
    buttonText: 'Познакомьтесь с FunnelFox',
    buttonLink: 'https://funnelfox.com/',
    image:
      'https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x-768x631.webp',
    imageAlt: 'FunnelFox',
    quote: {
      logo: '',
      logoAlt: '',
      message: '',
      authorAvatar: '',
      authorName: '',
      authorPosition: '',
    },
    reverse: false,
    isExternal: true,
  },
]

/**
 * Features quotes section - Vercel style
 * @component
 */
export const FeaturesQuotesSection: React.FC<FeaturesQuotesSectionProps> = ({
  className,
}) => {
  return (
    <section className={cn('py-20 md:py-28 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={cn(
                'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
                feature.reverse && 'lg:grid-flow-dense'
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Content */}
              <div
                className={cn('space-y-6', feature.reverse && 'lg:col-start-2')}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
                <a
                  href={feature.buttonLink}
                  target={feature.isExternal ? '_blank' : undefined}
                  rel={feature.isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all font-medium"
                >
                  {feature.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Quote Block */}
                {feature.quote.message && (
                  <div className="mt-8 pt-8 border-t border-border space-y-4">
                    {/* Quote mark */}
                    <img
                      src="https://adapty.io/assets/uploads/2023/12/quotes.svg"
                      alt=""
                      className="w-8 h-8 opacity-30"
                    />

                    {/* App/Company Logo */}
                    {feature.quote.isLogoType ? (
                      <img
                        src={feature.quote.logo}
                        alt={feature.quote.logoAlt}
                        className="h-6 object-contain object-left"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center gap-3">
                        <img
                          src={feature.quote.logo}
                          alt={feature.quote.logoAlt}
                          className="w-12 h-12 object-contain rounded-lg"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-semibold">
                            {feature.quote.appName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {feature.quote.appCategory}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quote message */}
                    <p className="text-base text-muted-foreground italic">
                      {feature.quote.message}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2">
                      <img
                        src={feature.quote.authorAvatar}
                        alt={feature.quote.authorName}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-sm">
                          {feature.quote.authorName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {feature.quote.authorPosition}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Media */}
              <div
                className={cn(
                  'relative',
                  feature.reverse && 'lg:col-start-1 lg:row-start-1'
                )}
              >
                <div
                  className={cn(
                    'relative rounded-2xl overflow-hidden border border-border',
                    feature.id === 'paywall-ab-testing'
                      ? 'bg-green-700'
                      : 'bg-secondary'
                  )}
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Integrations Section - Special case with grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:grid-flow-dense"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Content */}
            <div className="space-y-6 lg:col-start-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Синхронизируйте данные о покупках с другими сервисами
              </h3>
              <p className="text-lg text-muted-foreground">
                Отправляйте подписочные события в сервисы аналитики и атрибуции.
              </p>
              <a
                href="https://adapty.io/ru/integrations/"
                className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all font-medium"
              >
                Больше об интеграциях
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Quote Block */}
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                {/* Quote mark */}
                <img
                  src="https://adapty.io/assets/uploads/2023/12/quotes.svg"
                  alt=""
                  className="w-8 h-8 opacity-30"
                />

                {/* Company Logo */}
                <img
                  src="https://adapty.io/assets/uploads/2023/12/logo-bickster.png"
                  alt="Bickster"
                  className="h-8 object-contain object-left"
                  loading="lazy"
                />

                {/* Quote message */}
                <p className="text-base text-muted-foreground italic">
                  «У них есть отличный внешний API, который позволяет легко
                  передавать связанные события в другие инструменты аналитики,
                  такие как Amplitude и Mixpanel.»
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src="https://adapty.io/assets/uploads/2024/01/avatar-chris-bick.webp"
                    alt="Avatar: Chris Bick"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm">Крис Бик</div>
                    <div className="text-xs text-muted-foreground">
                      Основатель и генеральный директор
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Logos Grid */}
            <div className="relative lg:col-start-1 lg:row-start-1">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-secondary p-8">
                <div className="space-y-6">
                  <div className="text-center text-sm font-medium text-muted-foreground">
                    События покупок в приложении
                  </div>
                  <div className="flex justify-center">
                    <svg
                      className="stroke-current text-muted-foreground"
                      fill="none"
                      height="40"
                      viewBox="0 0 14 40"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.650146 25.2768L7.01172 38L13.348 25.3274" />
                      <path d="M7 38V2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://adapty.io/assets/uploads/2023/12/adapty-logo-white.svg"
                      alt="Adapty"
                      className="h-8 invert"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-center">
                    <svg
                      className="stroke-current text-muted-foreground"
                      fill="none"
                      height="40"
                      viewBox="0 0 14 40"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.650146 25.2768L7.01172 38L13.348 25.3274" />
                      <path d="M7 38V2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      {
                        name: 'Amplitude',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-amplitude.svg',
                      },
                      {
                        name: 'AppFlyer',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-appsflyer.svg',
                      },
                      {
                        name: 'Firebase',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-firebase-and-ga.svg',
                      },
                      {
                        name: 'Mixpanel',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-mixpanel.svg',
                      },
                      {
                        name: 'Adjust',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-adjust.svg',
                      },
                      {
                        name: 'Braze',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-braze.svg',
                      },
                      {
                        name: 'Branch',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-branch.svg',
                      },
                      {
                        name: 'Slack',
                        logo: 'https://adapty.io/assets/uploads/2024/02/logo-slack.svg',
                      },
                    ].map((integration) => (
                      <div
                        key={integration.name}
                        className="flex items-center justify-center p-3 bg-white rounded-lg"
                      >
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="max-w-full max-h-8 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
