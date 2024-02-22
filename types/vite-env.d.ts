/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 基本环境变量
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
