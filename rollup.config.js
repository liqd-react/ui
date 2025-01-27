import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts', // Entry point
  output: [
    {
      file: 'dist/index.js', // Output for ESModules
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies (like React)
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS to ESModules
    typescript({ tsconfig: './tsconfig.json' }), // Handles TypeScript
    postcss({
      extensions: ['.css', '.scss'], // Process CSS and SCSS files
      use: ['sass'], // Use Sass for SCSS processing
      //extract: true, // Extract styles into a separate .css file
      inject: true
    }),
  ],
  external: ['react', 'react-dom'], // Do not bundle React and ReactDOM
};
