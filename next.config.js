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

  async headers() {
    return [
      {
        // Cache all content pages
        source: '/((?!_next|assets|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: [
              `s-maxage=` + 86400, // 1 day in seconds
              `stale-while-revalidate=` + 31556952, // 1 Year in seconds
            ].join(', '),
          },
        ],

        // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
        // make sure to disable caching for prefetch requests for Server Components.
        missing: [
          {
            type: 'header',
            key: 'Next-Router-Prefetch',
          },
        ],
      },
    ];
  },
});
