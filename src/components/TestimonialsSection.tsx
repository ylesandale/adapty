'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
      'Миграция с RevenueCat была не легким решением для нас. Мы выбрали Adapty, потому что верим, что они - лучший партнер для нашего роста. Оглядываясь назад, это было правильное решение. Несмотря на некоторые сложности, команда Adapty всегда была рядом, чтобы помочь нам во время миграции и после, и их поддержка на высшем уровне. Я рекомендую Adapty как надежного партнера.',
    author: 'Джем Ортабаш',
    position: 'Соучредитель и генеральный директор, HubX',
    company: 'HubX',
    logo: 'https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp',
  },
  {
    id: 2,
    quote:
      'Мы работаем с Adapty с 2021 года, и я не мог бы быть более счастливым от этого. Мы пробовали другие платформы управления подписками в прошлом, так что могу сравнить. Adapty представила множество функций на протяжении лет и постоянно помогала нам расти. У них лучшие аналитические инструменты на рынке и все интеграции, о которых вы можете подумать. Если вы хотите увеличить доход вашего приложения, я определенно рекомендую Adapty.',
    author: 'Крис Бик',
    position: 'Основатель и генеральный директор, Bickster',
    company: 'Bickster',
    logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp',
  },
  {
    id: 3,
    quote:
      'Мы выбрали Adapty за мощные возможности A/B тестирования пейволлов, которые помогли нам эффективно оптимизировать нашу стратегию монетизации. Удобная платформа, гибкое ценообразование и исключительная поддержка клиентов делают Adapty превосходным выбором по сравнению с конкурентами.',
    author: 'Ялчын Оздемир',
    position: 'Основатель и генеральный директор, AppNation',
    company: 'AppNation',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-AppNation-white.png',
    avatar: 'https://adapty.io/assets/uploads/2024/02/Asman.webp',
  },
  {
    id: 4,
    quote:
      'Платформа Adapty позволяет неразработчикам легко создавать и управлять A/B тестами, пейволлами, ассортиментом продуктов и ценовой структурой. У них есть отличный внешний API, который облегчает передачу связанных событий в другие аналитические инструменты, такие как Amplitude и Mixpanel.',
    author: 'Кайл Смит',
    position: 'Руководитель отдела данных в Smitten Dating',
    company: 'Smitten',
    logo: 'https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp',
    avatar: 'https://adapty.io/assets/uploads/2024/02/Kyle2.webp',
  },
  {
    id: 5,
    quote:
      'Мы протестировали более трехсот пейволлов за четыре месяца. Adapty позволяет тестировать практически любой элемент пейволла, и мы воспользовались этим. Мы протестировали всё: продукты, текст заголовка, кнопки CTA, изображения, видео и т.д. Благодаря A/B тестированию Adapty, мы смогли удвоить наш месячный доход. Я не был уверен, что один инструмент может оказать такое влияние, но я стал свидетелем этого сам.',
    author: 'Рой Мулия',
    position: 'Основатель и генеральный директор, SocialKit',
    company: 'SocialKit',
    logo: 'https://adapty.io/assets/uploads/2024/02/logo-social-white.svg',
    avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp',
  },
]

/**
 * Testimonials section - Vercel style
 * @component
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={cn('py-20 md:py-28 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          От <span className="text-gradient">Indie до Enterprise</span> – Adapty
          помогает увеличить доход приложениям любого уровня
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="vercel-card p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Avatar */}
              <div className="flex items-center justify-center mb-8">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-center text-foreground mb-8 leading-relaxed">
                «{testimonials[currentIndex].quote}»
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].logo}
                  alt={testimonials[currentIndex].company}
                  className="h-8 md:h-10 object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg border border-border bg-white hover:bg-secondary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    index === currentIndex
                      ? 'bg-black w-8'
                      : 'bg-border hover:bg-black/50'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg border border-border bg-white hover:bg-secondary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
