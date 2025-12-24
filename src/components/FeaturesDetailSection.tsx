import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface FeaturesDetailSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface Quote {
  logo: string
  logoAlt: string
  message: string
  authorAvatar: string
  authorName: string
  authorPosition: string
  appName?: string
  appDescription?: string
  appIcon?: string
}

const integrationLogos = [
  {
    name: 'Airbridge',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-airbridge.svg',
    url: 'https://adapty.io/ru/integrations/airbridge/',
  },
  {
    name: 'Adjust',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-adjust.svg',
    url: 'https://adapty.io/ru/integrations/adjust/',
  },
  {
    name: 'Amazon S3',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-amazon-s3.svg',
    url: 'https://adapty.io/ru/integrations/amazon-s3/',
  },
  {
    name: 'Amplitude',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-amplitude.svg',
    url: 'https://adapty.io/ru/integrations/amplitude/',
  },
  {
    name: 'Apple Ads',
    logo: 'https://adapty.io/assets/uploads/2024/04/icon-apple-ads-text.svg',
    url: 'https://adapty.io/ru/integrations/apple-search-ads/',
  },
  {
    name: 'AppFlyer',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-appsflyer.svg',
    url: 'https://adapty.io/ru/integrations/appsflyer/',
  },
  {
    name: 'AppMetrica',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-appmetrica.svg',
    url: 'https://adapty.io/ru/integrations/appmetrica/',
  },
  {
    name: 'Branch',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-branch.svg',
    url: 'https://adapty.io/ru/integrations/branch/',
  },
  {
    name: 'Braze',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-braze.svg',
    url: 'https://adapty.io/ru/integrations/braze/',
  },
  {
    name: 'Facebook',
    logo: 'https://adapty.io/assets/uploads/2024/04/logo-facebook-blue-text.svg',
    url: 'https://adapty.io/ru/integrations/facebook-ads/',
  },
  {
    name: 'Firebase',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-firebase-and-ga.svg',
    url: 'https://adapty.io/ru/integrations/google-analytics-firebase/',
  },
  {
    name: 'Google Cloud',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-google-cloud-storage.svg',
    url: 'https://adapty.io/ru/integrations/google-cloud-storage/',
  },
  {
    name: 'Mixpanel',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-mixpanel.svg',
    url: 'https://adapty.io/ru/integrations/mixpanel/',
  },
  {
    name: 'OneSignal',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-onesignal.svg',
    url: 'https://adapty.io/ru/integrations/onesignal/',
  },
  {
    name: 'PostHog',
    logo: 'https://adapty.io/assets/uploads/2025/02/posthog-logo-colorfull.svg',
    url: 'https://adapty.io/ru/integrations/posthog/',
  },
  {
    name: 'Stripe',
    logo: 'https://adapty.io/assets/uploads/2024/04/icon-stripe-logo.svg',
    url: 'https://adapty.io/ru/integrations/stripe/',
  },
]

interface Feature {
  id: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
  imageAlt: string
  reverse?: boolean
  quote: Quote
  imageBgColor?: string
}

