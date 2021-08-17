const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@forest-restoration/shared'])
const withPWA = require('next-pwa')
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins(
  [
    withTM(),
    // TODO: Issue #5
    // withPWA({
    //   webpack5: true,
    //   webpack: (config) => {
    //     config.resolve.fallback = { fs: false, module: false, path: false, os: false };
    //     return config;
    //   },
    //   pwa: {
    //     dest: "public",
    //     register: true,
    //     skipWaiting: true,
    //   },
    // }),
    withImages,
  ],
  {
    pageExtensions: ["page.js", "page.tsx", "page.ts"],
    reactStrictMode: true,
    images: {},
    i18n,
  }
)
