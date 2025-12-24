import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section, SectionTitle } from '@/components/common'
import { DecorativeBlurAlt } from '@/constants'
import { cn } from '@/lib/utils'

interface TestimonialsSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  company: string
  logo: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '«Миграция с RevenueCat была не легким решением для нас. Мы выбрали Adapty, потому что верим, что они - лучший партнер для нашего роста. Оглядываясь назад, это было правильное решение. Несмотря на некоторые сложности, команда Adapty всегда была рядом, чтобы помочь нам во время миграции и после, и их поддержка на высшем уровне. Я рекомендую Adapty как надежного партнера.»',
    author: 'Джем Ортабаш',
    position: 'Соучредитель и генеральный директор, HubX',
    company: 'HubX',
    logo: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp',
  },
  {
    id: 2,
    quote:
      '«Мы работаем с Adapty с 2021 года, и я не мог бы быть более счастливым от этого. Мы пробовали другие платформы управления подписками в прошлом, так что могу сравнить. Adapty представила множество функций на протяжении лет и постоянно помогала нам расти. У них лучшие аналитические инструменты на рынке и все интеграции, о которых вы можете подумать. Если вы хотите увеличить доход вашего приложения, я определенно рекомендую Adapty.»',
    author: 'Крис Бик',
    position: 'Основатель и генеральный директор, Bickster',
    company: 'Bickster',
    logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp',
  },
  {
    id: 3,
    quote:
      '«Мы выбрали Adapty за мощные возможности A/B тестирования пейволлов, которые помогли нам эффективно оптимизировать нашу стратегию монетизации. Удобная платформа, гибкое ценообразование и исключительная поддержка клиентов делают Adapty превосходным выбором по сравнению с конкурентами.»',
    author: 'Ялчын Оздемир',
    position: 'Основатель и генеральный директор, AppNation',
    company: 'AppNation',
    logo: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp',
    avatar: 'https://adapty.io/assets/uploads/2024/02/Asman.webp',
  },
  {
    id: 4,
    quote:
      '«Платформа Adapty позволяет неразработчикам легко создавать и управлять A/B тестами, пейволлами, ассортиментом продуктов и ценовой структурой. У них есть отличный внешний API, который облегчает передачу связанных событий в другие аналитические инструменты, такие как Amplitude и Mixpanel.»',
    author: 'Кайл Смит',
    position: 'Руководитель отдела данных в Smitten Dating',
    company: 'Smitten',
    logo: 'https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp',
    avatar: 'https://adapty.io/assets/uploads/2024/02/Kyle2.webp',
  },
  {
    id: 5,
    quote:
      '«Мы протестировали более трехсот пейволлов за четыре месяца. Adapty позволяет тестировать практически любой элемент пейволла, и мы воспользовались этим. Мы протестировали всё: продукты, текст заголовка, кнопки CTA, изображения, видео и т.д. Благодаря A/B тестированию Adapty, мы смогли удвоить наш месячный доход. Я не был уверен, что один инструмент может оказать такое влияние, но я стал свидетелем этого сам.»',
    author: 'Рой Мулия',
    position: 'Основатель и генеральный директор, SocialKit',
    company: 'SocialKit',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-social-white.svg',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp',
  },
]

/**
 * Testimonials carousel section
 * @component
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
  }

  const paginate = (newDirection: number) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    )
  }

  // Auto-advance every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 7500)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <Section className={className}>
      <SectionTitle className="px-4 sm:px-6 md:px-0">
        От Indie до Enterprise – <br className="sm:hidden" />
        Adapty помогает <br className="hidden md:block" />
        увеличить доход приложениям <br className="hidden md:block" />
        любого уровня
      </SectionTitle>

      {/* Divider */}
      <div className="h-px bg-border/30 mb-12 sm:mb-14 md:mb-16 lg:mb-20" />

      {/* Carousel Container */}
      <div className="relative">
        {/* Testimonial Slides */}
        <div className="relative min-h-[700px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[500px] xl:min-h-[450px] flex items-center py-6 md:py-8">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
              }}
              className="absolute w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[400px_1fr] gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
                {/* Avatar - Left Side */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                  {/* Quote Text */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>

                  {/* Author Name */}
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>

                  {/* Position */}
                  <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>

                  {/* Company Logo */}
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={testimonials[currentIndex].logo}
                      alt={testimonials[currentIndex].company}
                      className="h-8 sm:h-10 md:h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          {/* Previous Button */}
          <button
            onClick={() => paginate(-1)}
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white border-2 border-border/20 hover:border-accent hover:text-accent transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-1.5 sm:h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-accent w-6 sm:w-8'
                    : 'bg-border w-1.5 sm:w-2 hover:bg-accent/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white border-2 border-border/20 hover:border-accent hover:text-accent transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <DecorativeBlurAlt />
    </Section>
  )
}
