import { UserConfig, ProxyOptions, mergeConfig, loadEnv } from 'vite';
import baseConfig from './vite.config.base';

const envs = loadEnv(
  process.env.NODE_ENV || 'development',
  '',
) as ImportMetaEnv;
const proxy: Record<string, ProxyOptions> = {};

for (const key in envs) {
  if (key.startsWith('VITE_PROXY')) {
    const { suffix, domain, path } = JSON.parse(envs[key]) as ProxyConfig;
    proxy[suffix] = {
      target: domain,
      changeOrigin: true,
      rewrite: (request) => request.replace(new RegExp(suffix), path),
    };
  }
}

export default mergeConfig(
  {
    mode: 'development',
    server: {
      port: 8080,
      proxy,
    },
  } as UserConfig,
  baseConfig,
);
