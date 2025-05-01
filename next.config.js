/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // You can customize webpack configuration here
    return config;
  },
  experimental: {
    // You can enable/disable experimental features here
    // Turbopack is a boolean or object, not just false
    turbo: process.env.TURBO === 'true',
  },
  // Enable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig); 