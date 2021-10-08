const path = require('path')
const merge = require('lodash.merge')

const config = require('../../tailwind.config')

const normalizePath = (filePath) => path.resolve(__dirname, filePath)
const normalizePaths = (filePaths) => filePaths.map(normalizePath)

const extension = {
  purge: normalizePaths([
    'pages/**/*.{js,ts,jsx,tsx}',
    'shared/components/**/*.{js,ts,jsx,tsx}',
    'lib/**/*.{js,ts,jsx,tsx}',
    'ui/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@forest-restoration/shared/ui/**/*.{js,ts,jsx,tsx}',
  ]),
}

module.exports = merge(config, extension)
