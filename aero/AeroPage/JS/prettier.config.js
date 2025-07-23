/** @type {import("prettier").Config} */
const config = {
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  useTabs: false,
  tabWidth: 2,
  arrowParens:"always",
  plugins: ["prettier-plugin-tailwindcss"]
};
export default config; 