import type { AppStoreState } from '#/common/store';

import { defineStore } from 'pinia';
import { Stores } from '@/store/names';

export const MenuStore = defineStore(Stores.App, {
  state: (): AppStoreState => ({
    device: '',
    language: '',
    size: '',
    menu: {},
  }),

  getters: {},

  actions: {},
});
