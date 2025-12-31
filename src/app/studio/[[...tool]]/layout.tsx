/**
 * Generate static params for dynamic route
 * This allows studio to be included in static export
 */
export async function generateStaticParams() {
  // Return array with empty tool to generate the base /studio route
  return [{ tool: [] }]
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Adapty Blog Studio',
  description: 'Content management for Adapty Blog',
}
