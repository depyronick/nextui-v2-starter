/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@nextui-org/react', '@nextui-org/theme'],
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
  }
};

module.exports = nextConfig;