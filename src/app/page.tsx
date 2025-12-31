import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { TrustSection } from '@/components/TrustSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { StatsSection } from '@/components/StatsSection'
import { CodeSection } from '@/components/CodeSection'
import { SDKSection } from '@/components/SDKSection'
import { FeaturesQuotesSection } from '@/components/FeaturesQuotesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { EnterpriseSection } from '@/components/EnterpriseSection'
import { G2AwardsSection } from '@/components/G2AwardsSection'
import { CaseStudiesSection } from '@/components/CaseStudiesSection'

/**
 * Home page component
 * @component
 * @returns {JSX.Element} The home page
 */
export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <StatsSection />
      <CodeSection />
      <SDKSection />
      <FeaturesQuotesSection />
      <TestimonialsSection />
      <EnterpriseSection />
      <G2AwardsSection />
      <CaseStudiesSection />
    </main>
  )
}
