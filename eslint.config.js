import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-console': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'warn',

      'prefer-const': 'error',
      'consistent-return': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-shadow': 'error',

      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'curly': ['error', 'all'],
      'no-multi-spaces': 'error',

      'no-else-return': 'error',
      'object-shorthand': 'error',

      'complexity': ['warn', { max: 10 }],
      'parsing-error': ['warn', { fileExtension: '.js' }],
    }
  },
]);
