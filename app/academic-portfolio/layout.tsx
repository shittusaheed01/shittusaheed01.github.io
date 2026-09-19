import type { Metadata } from 'next';
import { academicProfile } from '@/lib/academic-portfolio';

const academicStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: academicProfile.canonicalUrl,
  name: 'Saheed Shittu | Electrical Engineering Research Portfolio',
  mainEntity: {
    '@type': 'Person',
    '@id': `${academicProfile.canonicalUrl}#person`,
    name: academicProfile.name,
    jobTitle: 'Electrical Engineering Researcher',
    knowsAbout: ['Power-system stability', 'Renewable-energy integration', 'Smart grids', 'Sustainable electricity systems'],
    email: academicProfile.email,
  },
};

export const metadata: Metadata = {
  title: 'Saheed Shittu | Electrical Engineering Research Portfolio',
  description: 'Academic portfolio of Saheed Shittu, an electrical engineering graduate researching power-system stability, renewable-energy integration, smart grids, and sustainable electricity systems.',
  alternates: { canonical: academicProfile.canonicalUrl },
  openGraph: {
    type: 'website',
    url: academicProfile.canonicalUrl,
    title: 'Saheed Shittu | Electrical Engineering Research Portfolio',
    description: 'Research, publication, teaching, projects, and academic credentials.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary',
    title: 'Saheed Shittu | Electrical Engineering Research Portfolio',
    description: 'Research, publication, teaching, projects, and academic credentials.',
  },
};

export default function AcademicPortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(academicStructuredData).replace(/</g, '\\u003c') }} />
      {children}
    </>
  );
}
