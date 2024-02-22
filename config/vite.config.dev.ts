import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export const devConfig = defineConfig({
  mode: 'development',
  server: {
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (request) => request.replace(new RegExp('^/api'), '/'),
      },
    },
  },
});

export default mergeConfig(devConfig, baseConfig);
