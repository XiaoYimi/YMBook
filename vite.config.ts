import { defineConfig, UserConfig, loadEnv } from 'vite';

import generateConfig from './config/vite/index';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isServe = command === 'serve';
  const isDev = mode === 'development';

  /** 加载 Node 以及 .env 文件配置 */
  const env = loadEnv(mode, process.cwd(), '');

  const config: UserConfig = generateConfig(
    command,
    mode,
    ssrBuild !== false,
    env,
  );
  return config;
});
