import type { RouteStoreState } from '#/common/store';

/** 基础引用 */
import { defineStore } from 'pinia';
import { Stores } from '@/store/names';

/** 定义 Routes 仓库 */
export const RouteStore = defineStore(Stores.Route, {
  state: (): RouteStoreState => ({
    routes: [],
    dynamicRoutes: [],
  }),

  getters: {},

  actions: {},
});
