/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'dist',
    assetPrefix: '/mahim',
    basePath: '/mahim',
  }),
};

module.exports = nextConfig; 