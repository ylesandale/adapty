'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Container, AnimatedElement } from './common';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSectionProps {
  /** Optional CSS classes */
  className?: string;
}

interface CodeTab {
  id: string;
  label: string;
  language: string;
  code: string;
  githubUrl: string;
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
];

/**
 * Code integration section - Vercel style
 * @component
 */
export const CodeSection: React.FC<CodeSectionProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(codeTabs[0].id);
  const [copied, setCopied] = useState(false);

  const activeTabData =
    codeTabs.find((tab) => tab.id === activeTab) || codeTabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTabData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={cn('py-20 md:py-28 bg-white', className)}>
      <Container>
        {/* Title */}
        <AnimatedElement className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto">
          Интегрируйте покупки в приложении{' '}
          <span className="text-gradient">с помощью нескольких строк кода</span>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Description */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Интегрируйте IAP за несколько часов без серверного кодирования с
              помощью простого и удобного SDK. А дальше, Adapty будет управлять
              работой и состоянием каждой вашей подписки – от активации, до
              возврата.
            </p>

            <Button
              variant="outline"
              onClick={() =>
                (window.location.href = 'https://adapty.io/ru/sdk/')
              }
            >
              Быстрая интеграция
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Quote Card */}
            <div className="vercel-card p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp"
                  alt="Smitten"
                  className="h-8"
                  loading="lazy"
                />
              </div>

              <p className="text-base text-foreground mb-4 leading-relaxed">
                &quot;С SDK Adapty, добавить покупки в приложение оказалось проще
                простого. С помощью всего нескольких строк кода я смог без
                проблем добавить подписки как для iOS, так и для Android.&quot;
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                  alt="Magnus Olafsson"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <div className="font-medium text-sm text-foreground">
                    Магнус Олафссон
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Главный технический директор в Smitten
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Code Editor */}
          <motion.div
            className="flex flex-col vercel-card overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Tabs */}
            <div className="flex overflow-x-auto bg-secondary border-b border-border">
              {codeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2',
                    activeTab === tab.id
                      ? 'text-foreground border-black bg-white'
                      : 'text-muted-foreground border-transparent hover:text-foreground'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="relative p-4 bg-white">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-6 right-6 p-2 rounded-lg border border-border bg-white hover:bg-secondary transition-colors z-10"
                title={copied ? 'Copied!' : 'Copy code'}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {/* Code Block */}
              <SyntaxHighlighter
                language={activeTabData.language}
                style={oneLight}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  background: 'transparent',
                  fontSize: '14px',
                }}
                showLineNumbers={false}
              >
                {activeTabData.code}
              </SyntaxHighlighter>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 bg-secondary border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0.0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                100% Open Source
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(activeTabData.githubUrl, '_blank')}
              >
                GitHub
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
