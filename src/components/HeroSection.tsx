import React from 'react'
import { motion } from 'framer-motion'
import { PromotionalBanner } from './PromotionalBanner'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  /** Optional CSS classes */
  className?: string
}

/**
 * Hero section component for the main landing page
 * Displays promotional banner, heading, description, signup form, and demo button
 * @component
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.location.href = `https://app.adapty.io/registration-by-email/?email=${encodeURIComponent(
        email
      )}`
    }
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-background min-h-screen flex items-center',
        className
      )}
    >
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8 order-1 lg:order-1 items-center lg:items-start w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Promotional Banner */}
            <div className="flex justify-center lg:justify-start w-full">
              <PromotionalBanner
                label="Гайд"
                title="Как вырасти до $100K | Скачать"
                href="https://adapty.io/ru/ebooks/100k-app-playbook/"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gradient-anim text-center lg:text-left w-full">
              Платформа для роста мобильных приложений
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-center lg:text-left w-full">
              Сэкономьте месяцы на внедрении подписок и удвойте доход от
              приложения благодаря эффективному управлению пейволлами.
            </p>

            {/* Action Buttons */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-stretch w-full md:w-auto"
            >
              <Input
                type="email"
                placeholder="Email адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-auto md:min-w-[280px]"
                required
              />
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-start w-full md:w-auto">
                <Button
                  type="submit"
                  size="default"
                  className="w-full md:w-auto"
                >
                  Начать
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  className="w-full md:w-auto"
                  onClick={() =>
                    (window.location.href =
                      'https://adapty.io/ru/schedule-demo/')
                  }
                >
                  Запись на демо
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[900px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Overview Dashboard - Background */}
              <div className="absolute top-0 right-0 w-[85%] md:w-[75%] h-full">
                <div className="relative w-full h-full bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
                  <img
                    src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                    alt="Adapty Overview"
                    className="w-full h-full object-cover object-left-top"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Phone Mockup - Foreground */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] md:w-[40%] z-10">
                <img
                  src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
                  alt="Adapty Paywall Demo Preview"
                  className="w-full h-auto filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Background Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-4 md:top-20 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  )
}
