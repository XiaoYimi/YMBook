import type {
  COMMAND,
  MODE,
  ENV_CONF,
  VendorLibs,
  CreateRollupManualChunksFunc,
} from '../../types/config/default';
import type { UserConfig } from 'vite';

import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vue_jsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import AutoImport from 'unplugin-auto-import/vite';

import Compression from 'vite-plugin-compression';

/** 加载 SSR 文件配置 */
import SSRConf from './ssr-config';

/** 获取目录位置 */
const GetFolderPath = (addr: string) => resolve(process.cwd(), addr);

/** 定义可单独打包的模块列表选项 */
const optimizerLibs: VendorLibs[] = [
  { match: ['element-plus'], output: 'element-plus' },
  { match: ['echarts'], output: 'echarts' },
  /**  其它单独打包模块配置 ({ match: [‘模块名称或别名’], output: '输出路径' }) */
];

/** 匹配可单独担保的模块函数 */
const GenerateRollupManualChunks = (
  id: string,
): CreateRollupManualChunksFunc => {
  const node_modules_flag = '[\\/]node_modules[\\/]';
  const node_modules_patt = new RegExp(`${node_modules_flag}`);
  if (node_modules_patt) {
    const matchItem = optimizerLibs.find(item => {
      /** 根据单独打包模块创建对应可匹配的正则表达式 */
      const item_patt = new RegExp(
        `[${node_modules_flag}_?(${item.match.join('*')})(.*)`,
        'ig',
      );
      return item_patt.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};

export default (
  command: COMMAND,
  mode: MODE,
  openSSR: boolean,
  options: ENV_CONF,
) => {
  const isBuild = command === 'build';
  const IsDev = mode === 'development';

  const config: UserConfig = {
    mode,
    base: '/',

    /** ======== 服务基础配置 ======== */
    server: {
      /** 服务器报错页面遮罩 */
      hmr: { overlay: false },

      /** 当前服务基础配置 */
      host: options.VITE_WEBSITE_HOST,
      port: options.VITE_WEBSITE_PORT,
      cors: true,

      /** proxy 代理配置 */
      proxy: {
        /** 请求代理配置，详见 .env 配置文件 */
        '/api': {
          target: IsDev ? options.DEV_PROXY_ADDR : options.PROD_PROXY_ADDR,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    /** ======== 插件选项配置 ======== */
    plugins: [
      vue(),
      /** 支持 jsx,tsx 写法 */
      vue_jsx(),

      /** 使用 svg 图标 */
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd()), options.VITE_ICON_DIR ?? ''],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),

      /** 加载第三方组件 */
      Components({
        resolvers: [
          /** 加载 element-plus 组件 */
          ElementPlusResolver(),

          /** 加载其它组件，详见 unplugin-vue-components/vite 官网 */
        ],
      }),

      /** 动态导入组件 */
      AutoImport({
        /** 动态导入配置选项，具体选项支持详见 unplugin-auto-import/vite 官网 */
        imports: ['vue', 'vue-router'],

        /** 动态导入组件 */
        resolvers: [
          /** 动态导入 element-plus 组件 */
          ElementPlusResolver(),
        ],

        /** 对动态导入的文件进行自动生成类型文件 */
        dts: 'types/auto-import.d.ts',
      }),

      /** 项目压缩 */
      Compression({
        ext: '.gz',
        verbose: true,
        disable: !isBuild,
        threshold: 10240,
        algorithm: 'gzip',
      }),
    ],

    /** ======== 其它相关配置 ======== */
    resolve: {
      /** 别名引用配置 */
      alias: {
        '@': GetFolderPath('src'),
        '#': GetFolderPath('types'),
      },
    },

    /** ======== 打包选项配置 ======== */
    build: {
      target: 'es2015',

      /** 开发时启用 sourcemap，方便定位报错信息 */
      sourcemap: !isBuild,

      rollupOptions: {
        output: {
          manualChunks: GenerateRollupManualChunks,
        },
      },

      /** 超出文件大小的警告限制 */
      chunkSizeWarningLimit: 2048,
    },
  };

  /** ======== SSR 服务配置 ======== */
  openSSR && (config['ssr'] = SSRConf);

  return config;
};
