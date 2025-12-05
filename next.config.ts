import type { NextConfig } from 'next';

type confProtocol = 'http' | 'https' | undefined;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: (process.env.NEXT_PUBLIC_CONFIG_PROTOCOL as confProtocol) ?? 'http',
        hostname: (process.env.NEXT_PUBLIC_CONFIG_HOSTNAME as string) ?? 'localhost',
        port: process.env.NEXT_PUBLIC_CONFIG_PORT ?? '3003',
        pathname: '/uploads/**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  webpack(config: any) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test?.toString().includes('svg'),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;