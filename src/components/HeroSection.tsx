'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  /** Optional CSS classes */
  className?: string;
}

/**
 * Hero section component - Vercel style redesign
 * @component
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `https://app.adapty.io/registration-by-email/?email=${encodeURIComponent(
        email
      )}`;
    }
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28',
        className
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg pointer-events-none" />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://adapty.io/ru/ebooks/100k-app-playbook/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white hover:bg-secondary transition-all duration-200 group"
            >
              <span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded-full">
                Гайд
              </span>
              <span className="text-sm text-foreground">
                Как вырасти до $100K
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Платформа для{' '}
            <span className="text-gradient">роста мобильных</span> приложений
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Сэкономьте месяцы на внедрении подписок и удвойте доход от
            приложения благодаря эффективному управлению пейволлами.
          </motion.p>

          {/* CTA Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Input
              type="email"
              placeholder="Email адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" size="default" className="sm:w-auto">
              Начать
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.form>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              type="button"
              variant="secondary"
              size="default"
              onClick={() =>
                (window.location.href = 'https://adapty.io/ru/schedule-demo/')
              }
            >
              Запись на демо
            </Button>
            <span className="text-sm text-muted-foreground">
              Бесплатно до $10k MRR
            </span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full max-w-6xl mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-vercel-lg bg-white">
              <img
                src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                alt="Adapty Overview"
                className="w-full h-auto"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Floating Phone Mockup */}
            <div className="absolute -left-4 md:-left-8 bottom-8 md:bottom-16 w-32 md:w-48 lg:w-56 z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-vercel-lg">
                <img
                  src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
                  alt="Adapty Paywall Demo"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
