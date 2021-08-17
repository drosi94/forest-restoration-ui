const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@forest-restoration/shared"]);
const withPWA = require("next-pwa");
const withImages = require("next-images");

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
    withImages
  ],
  {
    reactStrictMode: true,
    images: {}
  }
);