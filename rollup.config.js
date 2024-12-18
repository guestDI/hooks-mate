import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.js',
            format: 'es',
        },
    ],
    plugins: [typescript(), nodeResolve(), commonjs()],
    external: ['react', 'react-dom'],
};
