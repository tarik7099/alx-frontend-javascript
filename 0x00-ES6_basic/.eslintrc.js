import { ESLint } from "eslint";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
      node: true,
    },
    plugins: {
      react: ESLint.Plugin.react,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

