import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface G2AwardsSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface Award {
  id: string
  title: string
  image: string
  alt: string
}

const awards: Award[] = [
  {
    id: 'best-results',
    title:
      'The Best Results product in the Results Index earned the highest overall Results rating in its category',
    image:
      'https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg',
    alt: 'G2 Award: Best Results, winter 2025',
  },
  {
    id: 'high-performer',
    title:
      'Products in the High Performer quadrant in the Grid® Report have high customer Satisfaction scores and low Market Presence score',
    image:
      'https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg',
    alt: 'G2 Award: High Performer, winter 2025',
  },
  {
    id: 'best-usability',
    title:
      'The Best Usability product in the Usability Index earned the highest Usability rating in its category',
    image:
      'https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg',
    alt: 'G2 Award: Best Usability, winter 2025',
  },
  {
    id: 'best-relationship',
    title:
      'The Best Relationship product in the Relationship Index earned the highest Relationship rating in its category',
    image:
      'https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg',
    alt: 'G2 Award: Best Relationship, winter 2025',
  },
  {
    id: 'most-implementable',
    title:
      'The Most Implementable product in the Implementation Index earned the highest Implementation rating in its category',
    image:
      'https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg',
    alt: 'G2 Award: Most Implementable, winter 2025',
  },
]

/**
 * G2 Awards and Reviews section component
 * @component
 */
export const G2AwardsSection: React.FC<G2AwardsSectionProps> = ({
  className,
}) => {
  return (
    <section
      className={cn(
        'relative bg-background py-16 md:py-20 lg:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Доверие к удобству и обслуживанию клиентов
        </motion.h2>

        {/* Rating with Stars */}
        <motion.a
          href="https://www.g2.com/products/adapty-io/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 mb-12 md:mb-16 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
        >
          {/* Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-8 h-8 md:w-10 md:h-10 fill-[#FFD700] text-[#FFD700] transition-colors duration-300 group-hover:fill-[#FFA500] group-hover:text-[#FFA500]"
              />
            ))}
            {/* Partial star (80%) */}
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Star className="w-8 h-8 md:w-10 md:h-10 fill-[#E0E0E0] text-[#E0E0E0] absolute inset-0" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: '80%' }}
              >
                <Star className="w-8 h-8 md:w-10 md:h-10 fill-[#FFD700] text-[#FFD700] transition-colors duration-300 group-hover:fill-[#FFA500] group-hover:text-[#FFA500]" />
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            На основе 500+ отзывов
          </p>
        </motion.a>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 max-w-7xl mx-auto">
          {awards.map((award) => (
            <motion.a
              key={award.id}
              href="https://www.g2.com/products/adapty-io/reviews"
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={award.title}
              aria-label={award.title}
              className="group bg-white p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 rounded-2xl md:rounded-[2rem] border-2 border-border/10 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
              animate={{ y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
              style={{ transition: 'all 0.15s ease-out' }}
            >
              <img
                src={award.image}
                alt={award.alt}
                className="h-20 sm:h-24 md:h-28 lg:h-24 xl:h-28 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                loading="eager"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/50 rounded-full blur-2xl -z-10" />

      {/* Structured Data */}
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
  )
}
