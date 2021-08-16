const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@forest-restoration/shared"]);
const withImages = require("next-images");
module.exports = withPlugins([withTM(), withImages], {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
  images: {},
});