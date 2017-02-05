// LOCAL
import config from './shared/config.js';


// PLUGINS
// import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import cssnext from 'postcss-cssnext';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import stylusCssModules from 'rollup-plugin-stylus-css-modules';
import pug from 'rollup-plugin-pug';
// import postcss from 'postcss';
import sass from 'rollup-plugin-sass';

let ENV = JSON.stringify(process.env.NODE_ENV || 'development');

export default {
  entry: './client/app.js',
  dest: '_dist/js/app.min.js',
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
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false
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
    // babel({
    //   exclude: ['node_modules/**', '*.pug']
    // }),
    (ENV === 'production' && uglify())
  ],
  sourceMap: 'inline'
};
