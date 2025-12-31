import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PromotionalBannerProps {
  /** Banner label text */
  label: string;
  /** Banner title text */
  title: string;
  /** Banner link URL */
  href: string;
  /** Optional CSS classes */
  className?: string;
}

/**
 * Promotional banner - Vercel style
 * @component
 */
export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  label,
  title,
  href,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white hover:bg-secondary transition-all duration-200 group',
        className
      )}
    >
      <span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded-full">
        {label}
      </span>
      <span className="text-sm text-foreground">{title}</span>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};
