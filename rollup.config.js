// import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output: {
    file: 'jsjs.js',
    format: 'es'
  },
  plugins: [
    nodeResolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    typescript(),
    commonjs()]
};
