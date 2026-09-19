import type { MetadataRoute } from 'next';
import { academicProfile } from '@/lib/academic-portfolio';
import { site } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified instead of claiming every rebuild changes the page content.
  return [
    { url: site.url },
    { url: academicProfile.canonicalUrl },
  ];
}
