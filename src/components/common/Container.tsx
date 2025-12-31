import React from 'react'
import { cn } from '@/lib/utils'
import { containerWidthLarge } from '@/constants/styles'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'large'
}

/**
 * Reusable container component with consistent width and padding
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'large',
}) => {
  const containerClass = size === 'large' ? containerWidthLarge : 'container mx-auto px-4'

  return (
    <div className={cn(containerClass, className)}>
      {children}
    </div>
  )
}

