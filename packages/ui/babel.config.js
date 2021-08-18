module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@emotion/babel-preset-css-prop',
    '@babel/preset-typescript',
  ],
  plugins: ['macros'],
}
