const path = require('path')
const merge = require('lodash.merge')

const config = require('../../tailwind.config')

const normalizePath = (filePath) => path.resolve(__dirname, filePath)
const normalizePaths = (filePaths) => filePaths.map(normalizePath)

const extension = {
  purge: {
    content: normalizePaths(['./stories/**/*.{js,ts,jsx,tsx}']),
    options: {
      safelist: [/data-theme$/],
    },
  },
}

module.exports = merge(config, extension)
