import React from 'react'
import { HeroSection } from './components/HeroSection'
import { TrustSection } from './components/TrustSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StatsSection } from './components/StatsSection'
import { CodeSection } from './components/CodeSection'
import { SDKSection } from './components/SDKSection'
import { FeaturesDetailSection } from './components/FeaturesDetailSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { EnterpriseSection } from './components/EnterpriseSection'
import { G2AwardsSection } from './components/G2AwardsSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'

/**
 * Main App component
 * @component
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <StatsSection />
      <CodeSection />
      <SDKSection />
      <FeaturesDetailSection />
      <TestimonialsSection />
      <EnterpriseSection />
      <G2AwardsSection />
      <CaseStudiesSection />
    </div>
  )
}

export default App
