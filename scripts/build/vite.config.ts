import path from 'path';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { sync } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from '../../package.json';
import { STYLED_PLACEHOLDER } from '../config';
import { compileStyledComponentsPlugin } from '../plugins/compileStyledComponentsPlugin';

const entry = Object.fromEntries(
  sync('src/**/*.{ts,tsx}').map((file) => [
    path.relative('src', file.slice(0, file.length - path.extname(file).length)),
    file,
  ])
);

// eslint-disable-next-line
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry,
      name: 'Datav',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', ...Object.keys(pkg.dependencies)],

      output: [
        {
          dir: 'es',
          format: 'es',
        },
        {
          dir: 'cjs',
          format: 'cjs',
        },
      ],
    },
  },
  plugins: [
    compileStyledComponentsPlugin(STYLED_PLACEHOLDER),
    vue(),
    vueJsx(),
    dts({
      include: ['src'],
      outputDir: 'es',
    }),
  ],
  define: {
    __STYLED_PLACEHOLDER__: `"${STYLED_PLACEHOLDER}"`,
  },
});