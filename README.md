# GodAraden 的前端项目模板

**使用前请修改 package.json 文件中的*项目名称*与*版本号***

## Github Workflow

本模板通过 Github Workflow 实现 持续部署（CD），使用模板前请先在 Github 仓库 - Settings - Secerts and variables - Actions 中添加 私密变量：

```bash
SERVER_SSH_KEY # ssh 密钥对中的私钥
REMOTE_HOST # 服务器主机 ip
```

而后修改 `.github/workflows/main.yml` 文件中下列几条配置：

```yaml
env:
  PACKED_PATH: # 打包出的文件夹位置，正常为空，vuepress 中为 docs/.vuepress/
  TARGET_DIR: /www/wwwroot/ # 打包好的项目目录上传位置
  PROJECT_DIR: template-fe.araden.top # 打包好的项目目录要改成的名字
```

如果有将密钥之类的信息写入 local 文件的需求，请将上述文件中注释掉的命令取消注释

## 项目的配置文件

配置文件被拆分成了 `./config/vite.config.base.ts`、`./config/vite.config.dev.ts`、`./config/vite.config.prod.ts`，在运行不同的命令时会选择不同的配置文件进行处理

共用配置文件（base）中已预置如下配置：

- 路径别名（已做好 typescript 类型提示）

开发配置文件（dev）中已预置如下配置：

- 开发端口配置（配置信息存储在 .env.development 文件中）
- 服务端代理（配置信息存储在 .env.development 文件中）

生产配置文件（prod）中未预置配置，可根据需要添加如图片等静态资源压缩插件、组件库自动引入插件等

## vue 核心生态库

- vue-router

  - 首先将 `./src/router/routes/index.ts` 这个路由收集模块中设置路由的收集规则（可以按照注释给出的格式设置），其次在 `./src/router/index.ts` 这个路由配置文件中将路由收集模块导出的路由添加到 vue-router 的 routes 选项中
  - 自定义路由的格式类型接口已经写好，后面添加新的路由仅需在 `./src/router/routes/modules` 目录下新建导出指定格式对象的 ts 文件即可
  - 因不清楚具体业务逻辑，故并未预置路由守卫

- pinia
  - 在 `./src/store/modules` 目录下新建 store；在 `./src/store/index.ts` 文件中收集并导出 store
  - 因为 pinia 作为状态管理方案需要强类型提示，所以目前并未设置 store 的收集模块

## 环境变量

项目根目录下有 `.env`、`.env.development`、`.env.production` 三个环境变量文件，主要用于存储站点的一些配置信息和基本信息，如站点 title、站点开发时运行的端口等

跨域信息配置：在 `.env.development`、`.env.production` 中均有 `VITE_PROXY_` 开头的变量，这些变量会在 开发时/打包发布时 按照规则进行解析，用于 服务端代理/请求路径重写。每个变量的后缀应标明其具体用途，如 `BECKEND`、`CAT_API`，变量是实现了如下 interface 的对象经过 json 格式化后得到的字符串：

```typescript
// ./types/vite-env.d.ts
interface ProxyConfig {
  suffix: string // 表示此条规则会匹配以何种前缀开头的 api 请求
  domain: string // api 服务所在的域名
  path: string // 实际发送请求时会将 suffix 替换为 path
}
```

## Tailwind CSS

个人比较喜欢用这个，拯救了我的起名废...
