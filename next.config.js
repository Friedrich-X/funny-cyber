/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 