const features: Feature[] = [
  {
    id: 'ab-testing',
    title: 'Тестируйте пейволлы без релизов приложения',
    description:
      'Управляйте пейволлами, таргетируйте их, локализуйте и персонализуйте не выходя из браузера.',
    buttonText: 'Больше про A/B-тесты',
    buttonLink: 'https://adapty.io/ru/paywall-ab-testing/',
    image:
      'https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp',
    imageAlt: 'Paywall A/B testing',
    reverse: false,
    imageBgColor: 'bg-[#4A6B5B]',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png',
      logoAlt: 'Smartist',
      message:
        '«Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения».',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp',
      authorName: 'Ильгар Тали',
      authorPosition: 'Основатель и директор по позиционированию',
    },
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
    reverse: true,
    imageBgColor: 'bg-[#C8DDD3]',
    quote: {
      logo: '',
      logoAlt: 'Fotorama',
      message:
        'Я никогда не думала, что возврат денег может иметь такое значение. Мы просто щелкнули выключателем, настроили его, и вдруг нам показалось, что мы перестали позволять деньгам ускользать.',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp',
      authorName: 'Берк Чагатай Албайрак',
      authorPosition: 'Старший менеджер по продуктам',
      appIcon:
        'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
      appName: 'Fotorama',
      appDescription: 'Фото и видео',
    },
  },
  {
    id: 'analytics',
    title: 'Смотрите показатели подписок в любой момент',
    description:
      'Следите за экономикой приложения в реальном времени, используя готовую систему аналитики с более чем 20 показателями.',
    buttonText: 'Больше об аналитике',
    buttonLink: 'https://adapty.io/ru/ltv-analytics/',
    image:
      'https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp',
    imageAlt: 'App Monetization Strategies',
    reverse: false,
    imageBgColor: 'bg-[#BFA8D1]',
    quote: {
      logo: '',
      logoAlt: 'Moonly',
      message:
        '«Аналитика Adapty предоставляет неоценимые сведения об успешности нашего приложения. Благодаря подробным показателям дохода, оттока и ARPU, мы принимаем обоснованные решения для оптимизации нашей финансовой стратегии.»',
      authorAvatar: 'https://adapty.io/assets/uploads/2024/02/Nikolay.png',
      authorName: 'Николай Чеботарев',
      authorPosition: 'Руководитель UA в Moonly.app',
      appIcon: 'https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg',
      appName: 'Moonly',
      appDescription: 'Лунный календарь',
    },
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
    reverse: true,
    imageBgColor: 'bg-[#FECEC8]',
    quote: {
      logo: '',
      logoAlt: 'Moodworks Inc',
      message:
        '«Конструктор пейволлов и инструменты A/B-тестирования Adapty в сочетании друг с другом — это революция для всех, кто пытается проводить много тестов и находить быстрые выигрышные решения.»',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp',
      authorName: 'Майк МакСуини',
      authorPosition: 'Директор по продукту',
      appIcon: 'https://adapty.io/assets/uploads/2024/02/app-icon-cat.png',
      appName: 'Moodworks Inc',
      appDescription: 'Здоровье',
    },
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
    reverse: false,
    imageBgColor: 'bg-[#F0F0F0]',
    quote: {
      logo: '',
      logoAlt: '',
      message: '',
      authorAvatar: '',
      authorName: '',
      authorPosition: '',
    },
  },
  {
    id: 'integrations',
    title: 'Синхронизируйте данные о покупках с другими сервисами',
    description:
      'Отправляйте подписочные события в сервисы аналитики и атрибуции.',
    buttonText: 'Больше об интеграциях',
    buttonLink: 'https://adapty.io/ru/integrations/',
    image: '',
    imageAlt: 'Integrations',
    reverse: true,
    imageBgColor: 'bg-[#2C5F6F]',
    quote: {
      logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png',
      logoAlt: 'Bickster',
      message:
        '«У них есть отличный внешний API, который позволяет легко передавать связанные события в другие инструменты аналитики, такие как Amplitude и Mixpanel.»',
      authorAvatar:
        'https://adapty.io/assets/uploads/2024/01/avatar-chris-bick.webp',
      authorName: 'Крис Бик',
      authorPosition: 'Основатель и генеральный директор',
    },
  },
]

/**
 * Detailed features section with alternating layout and testimonials
 * @component
 */
