import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
    input: 'src/components/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [typescript()],
    external: ['react', 'react-dom', '@apollo/client']
}