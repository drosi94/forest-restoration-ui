const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@forest-restoration/shared'])
const withPWA = require('next-pwa')
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "https://forestrestoration.sanity.studio/:path*",
};


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
          ? { source: "/((?!maintenance)(?!_next)(?!static|(?!image))(?!favicon-16x16.png)(?!favicon-32x32.png)(?!icon-192x192.png)(?!manifest.json)(?!themeToggle.js).*)", destination: "/maintenance", permanent: false }
          : null,
      ].filter(Boolean);
    },
    rewrites: () => [STUDIO_REWRITE],
    images: {
      domains: ['cdn.sanity.io']
    }
  }
)
