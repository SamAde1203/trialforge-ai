import './globals.css';
import type { Metadata, Viewport } from 'next';

// Add your actual production URL here
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trialforgeapp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'TrialForge AI Pro – AI‑Powered Clinical Trial Intelligence Platform',
  description:
    'Transform natural-language protocols into powered trial designs, synthetic cohorts, Monte Carlo power curves, and CONSORT flows — instantly.',
  keywords: [
    'clinical trials',
    'AI clinical research',
    'protocol design',
    'Monte Carlo simulations',
    'clinical intelligence',
    'healthcare',
    'trial optimization',
    'biostatistics AI',
  ],
  authors: [{ name: 'TrialForge AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'TrialForge AI Pro – Clinical Trial Intelligence',
    description: 'AI‑powered clinical trial design and analysis platform',
    siteName: 'TrialForge AI Pro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrialForge AI Pro - Clinical Trial Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrialForge AI Pro – Clinical Trial Intelligence',
    description: 'AI‑powered clinical trial design and analysis platform',
    creator: '@trialforgeai',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification for Google Search Console, etc.
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute -left-40 -top-40 h-72 w-72 animate-orb-float rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute right-[-6rem] top-40 h-64 w-64 animate-orb-float-reverse delay-1000 rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 blur-3xl" />
          <div className="absolute bottom-40 left-1/4 h-80 w-80 animate-orb-float delay-2000 rounded-full bg-gradient-to-br from-violet-500/10 to-purple-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] animate-light-streak" />
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}