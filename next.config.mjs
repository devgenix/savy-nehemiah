/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/savy-nehemiah',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