export const FeaturesDetailSection: React.FC<FeaturesDetailSectionProps> = ({
  className,
}) => {
  return (
    <section
      className={cn('relative bg-secondary py-16 md:py-20 lg:py-24', className)}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col gap-20 md:gap-24 lg:gap-32">
          {features.map((feature, index) => (
            <React.Fragment key={feature.id}>
              <motion.div
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 items-center',
                  feature.reverse && 'lg:grid-flow-dense'
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
              >
                {/* Content Column */}
                <div
                  className={cn(
                    'flex flex-col gap-6',
                    feature.reverse && 'lg:col-start-2'
                  )}
                >
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <div>
                    <Button
                      variant="link"
                      className="group/btn px-0 text-primary hover:text-primary/80 transition-all duration-300"
                      onClick={() =>
                        (window.location.href = feature.buttonLink)
                      }
                    >
                      <span className="relative">
                        {feature.buttonText}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/btn:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>

                  {/* Divider */}
                  {feature.quote.message && (
                    <div className="h-px bg-border my-4" />
                  )}

                  {/* Quote */}
                  {feature.quote.message && (
                    <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-border/10 shadow-md">
                      <div className="text-4xl mb-4 text-muted-foreground">
                        "
                      </div>

                      {/* Logo or App Info */}
                      {feature.quote.logo ? (
                        <img
                          src={feature.quote.logo}
                          alt={feature.quote.logoAlt}
                          className="h-8 md:h-10 mb-6 object-contain object-left"
                          loading="lazy"
                        />
                      ) : feature.quote.appIcon ? (
                        <div className="flex items-center gap-3 mb-6">
                          <img
                            src={feature.quote.appIcon}
                            alt={feature.quote.appName}
                            className="w-12 h-12 rounded-xl"
                            loading="lazy"
                          />
                          <div>
                            <div className="font-semibold text-foreground">
                              {feature.quote.appName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {feature.quote.appDescription}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {/* Quote Message */}
                      <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                        {feature.quote.message}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={feature.quote.authorAvatar}
                          alt={feature.quote.authorName}
                          className="w-12 h-12 rounded-full"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-semibold text-foreground">
                            {feature.quote.authorName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {feature.quote.authorPosition}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Column */}
                <div
                  className={cn(
                    'relative',
                    feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''
                  )}
                >
                  {/* Special layout for integrations */}
                  {feature.id === 'integrations' ? (
                    <div
                      className={cn(
                        'rounded-3xl p-8 md:p-12',
                        feature.imageBgColor || 'bg-[#1a1a1a]'
                      )}
                    >
                      <div className="text-center mb-8">
                        <p className="inline-block text-white text-sm mb-4 px-4 py-2 border-2 border-white/30 rounded-full">
                          События покупок в приложении
                        </p>
                        <svg
                          className="w-5 h-5 mx-auto mb-4 text-white"
                          fill="none"
                          viewBox="0 0 14 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.650146 12.6384L7.01172 19L13.348 12.6637"
                            stroke="currentColor"
                          />
                          <path
                            d="M7 19V1"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                        </svg>
                        <img
                          src="https://adapty.io/assets/uploads/2023/12/adapty-logo-white.svg"
                          alt="Adapty"
                          className="h-8 mx-auto mb-4"
                        />
                        <svg
                          className="w-5 h-5 mx-auto mb-8 text-white"
                          fill="none"
                          viewBox="0 0 14 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.650146 12.6384L7.01172 19L13.348 12.6637"
                            stroke="currentColor"
                          />
                          <path
                            d="M7 19V1"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                        {integrationLogos.map((integration, idx) => (
                          <a
                            key={idx}
                            href={integration.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read more about integration with ${integration.name}`}
                            className="group flex items-center justify-center px-2 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            <img
                              src={integration.logo}
                              alt={integration.name}
                              className="w-full h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : feature.image ? (
                    <div
                      className={cn(
                        'rounded-3xl p-8 md:p-12 relative shadow-2xl',
                        feature.imageBgColor || 'bg-muted'
                      )}
                    >
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              </motion.div>

              {/* Mobile Separator */}
              {index < features.length - 1 && (
                <motion.div
                  className="h-px bg-border/30 my-10 md:hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-4 md:top-20 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-secondary/50 rounded-full blur-2xl -z-10" />
    </section>
  )
}
