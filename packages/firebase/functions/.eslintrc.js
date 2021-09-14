/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jsdoc/recommended",
    "google",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "prettier/prettier": "warn",
    "no-prototype-builtins": "warn",
    "no-useless-escape": "warn",
    "prefer-promise-reject-errors": "warn"
  },
  parserOptions: {
    ecmaVersion: "2017",
    project: ["./tsconfig.dev.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false
  },
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser"
};
