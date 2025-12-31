'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface G2AwardsSectionProps {
  /** Optional CSS classes */
  className?: string;
}

interface Award {
  id: string;
  title: string;
  image: string;
  alt: string;
  ariaLabel: string;
}

const awards: Award[] = [
  {
    id: 'best-results',
    title: 'Best Results',
    image: 'https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg',
    alt: 'G2 Award: Best Results, winter 2025',
    ariaLabel:
      'The Best Results product in the Results Index earned the highest overall Results rating in its category',
  },
  {
    id: 'high-performer',
    title: 'High Performer',
    image: 'https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg',
    alt: 'G2 Award: High Performer, winter 2025',
    ariaLabel:
      'Products in the High Performer quadrant in the Grid® Report have high customer Satisfaction scores and low Market Presence score',
  },
  {
    id: 'best-usability',
    title: 'Best Usability',
    image: 'https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg',
    alt: 'G2 Award: Best Usability, winter 2025',
    ariaLabel:
      'The Best Usability product in the Usability Index earned the highest Usability rating in its category',
  },
  {
    id: 'best-relationship',
    title: 'Best Relationship',
    image: 'https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg',
    alt: 'G2 Award: Best Relationship, winter 2025',
    ariaLabel:
      'The Best Relationship product in the Relationship Index earned the highest Relationship rating in its category',
  },
  {
    id: 'most-implementable',
    title: 'Most Implementable',
    image: 'https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg',
    alt: 'G2 Award: Most Implementable, winter 2025',
    ariaLabel:
      'The Most Implementable product in the Implementation Index earned the highest Implementation rating in its category',
  },
];

/**
 * G2 Awards section - Vercel style
 * @component
 */
export const G2AwardsSection: React.FC<G2AwardsSectionProps> = ({
  className,
}) => {
  const rating = 4.8;
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  const partialStarPercentage = ((rating % 1) * 100).toFixed(0);

  return (
    <section className={cn('py-20 md:py-28 bg-secondary', className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Доверие к <span className="text-gradient">удобству и обслуживанию</span> клиентов
          </h2>

          {/* G2 Rating Link */}
          <motion.a
            href="https://www.g2.com/products/adapty-io/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {/* Full stars */}
              {[...Array(fullStars)].map((_, i) => (
                <Star
                  key={`full-${i}`}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              
              {/* Partial star */}
              {hasPartialStar && (
                <div className="relative w-6 h-6">
                  <Star className="absolute w-6 h-6 text-gray-300" />
                  <div
                    className="absolute overflow-hidden"
                    style={{ width: `${partialStarPercentage}%` }}
                  >
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              )}
              
              {/* Empty stars */}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <Star
                  key={`empty-${i}`}
                  className="w-6 h-6 text-gray-300"
                />
              ))}
            </div>

            {/* Review count */}
            <p className="text-sm text-muted-foreground">
              На основе 500+ отзывов
            </p>
          </motion.a>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {awards.map((award, index) => (
            <motion.a
              key={award.id}
              href="https://www.g2.com/products/adapty-io/reviews"
              target="_blank"
              rel="nofollow noopener"
              aria-label={award.ariaLabel}
              title={award.ariaLabel}
              className="flex flex-col items-center justify-center gap-4 p-6 vercel-card hover:border-black transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={award.image}
                alt={award.alt}
                className="w-24 h-24 object-contain"
                loading="eager"
              />
              <span className="text-sm font-medium text-center">
                {award.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Adapty',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '236',
              bestRating: '5',
              worstRating: '1',
            },
            brand: {
              '@type': 'Organization',
              name: 'Adapty',
            },
          }),
        }}
      />
    </section>
  );
};
