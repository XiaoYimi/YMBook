/**
 * piniaStorage 仓库值缓存对象
 * 设计缘由：不管 Vuex，还是 Pinia，都存在 页面一旦刷新，状态值将被丢失；
 * 解决思路：通过 Pinia 插件形式将数据进行本地缓存，读写时对数据进行实时更新；
 */

import { toRaw } from 'vue';
import { webLocalStorage } from '@/cores/function/storage';
import type { PiniaPluginContext } from 'pinia';
declare type PiniaPluginOption = { key?: string };

/** 仓库名前缀值 */
const PiniaKeyPrefix = 'pinia';

/** ======== 使用 Pinia 自定义插件后，可在浏览器本地缓存中查到 ======== */
export const PiniaPlugin = (option: PiniaPluginOption) => {
  return (context: PiniaPluginContext) => {
    /** 通过上下文获取仓库对象 */
    const { store } = context;
    const storeKey = `${option.key ?? PiniaKeyPrefix}-${store.$id}`;
    const data = webLocalStorage.getValue(storeKey);

    /** 开启订阅模式，监听仓库值变化，并同步数据 */
    store.$subscribe(() => {
      /** 同步响应式数据 */
      webLocalStorage.setValue(storeKey, toRaw(store.$state));
    });

    /** 返回静态数据 */
    return { ...data };
  };
};
