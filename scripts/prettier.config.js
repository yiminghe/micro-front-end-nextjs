/**
 * @type {import('prettier').Options}
 */
module.exports = {
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
};
