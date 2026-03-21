import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  { ignores: ['node_modules', 'dist', 'eslint.config.js'] },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: globals.node,
    },
  },

  js.configs.recommended,

  // 🔥 IMPORTANTE: usar type-checked
  ...tseslint.configs.recommendedTypeChecked,

  // 🔥 CLAVE: esto faltaba
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  prettier,

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'warn',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      // 🔥 ahora sí va a funcionar
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/require-await': 'warn',

      eqeqeq: ['error', 'always'],
      'no-throw-literal': 'error',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
]);
