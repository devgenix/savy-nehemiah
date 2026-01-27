/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/savy-nehemiah',
  assetPrefix: '/savy-nehemiah/',
};

export default nextConfig;
