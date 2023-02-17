import type { UserStoreState } from '#/common/store';

/** 基础引用 */
import { defineStore } from 'pinia';
import { Stores } from '@/store/names';
import { UserInfo } from '@/api/user';

/** 定义 User 仓库 */
export const UserStore = defineStore(Stores.User, {
  state: (): UserStoreState => ({
    name: '',
    avatar: '',
    email: '',
    token: '',
    roles: [],
  }),

  getters: {},

  actions: {
    /** 获取用户信息 */
    async getUserInfo() {},
  },
});
