import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'IDENTRA — Graphic Design & AI UGC'
const siteDescription = 'Graphic design and AI-generated UGC ads for brands that need people to stop scrolling. One independent creative studio, from first idea to final frame.'

export const Route = createRootRoute({
  notFoundComponent: () => (
    <main className="container route-message">
      <span className="eyebrow muted">IDENTRA / 404</span>
      <h1>This frame is missing.</h1>
      <p>The page you’re looking for isn’t here. The studio is just one click away.</p>
      <a href="/" className="button">Back to the studio ↗</a>
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="container route-message">
      <span className="eyebrow muted">IDENTRA / SOMETHING WENT WRONG</span>
      <h1>Let’s take that again.</h1>
      <p>The page couldn’t load. Please try again.</p>
      <button className="button" onClick={reset}>Try again ↗</button>
    </main>
  ),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
