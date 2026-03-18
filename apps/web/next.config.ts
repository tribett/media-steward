import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@media-steward/db', '@media-steward/types'],
  output: 'standalone',
};

export default nextConfig;
