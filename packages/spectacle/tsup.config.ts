import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  outDir: './lib',
  clean: false,
  external: ['react', 'react-dom'],
  dts: true,
  format: ['cjs', 'esm', 'iife'],
  skipNodeModulesBundle: true,
  globalName: 'Spectacle',
  target: 'es6',

  /**
   *  - for iife build, set platform to "browser" and define process.env.NODE_ENV
   */
  esbuildOptions: (options, context) => {
    if (context.format === 'iife') {
      options.minify = true;
      options.platform = 'browser';
      options.define!['process.env.NODE_ENV'] = '"production"';
    }
  }
});
