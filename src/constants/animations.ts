/**
 * Reusable Framer Motion animation configurations
 */

import { Transition } from 'framer-motion'

// Transition configurations
export const transitions = {
  fast: { duration: 0.15, ease: 'easeOut' } as Transition,
  default: { duration: 0.3, ease: 'easeOut' } as Transition,
  smooth: { duration: 0.5, ease: 'easeOut' } as Transition,
  slow: { duration: 0.6, ease: 'easeOut' } as Transition,
}

// Common animation variants
export const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: transitions.slow,
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: transitions.smooth,
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: transitions.smooth,
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: transitions.smooth,
}

// Card hover animations
export const cardHover = {
  whileHover: {
    y: -8,
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
  },
  animate: { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)' },
  style: { transition: 'all 0.15s ease-out' },
}

export const cardHoverSmall = {
  whileHover: {
    y: -5,
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
  },
  animate: { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)' },
  style: { transition: 'all 0.15s ease-out' },
}

export const logoHover = {
  whileHover: {
    opacity: 1,
    scale: 1.05,
  },
  animate: { opacity: 0.6, scale: 1 },
  style: { transition: 'all 0.15s ease-out' },
}

