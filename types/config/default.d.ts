import type { App } from 'vue';
export declare type COMMAND = 'serve' | 'build';
/** 开发模式：development ｜ production */
export declare type MODE = 'development' | 'production';

/** 节点注入位置 */
export declare type DOM_INJECT = 'body-first' | 'body-last';

/** 压缩算法 */
export declare type ALGORITHM =
  | 'gzip'
  | 'brotliCompress'
  | 'deflate'
  | 'deflateRaw';

/** 打包配置 rollup 选项 */
export declare type VendorLibs = {
  match: string[];
  output: string;
};
export declare type CreateRollupManualChunksFunc =
  | ManualChunksOption
  | string
  | null
  | void;

export declare type ENV_CONF = {
  /** 自定义环境变量，详见 .env 或 .env.[模式] 配置文件 */
  NODE_ENV: MODE;
  VITE_WEBSITE_HOST: string;
  VITE_WEBSITE_PORT: number;
  VITE_ICON_DIR?: string;
  DEV_PROXY_ADDR: string;
  PROD_PROXY_ADDR: string;
  VITE_STORAGE_ENCODE: string | number;

  /** 满足 Node 内部属性的类型声明 */
  [key: any]: any;
};

/** 类型声明插件 */
export declare type DefinePlugin = {
  install(app: App): void;
  [key: string]: any;
};
