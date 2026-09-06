import { Schibsted_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { site } from '@/lib/content'
import MotionProvider from '@/components/MotionProvider'
import './globals.css'

const displayFont = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    'Sai Kaung Khant Zaw',
    'Data Analyst',
    'Data Scientist',
    'ML Engineer',
    'Machine Learning',
    'Data Science Portfolio',
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport = {
  themeColor: '#0a0d0c',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  description: site.tagline,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bristol',
    addressCountry: 'GB',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of the West of England, Bristol',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'West Yangon Technological University',
    },
  ],
  sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
