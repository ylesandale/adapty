'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container, AnimatedElement } from './common';

interface EnterpriseSectionProps {
  /** Optional CSS classes */
  className?: string;
}

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2, GDPR, и полное соответствие стандартам безопасности',
  },
  {
    icon: Zap,
    title: 'Высокая производительность',
    description: '99.99% uptime с глобальной CDN инфраструктурой',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Персональный менеджер и приоритетная поддержка 24/7',
  },
];

/**
 * Enterprise section - Vercel style
 * @component
 */
export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
  className,
}) => {
  return (
    <section className={cn('py-20 md:py-28 bg-white', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <AnimatedElement className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary w-fit">
              <span className="text-xs font-medium">Enterprise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Масштабируйте без <span className="text-gradient">компромиссов</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Решение корпоративного уровня для компаний, которые серьезно
              относятся к росту и безопасности.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() =>
                  (window.location.href = 'https://adapty.io/ru/schedule-demo/')
                }
              >
                Связаться с отделом продаж
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href = 'https://adapty.io/ru/enterprise/')
                }
              >
                Узнать больше
              </Button>
            </div>
          </AnimatedElement>

          {/* Right - Features */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="vercel-card p-6 hover:border-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
