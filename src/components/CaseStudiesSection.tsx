import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
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
  rating: string
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
    rating: '+50% общей выручки',
    description: 'Как ценовые тесты раскрыли потенциал',
    link: 'https://adapty.io/case-studies/productivity-app-and-autopilot/',
  },
  {
    id: 'text-on-pic',
    icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp',
    iconAlt: 'Text on Pic',
    title: 'Text on Pic',
    subtitle: 'Фото и видео',
    rating: 'Рост MRR более 30%',
    description: 'Как увеличить доход с помощью правильных тестов',
    link: 'https://adapty.io/case-studies/photo-editing-app-and-autopilot/',
  },
  {
    id: 'trip-planning',
    icon: 'https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp',
    iconAlt: 'Trip planning',
    title: 'Trip planning',
    subtitle: 'Путешествия',
    rating: '+102% рост ARPU',
    description: 'Новая онбординг удвоила доход с пользователя',
    link: 'https://adapty.io/case-studies/travel-app/',
  },
  {
    id: 'going-merry',
    icon: 'https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp',
    iconAlt: 'Going Merry',
    title: 'Going Merry',
    subtitle: 'Издатель приложения',
    rating: 'Рост MRR в 5 раз',
    description:
      'Как масштабировать доход от подписок с помощью Paywall Builder',
    link: 'https://adapty.io/case-studies/going-merry/',
  },
  {
    id: 'shmoody',
    icon: 'https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp',
    iconAlt: 'Shmoody',
    title: 'Shmoody',
    subtitle: 'Ментальное здоровье',
    rating: 'ARR вырос с $0 до $2M',
    description: 'Как вырасти от бесплатного приложения до $2M ARR с Adapty',
    link: 'https://adapty.io/case-studies/shmoody/',
  },
  {
    id: 'lively',
    icon: 'https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png',
    iconAlt: 'Lively',
    title: 'Lively',
    subtitle: 'Здоровье и фитнес',
    rating: 'На 83% меньше возвратов',
    description: 'Сэкономлено 82% потенциально дохода',
    link: 'https://adapty.io/case-studies/lively/',
  },
  {
    id: 'glam-ai',
    icon: 'https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp',
    iconAlt: 'Glam AI',
    title: 'Glam AI',
    subtitle: 'Макияж и красота',
    rating: 'ROAS от Adapty – 108%',
    description: 'До 1.2 млн долларов в год за 3 месяца',
    link: 'https://adapty.io/case-studies/glam-ai/',
  },
  {
    id: 'pepapp',
    icon: 'https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp',
    iconAlt: 'Pepapp',
    title: 'Pepapp',
    subtitle: 'Здоровье и фитнес',
    rating: 'Окупаемость – 400%',
    description: 'Как сделать Adapty бесплатным с помощью Refund Saver',
    link: 'https://adapty.io/case-studies/pepapp/',
  },
  {
    id: 'fotorama',
    icon: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
    iconAlt: 'Fotorama',
    title: 'Fotorama',
    subtitle: 'Фото и Видео',
    rating: '-40% возвратов',
    description: 'Как снизить уровень возвратов с помощью Adapty',
    link: 'https://adapty.io/case-studies/fotorama/',
  },
]

/**
 * Case Studies section component
 * @component
 */
export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  className,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play for mobile slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        goToNext()
      }
    }, 5000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide])

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    )
    setTimeout(() => setIsAnimating(false), 400)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 400)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section
      className={cn(
        'relative bg-background py-16 md:py-20 lg:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Реальные истории роста наших клиентов
        </motion.h2>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {caseStudies.map((caseStudy) => (
            <motion.a
              key={caseStudy.id}
              href={caseStudy.link}
              aria-label={caseStudy.link}
              className="group flex flex-col bg-white border-2 border-border/10 rounded-[2rem] p-5 lg:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.15 }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
              animate={{ y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
              style={{ transition: 'all 0.15s ease-out' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={caseStudy.icon}
                    alt={caseStudy.iconAlt}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-2xl"
                    loading="eager"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base md:text-lg font-semibold text-foreground truncate">
                    {caseStudy.title}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground truncate">
                    {caseStudy.subtitle}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 md:mb-3">
                {caseStudy.rating}
              </div>

              {/* Description */}
              <div className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 flex-1">
                {caseStudy.description}
              </div>

              {/* Button */}
              <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                <span className="text-xs md:text-sm font-medium">
                  Подробнее
                </span>
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Slider (visible only on mobile) */}
        <div className="md:hidden mb-12 relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={cn(
                  'transition-opacity duration-400 ease-in-out',
                  index === currentSlide
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                )}
              >
                <a
                  href={caseStudy.link}
                  aria-label={caseStudy.link}
                  className="flex flex-col bg-white border-2 border-border/10 rounded-[2rem] p-6 shadow-md"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={caseStudy.icon}
                        alt={caseStudy.iconAlt}
                        className="w-12 h-12 object-contain rounded-2xl"
                        loading="eager"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold text-foreground">
                        {caseStudy.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="text-xl font-bold text-primary mb-3">
                    {caseStudy.rating}
                  </div>

                  {/* Description */}
                  <div className="text-base text-muted-foreground mb-4">
                    {caseStudy.description}
                  </div>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-sm font-medium">Подробнее</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentSlide
                    ? 'bg-primary w-6'
                    : 'bg-border hover:bg-primary/50'
                )}
              />
            ))}
          </div>
        </div>

        {/* View All Cases Button */}
        <div className="flex justify-center">
          <a
            href="https://adapty.io/case-studies/"
            className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300"
          >
            <span className="relative text-base md:text-lg font-medium">
              Открыть все кейсы
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-4 md:top-20 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-secondary/50 rounded-full blur-2xl -z-10" />
    </section>
  )
}
