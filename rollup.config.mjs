import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';

const signature = new Date().getTime();
export default [{
  input: 'src/editor/index.mjs',
  output: {
    file: `build/www/try/index.${signature}.js`,
    format: 'iife',
  },
  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: false,
      browser: true,
    }),
    commonjs(),
    nodePolyfills(),
  ],
}, {
  input: 'src/editor/index.html',
  output: {
    dir: 'build/www/try',
  },
  plugins: [
    html({
      extractAssets: false,
      transformHtml: (content) => {
        return content.replaceAll('"index.mjs"', `"index.${signature}.js"`);
      }
    }),
  ],
},
];
