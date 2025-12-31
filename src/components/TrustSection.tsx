'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Container, AnimatedElement } from './common';

interface TrustSectionProps {
  /** Optional CSS classes */
  className?: string;
}

const trustedApps = [
  {
    name: 'Feeld',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg',
    alt: 'Feeld',
  },
  {
    name: 'Bumble',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg',
    alt: 'Bumble',
  },
  {
    name: 'Weewoo',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/weewoo.svg',
    alt: 'Weewoo',
  },
  {
    name: 'AppNation',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp',
    alt: 'AppNation',
  },
  {
    name: 'Almus',
    logoUrl: 'https://adapty.io/assets/uploads/2025/02/almus.svg',
    alt: 'Almus',
  },
  {
    name: 'Impala Studios',
    logoUrl:
      'https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg',
    alt: 'Impala Studios',
  },
  {
    name: 'HUBX',
    logoUrl: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg',
    alt: 'HUBX',
  },
];

/**
 * Trust section component - Vercel style
 * @component
 */
export const TrustSection: React.FC<TrustSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-white border-t border-border', className)}>
      <Container>
        <AnimatedElement className="text-center text-sm md:text-base text-muted-foreground mb-10">
          Доверяют более <strong className="font-semibold text-foreground">15,000+ приложений</strong> и
          крупнейших мировых издателей
        </AnimatedElement>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-10 items-center justify-items-center">
          {trustedApps.map((logo, index) => (
            <AnimatedElement
              key={logo.name}
              className="flex items-center justify-center w-full h-12 opacity-50 hover:opacity-100 transition-opacity duration-200"
              delay={index * 0.05}
            >
              <img
                src={logo.logoUrl}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale"
                loading="lazy"
                draggable="false"
              />
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </section>
  );
};
