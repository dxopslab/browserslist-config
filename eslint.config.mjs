import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    ignores: ['node_modules'],
  },
  js.configs.recommended,
];
