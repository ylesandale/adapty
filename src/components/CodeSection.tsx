import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Copy, Check } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface CodeTab {
  id: string
  label: string
  language: string
  code: string
  githubUrl: string
}

const codeTabs: CodeTab[] = [
  {
    id: 'swift',
    label: 'Swift',
    language: 'swift',
    code: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    githubUrl: 'https://github.com/adaptyteam/AdaptySDK-iOS',
  },
  {
    id: 'kotlin',
    label: 'Kotlin',
    language: 'kotlin',
    code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
    githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Android',
  },
  {
    id: 'react-native',
    label: 'React Native',
    language: 'javascript',
    code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
    githubUrl: 'https://github.com/adaptyteam/AdaptySDK-React-Native',
  },
  {
    id: 'flutter',
    label: 'Flutter',
    language: 'dart',
    code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
    githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Flutter',
  },
  {
    id: 'unity',
    label: 'Unity',
    language: 'csharp',
    code: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`,
    githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Unity',
  },
]

/**
 * Code integration section with dark background and code examples
 * @component
 */
export const CodeSection: React.FC<CodeSectionProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(codeTabs[0].id)
  const [copied, setCopied] = useState(false)

  const activeTabData =
    codeTabs.find((tab) => tab.id === activeTab) || codeTabs[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTabData.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      className={cn(
        'relative bg-[#1a1a1a] text-white py-16 md:py-20 lg:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title - Full Width */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 lg:mb-20 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Интегрируйте покупки в приложении с помощью нескольких строк кода
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Description & Quote */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Description */}
            <div className="text-base md:text-lg text-gray-300 leading-relaxed">
              Интегрируйте IAP за несколько часов без серверного кодирования с
              помощью простого и удобного SDK. А дальше, Adapty будет управлять
              работой и состоянем каждой вашей подписки – от активации, до
              возврата.
            </div>

            {/* Button */}
            <div>
              <Button
                variant="outline"
                size="default"
                className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#1a1a1a] hover:border-white"
                onClick={() =>
                  (window.location.href = 'https://adapty.io/ru/sdk/')
                }
              >
                Быстрая интеграция
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/20 my-4" />

            {/* Quote Card */}
            <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="text-4xl mb-4">"</div>

              {/* Logo */}
              <div className="mb-6">
                <img
                  src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp"
                  alt="Smitten"
                  className="h-8 md:h-10"
                  loading="lazy"
                />
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                С SDK Adapty, добавить покупки в приложение оказалось проще
                простого. С помощью всего нескольких строк кода я смог без
                проблем добавить подписки как для iOS, так и для Android.
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                  alt="Magnus Olafsson Smitten"
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-white">
                    Магнус Олафссон
                  </div>
                  <div className="text-sm text-gray-400">
                    Главный технический директор в Smitten
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Code Tabs */}
          <motion.div
            className="flex flex-col bg-[#212121] rounded-3xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tabs Header */}
            <div className="flex overflow-x-auto bg-[#1a1a1a] border-b border-white/10">
              {codeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-3 md:px-4 py-3 text-xs md:text-sm font-medium whitespace-nowrap transition-colors',
                    activeTab === tab.id
                      ? 'text-white bg-[#212121] border-b-2 border-accent'
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="relative flex-1 p-6 md:p-8">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title={copied ? 'Copied!' : 'Copy code'}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Code Block with Syntax Highlighting */}
              <SyntaxHighlighter
                language={activeTabData.language}
                style={materialDark}
                customStyle={{
                  margin: 0,
                  padding: 0,
                  background: 'transparent',
                  fontSize: 'clamp(14px, 0.875rem, 16px)',
                }}
                showLineNumbers={true}
                lineNumberStyle={{
                  minWidth: '3em',
                  paddingRight: '1em',
                  color: '#666',
                  userSelect: 'none',
                }}
                wrapLines={true}
              >
                {activeTabData.code}
              </SyntaxHighlighter>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 md:p-6 bg-[#1a1a1a] border-t border-white/10">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm text-gray-400">100% Open Source</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 bg-transparent text-white hover:bg-white hover:text-[#1a1a1a] hover:border-white"
                onClick={() => window.open(activeTabData.githubUrl, '_blank')}
              >
                Go to GitHub
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </section>
  )
}
