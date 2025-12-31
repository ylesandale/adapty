import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

/**
 * Metadata for the application
 */
export const metadata: Metadata = {
  title: 'Лучшее решение для роста мобильных покупок в приложении | Adapty',
  description: 'The complete solution for mobile subscription management and in-app purchases',
  keywords: ['subscriptions', 'mobile', 'in-app purchases', 'revenue', 'analytics'],
  authors: [{ name: 'Adapty' }],
};

/**
 * Viewport configuration
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root layout component
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

