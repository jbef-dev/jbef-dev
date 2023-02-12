/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'http', hostname: '**loremflickr.com' }, // REMoVE AFTER TESTING
    ],
  },
  // swcMinify: true,
  experimental: {
    appDir: true,
  },
};

const withNextIntl = require('next-intl/plugin')('./i18n/config.tsx');

module.exports = withNextIntl({
  // i18nConfig: './i18n/config.tsx',
  ...nextConfig,
});
