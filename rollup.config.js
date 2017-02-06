// LOCAL
import config from './shared/config.js';


// PLUGINS
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import cssnext from 'postcss-cssnext';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';
import stylusCssModules from 'rollup-plugin-stylus-css-modules';
import pug from 'rollup-plugin-pug';
// import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
// import { minify } from 'uglify-js';
const Visualizer = require('rollup-plugin-visualizer');

let ENV = JSON.stringify(process.env.NODE_ENV || 'development');

export default {
  entry: './client/huck.js',
  dest: '_dist/js/huck.min.js',
  format: 'iife',
  moduleName: config.shared.name,
  plugins: [
    eslint({
      exclude: [
        'public/**',
        'client/**/*.pug',
        'client/**/*.scss',
        'client/**/*.styl'
      ]
    }),
    resolve({
      browser: true,
      jsnext: true,
      main: true,
      module: true
    }),
    sass(),
    pug(),
    commonjs(),
    json(),
    replace({
      exclude: 'node_modules/**',
      ENV: ENV
    }),
    stylusCssModules({
      sourceMap: true
    }),
    babel({
      exclude: ['node_modules/**', '*.pug']
    }),
    Visualizer()
    // uglify({}, minify),
    // (ENV === 'production' && uglify())
  ],
  sourceMap: true
};
