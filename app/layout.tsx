import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shittusaheed01.github.io'),
  title:
    'Saheed Shittu | Backend Engineer · Node.js · TypeScript · Microservices',
  description:
    'Saheed Ademola Shittu is a Backend Engineer, specializing in Node.js, TypeScript, microservices, and scalable distributed systems. Lead Backend Engineer at Sunsystems. First-class electrical and electronics engineering graduate.',
  // generator: 'v0.app',
  keywords: [
    'Saheed Shittu',
    'Saheed Ademola Shittu',
    'Backend Engineer Lagos',
    'Node.js Engineer Nigeria',
    'TypeScript Developer Lagos',
    'Microservices Engineer',
    'Saheed Shittu backend engineer',
    'shittusaheed01',
    'Sunsystems Lagos engineer',
    'HIPAA backend developer',
    'distributed systems engineer Nigeria',
  ],
  authors: [
    { name: 'Saheed Ademola Shittu', url: 'https://shittusaheed01.github.io' },
  ],
  creator: 'Saheed Ademola Shittu',
  openGraph: {
    type: 'website',
    url: 'https://shittusaheed01.github.io',
    title: 'Saheed Shittu | Backend Engineer',
    description:
      'Backend engineer building scalable, high-availability systems. Node.js · TypeScript · Microservices · Lagos, Nigeria.',
    siteName: 'Saheed Shittu Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saheed Shittu - Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saheed Shittu | Backend Engineer',
    description:
      'Backend engineer building scalable systems. Node.js · TypeScript · Lagos.',
    creator: '@saheed___',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://shittusaheed01.github.io',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saheed Ademola Shittu',
    alternateName: 'Saheed Shittu',
    url: 'https://shittusaheed01.github.io',
    email: 'shittusaheed01@gmail.com',
    jobTitle: 'Backend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Sunsystems',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Ilorin',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'AltSchool Africa',
      },
    ],
    knowsAbout: [
      'Node.js',
      'TypeScript',
      'Microservices',
      'Backend Engineering',
      'Distributed Systems',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'AWS',
      'HIPAA Compliance',
      'Event-Driven Architecture',
    ],
    sameAs: [
      'https://github.com/shittusaheed01',
      'https://www.linkedin.com/in/shittusaheed01/',
      'https://twitter.com/saheed___',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
