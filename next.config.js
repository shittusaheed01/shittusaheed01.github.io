/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generates static HTML
  basePath: '', // empty since it's a root GitHub Pages site
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;
