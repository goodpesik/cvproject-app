import type { NextConfig } from 'next';

type confProtocol = 'http' | 'https' | undefined;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_CONFIG_PROTOCOL as confProtocol,
        hostname: process.env.NEXT_PUBLIC_CONFIG_HOSTNAME as string,
        port: process.env.NEXT_PUBLIC_CONFIG_PORT,
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
