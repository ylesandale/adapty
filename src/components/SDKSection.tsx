'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container, AnimatedElement } from './common';

interface SDKSectionProps {
  /** Optional CSS classes */
  className?: string;
}

interface SDKCard {
  id: string;
  name: string;
  nameDesktop?: string; // Для KMP - разные названия на desktop/mobile
  icon: string;
  url: string;
}

const sdkCards: SDKCard[] = [
  {
    id: 'swift',
    name: 'Swift SDK',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-swift-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/ios/',
  },
  {
    id: 'kotlin',
    name: 'Kotlin SDK',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-kotlin-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/android/',
  },
  {
    id: 'react-native',
    name: 'React Native SDK',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-react-native-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/react-native/',
  },
  {
    id: 'unity',
    name: 'Unity SDK',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-unity-white-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/unity/',
  },
  {
    id: 'flutter',
    name: 'Flutter SDK',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-flutter-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/flutter/',
  },
  {
    id: 'capacitor',
    name: 'Capacitor SDK',
    icon: 'https://adapty.io/assets/uploads/2025/10/capacitor-logo.svg',
    url: 'https://adapty.io/ru/sdk/capacitor/',
  },
  {
    id: 'kmp',
    name: 'KMP SDK',
    nameDesktop: 'Kotlin Multiplatform',
    icon: 'https://adapty.io/assets/uploads/2025/10/kmp-logo.svg',
    url: 'https://adapty.io/ru/sdk/kmp/',
  },
  {
    id: 'flutterflow',
    name: 'FlutterFlow',
    icon: 'https://adapty.io/assets/uploads/2024/09/icon-flutterflow-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/flutterflow/',
  },
  {
    id: 'web',
    name: 'Web API',
    icon: 'https://adapty.io/assets/uploads/2024/01/icon-web-64x64-1.svg',
    url: 'https://adapty.io/ru/sdk/web/',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: 'https://adapty.io/assets/uploads/2024/02/icon-stripe-64x64-1.svg',
    url: 'https://adapty.io/ru/integrations/stripe/',
  },
];

/**
 * SDK section - Vercel style
 * @component
 */
export const SDKSection: React.FC<SDKSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 md:py-28 bg-secondary', className)}>
      <Container>
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Установите <span className="text-gradient">SDK</span> для своей платформы
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sdkCards.map((sdk, index) => (
            <motion.a
              key={sdk.id}
              href={sdk.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sdk.name}
              className="group flex flex-col items-center justify-center gap-4 p-6 vercel-card hover:border-black transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <figure className="w-16 h-16">
                <img
                  src={sdk.icon}
                  alt={`${sdk.name} Icon`}
                  aria-hidden="true"
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </figure>
              <div className="flex items-center gap-2">
                {sdk.nameDesktop ? (
                  <>
                    <span className="hidden md:block text-sm font-medium text-foreground text-center">
                      {sdk.nameDesktop}
                    </span>
                    <span className="md:hidden text-sm font-medium text-foreground text-center">
                      {sdk.name}
                    </span>
                  </>
                ) : (
                  <span className="text-sm font-medium text-foreground text-center">
                    {sdk.name}
                  </span>
                )}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};
