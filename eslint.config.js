import { defineConfig } from 'eslint/config';
import babelParser from '@babel/eslint-parser';
import litPlugin from 'eslint-plugin-lit';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.js'],
    ignores: [
      'node_modules/*',
      'docs/*',
      'docs-src/*',
      'rollup-config.js',
      'custom-elements.json',
      'web-dev-server.config.js',
    ],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
      },
      globals: {
        chai: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        ...globals.browser,
      },
    },
    plugins: {
      lit: litPlugin,
    },
    rules: {
      'no-unexpected-multiline': 'off',
      'lit/no-invalid-html': 'error',
      'no-undef': 'error',
    },
  },
  {
    files: ['rollup.config.js', 'web-test-runner.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
  },
]);
