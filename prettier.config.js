// prettier.config.js or .prettierrc.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  // tailwindConfig: './tailwind.config.js',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  singleQuote: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
};
