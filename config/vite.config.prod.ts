import { defineConfig, mergeConfig } from 'vite';
import { baseConfig } from './vite.config.base';

export const prodConfig = defineConfig({
  mode: 'production',
  plugins: [],
  build: {},
});

export default mergeConfig(prodConfig, baseConfig);
