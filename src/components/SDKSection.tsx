import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section, SectionTitle } from '@/components/common'
import { fadeInUp, DecorativeBlurAlt } from '@/constants'

interface SDKSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface SDKCard {
  id: string
  name: string
  icon: string
  url: string
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
    name: 'Kotlin Multiplatform',
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
    id: 'web-api',
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
]

/**
 * SDK platforms section with cards for different platforms
 * @component
 */
export const SDKSection: React.FC<SDKSectionProps> = ({ className }) => {
  return (
    <Section
      variant="dark"
      className={className}
      containerClassName="py-12 md:py-16 lg:py-20"
    >
      <SectionTitle size="medium" className="mb-10 md:mb-12 lg:mb-16">
        Установите SDK для своей платформы
      </SectionTitle>

      {/* SDK Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {sdkCards.map((sdk) => (
          <motion.a
            key={sdk.id}
            href={sdk.url}
            className="group flex flex-col items-center justify-between bg-[#2a2a2a] rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:bg-[#333] hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
            aria-label={sdk.name}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-6 h-16 w-16">
              <img
                src={sdk.icon}
                alt={sdk.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Label and Arrow */}
            <div className="flex items-center justify-between w-full gap-2">
              <h3 className="text-sm md:text-base font-semibold text-white text-left flex-1">
                {sdk.name}
              </h3>
              <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.a>
        ))}
      </div>

      <DecorativeBlurAlt />
    </Section>
  )
}
