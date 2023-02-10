/** 基础引用 */
import { defineStore } from 'pinia';
import { Stores } from '@/store/names';

/** 定义 User 仓库 */
export const UserStore = defineStore(Stores.User, {
  state: () => ({
    token: '123456',
  }),

  getters: {},

  actions: {},
});
