/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_CONFIG_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_CONFIG_HOSTNAME,
        port: process.env.NEXT_PUBLIC_CONFIG_PORT,
        pathname: '/uploads/**',
      },
    ],
  },
  webpack(/** @type {import('webpack').Configuration} */ config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule?.test?.toString().includes('svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.[jt]sx?$/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
