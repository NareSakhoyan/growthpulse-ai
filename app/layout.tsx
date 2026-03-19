import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { PostHogProvider } from '@/components/posthog-provider';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
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
        <PostHogProvider>{children}</PostHogProvider>
        <Toaster />
      </body>
    </html>
  );
}
