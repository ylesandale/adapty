'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

/**
 * Sanity Studio page
 * Access at /studio
 * Note: Studio works in client-side mode for static export
 * generateStaticParams is defined in layout.tsx
 */
export default function StudioPage() {
  return <NextStudio config={config} />
}
