/// <reference types="vite/client" />

// API 代理配置：key 以 VITE_PROXY_ 开头，value 为实现了此接口的对象的 JSON 格式
interface ProxyConfig {
  suffix: string;
  domain: string;
  path: string;
}

interface ImportMetaEnv {
  // 基本环境变量
  readonly VITE_APP_TITLE: string;

  // 开发模式 & 生产模式 共有的 环境变量
  readonly VITE_PROXY_BACKEND: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
