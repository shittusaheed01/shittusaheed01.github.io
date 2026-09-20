import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import { profile } from '@/lib/portfolio';
import { site } from '@/lib/seo';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description,
  authors: [{ name: profile.name, url: site.url }], creator: profile.name, alternates: { canonical: site.url },
  openGraph: { type: 'website', url: site.url, title: site.title, description: site.description, siteName: profile.name, locale: 'en_NG', images: [{ url: '/og-image.jpg', alt: `${profile.name} — Backend Engineer` }] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, creator: '@saheed___', images: [{ url: '/og-image.jpg', alt: `${profile.name} — Backend Engineer` }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: [{ url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' }, { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' }, { url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
