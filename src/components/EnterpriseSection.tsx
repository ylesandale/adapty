import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section, SectionTitle } from '@/components/common'
import { fadeInUp, DecorativeBlur } from '@/constants'
import { cn } from '@/lib/utils'

interface EnterpriseSectionProps {
  /** Optional CSS classes */
  className?: string
}

interface EnterpriseColumn {
  title: string
  items: EnterpriseItem[]
}

interface EnterpriseItem {
  text: string
  link?: string
  hasArrow?: boolean
}

const columns: EnterpriseColumn[] = [
  {
    title: 'Безопасность',
    items: [
      { text: 'Сертификация SOC2' },
      { text: 'Шифрование данных' },
      { text: 'Круглосуточный мониторинг мошенничества' },
    ],
  },
  {
    title: 'Надежность',
    items: [
      {
        text: '99.99% SLA',
        link: 'https://status.adapty.io/?_ga=2.123025353.339646607.1672001945-1139331965.1672001945',
        hasArrow: true,
      },
      {
        text: '$500 млн. в год обработанных платежей в приложениях',
      },
    ],
  },
  {
    title: 'Отзывчивость',
    items: [
      { text: 'Выделенный менеджер по работе с клиентами' },
      { text: 'Прямая связь через Slack' },
      { text: 'Онлайн-чат на сайте' },
      { text: 'Четыре способа связаться с нами' },
    ],
  },
]

/**
 * Enterprise features section component
 * @component
 */
export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
  className,
}) => {
  return (
    <Section className={className}>
      <SectionTitle>Платформа уровня Enterprise</SectionTitle>

      {/* Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
        {columns.map((column, index) => (
          <motion.div
            key={column.title}
            className={cn(
              'relative px-0 md:px-4 lg:px-8',
              index < columns.length - 1 && 'md:border-r-2 md:border-accent/30'
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={fadeInUp.transition}
          >
            {/* Column Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">
              {column.title}
            </h3>

            {/* Items List */}
            <ul className="flex flex-col gap-4">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className="relative">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.hasArrow && (
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                      <span className="text-base md:text-lg leading-relaxed underline decoration-primary/30 hover:decoration-primary transition-colors">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-foreground">
                      <span className="text-base md:text-lg leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  )}
                  {/* Separator line */}
                  {itemIndex < column.items.length - 1 && (
                    <div className="h-px bg-border mt-4" />
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Divider */}
            {index < columns.length - 1 && (
              <motion.div
                className="md:hidden h-px bg-accent/30 mt-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <DecorativeBlur />
    </Section>
  )
}
