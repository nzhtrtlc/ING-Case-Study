/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: 'main.dist.js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash].[ext]',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    alias({
      entries: [
        {
          find: 'components',
          replacement: path.resolve(__dirname, 'src/components/'),
        },
        { find: 'store', replacement: path.resolve(__dirname, 'src/store/') },
        {
          find: 'localization',
          replacement: path.resolve(__dirname, 'src/localization/'),
        },
      ],
    }),
    resolve({
      extensions: ['.js', '.mjs', '.json'],
    }),
    replace({
      preventAssignment: true,
      'Reflect.decorate': 'undefined',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
