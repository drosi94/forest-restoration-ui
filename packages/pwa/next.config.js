const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@forest-restoration/shared'])
const withPWA = require('next-pwa')
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins(
  [
    withPWA({
      webpack: (config) => {
        config.resolve.fallback = { fs: false, module: false, path: false, os: false, stream: false,};
        return config;
      },
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
      },
    }),
    withImages,
    withTM(),
  ],
  {
    pageExtensions: ["page.js", "page.tsx", "page.ts"],
    reactStrictMode: true,
    images: {},
    i18n,
    redirects() {
      return [
        process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
          ? { source: "/((?!maintenance)(?!_next)(?!static).*)", destination: "/maintenance", permanent: false }
          : null,
      ].filter(Boolean);
    }
  }
)
