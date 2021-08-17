module.exports = {
  presets: [
    'next/babel',
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ],
  plugins: ['macros', '@emotion/babel-plugin'],
}
