/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'http', hostname: '**loremflickr.com' }, // REMoVE AFTER TESTING
    ],
  },
  async headers() {
    return [
      {
        // Cache all content pages
        // source: '/((?!_next|assets|favicon.ico).*)',
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // value: 's-maxage=86400, stale-while-revalidate=2592000',
            value: [
              `s-maxage=` + 24 * 3600, // 2 hours in seconds
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
};

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n/config.ts'
);

module.exports = withNextIntl({
  ...nextConfig,
});

// module.exports = nextConfig;
