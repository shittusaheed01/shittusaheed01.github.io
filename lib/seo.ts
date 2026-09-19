import { profile } from '@/lib/portfolio';

// Keep canonical URLs consistent across metadata, structured data, and crawlers.
export const site = {
  url: 'https://shittusaheed01.github.io/',
  title: `${profile.name} | Backend Engineer in Lagos`,
  description: `${profile.name} is a backend engineer in Lagos, Nigeria. Explore his work with Node.js, TypeScript, healthcare platforms, and distributed systems.`,
};

const personId = `${site.url}#person`;
const websiteId = `${site.url}#website`;

export const profileStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: site.url,
      name: profile.name,
      alternateName: profile.alternateNames,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: 'en',
      isPartOf: { '@id': websiteId },
      mainEntity: {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        alternateName: profile.alternateNames,
        url: site.url,
        description: site.description,
        email: profile.email,
        jobTitle: 'Lead Backend Engineer',
        worksFor: { '@type': 'Organization', name: 'Sunsystems' },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'University of Ilorin' },
          { '@type': 'EducationalOrganization', name: 'AltSchool Africa' },
        ],
        knowsAbout: [
          'Node.js', 'TypeScript', 'Microservices', 'Backend Engineering',
          'Distributed Systems', 'PostgreSQL', 'MongoDB', 'Redis',
          'Docker', 'AWS', 'Event-Driven Architecture',
        ],
        sameAs: [profile.github, profile.linkedin, 'https://twitter.com/saheed___'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lagos',
          addressCountry: 'NG',
        },
      },
    },
  ],
};
