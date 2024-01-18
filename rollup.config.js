import terser from "@rollup/plugin-terser";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

const devMode = process.env.NODE_ENV !== 'production';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: "es",
        sourcemap: devMode ? 'inline' : false,
    },
    plugins: [
        terser(),
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
        }),
        commonjs(),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': JSON.stringify(devMode ? 'development' : 'production')
        }),
        
    ],
};
