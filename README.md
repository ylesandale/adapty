# Adapty Landing Page

🌐 **Live**: [https://ylesandale.github.io/adapty](https://ylesandale.github.io/adapty)

A modern, responsive redesign of the Adapty landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- ⚡ Optimized performance with Next.js 15
- 🎯 TypeScript for type safety
- 🎭 Framer Motion animations
- 🧩 Modular component architecture
- ♿ Accessibility-focused
- 🚀 React Server Components for improved performance

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (or npm/yarn)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests with coverage

## Project Structure

```
adapty/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── common/           # Reusable components
│   │   └── ui/               # UI components
│   ├── constants/            # Constants and configurations
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Development

This project uses:
- **App Router** - Next.js 13+ routing system
- **Server Components** - For improved performance
- **Client Components** - For interactive features (marked with 'use client')
- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended config

## Building for Production

```bash
pnpm build
```

The build output will be in the `.next` directory.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel
```

### Static Export

For static hosting (GitHub Pages, etc.):

1. Uncomment `output: 'export'` in `next.config.ts`
2. Run `pnpm build`
3. Deploy the `out` directory

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
