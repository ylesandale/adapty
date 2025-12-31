import type { NextConfig } from 'next'

/**
 * Next.js configuration
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  // Enable React strict mode for highlighting potential problems
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  basePath: process.env.NODE_ENV === 'production' ? '/adapty' : '',

  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,

  // Output configuration for static export (required for GitHub Pages)
  output: 'export',

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
