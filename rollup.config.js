import terser from "@rollup/plugin-terser";

const devMode = process.env.NODE_ENV !== 'production';
export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: "es",
            sourceMap: devMode ? 'inline' : false,
            plugins: [terser()],
            sourcemap: devMode ? 'inline' : false,
        }
    }
]