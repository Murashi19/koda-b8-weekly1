import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "no-restricted-syntax": ["error", "WithStatement"],
      "no-console": "warn",
      "prefer-const": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
    },
  },
]);
