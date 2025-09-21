/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mahim' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/mahim' : '',
};

module.exports = nextConfig; 