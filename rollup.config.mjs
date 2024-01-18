import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import path from 'path';

import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';

const devMode = process.env.NODE_ENV !== 'production';
import * as packageJson from './package.json' assert { type: "json" };

export default [
  {
    input: path.resolve('src/index.ts'),
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: 'inline',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: 'inline',
      },
    ],
    plugins: [
        resolve(),
        babel({
            babelHelpers: 'bundled',
            "presets": [
                ["@babel/preset-react", {
                "runtime": "automatic"
              }]
              ],
            extensions: ['.js', '.jsx']
        }),
        postcss({
            config: {
              path: './postcss.config.js',
            },
            extensions: ['.css'],
            minimize: true,
            inject: {
              insertAt: 'top',
            },
            extract: 'dist/esm/main.css',
            plugins: [
              tailwindcss(tailwindConfig),
            ],
        }),
        commonjs(),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': JSON.stringify(devMode ? 'development' : 'production')
        }),
        typescript({tsconfig: "./tsconfig.json",declaration: true,
        declarationDir: 'dist',}),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  },
];
