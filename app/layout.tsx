import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { PostHogProvider } from '@/components/posthog-provider';
import './globals.css';

const geistSans = Geist({
  display: 'swap',
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  display: 'swap',
  preload: false,
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://growthpulse-ai.vercel.app'),
  title: {
    default: 'GrowthPulse AI',
    template: '%s | GrowthPulse AI',
  },
  description: 'Your marketing stack, diagnosed in minutes.',
  openGraph: {
    title: 'GrowthPulse AI',
    description: 'Your marketing stack, diagnosed in minutes.',
    siteName: 'GrowthPulse AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthPulse AI',
    description: 'Your marketing stack, diagnosed in minutes.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <a
          href='#main-content'
          className='sr-only absolute left-4 top-4 z-[100] rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground shadow-md ring-1 ring-border focus:not-sr-only focus:outline-hidden focus:ring-2 focus:ring-ring'
        >
          Skip to main content
        </a>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
