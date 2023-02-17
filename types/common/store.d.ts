import type { RouteRecordRaw } from 'vue-router';

/** ======== 组件尺寸 ======== */
export declare type ComponentSize = '';

/** ======== 约束导航菜单 MenuSetting ======== */
export declare type MenuSetting = {
  darkMode?: boolean;
  withAnimate?: boolean;
};

/** ======== 约束仓库 UserStore  ======== */
export declare interface UserStoreState {
  token: string;
  name: string;
  avatar: string;
  email: string;
  roles: string[];
}

/** ======== 约束仓库 RouteStore  ======== */
export declare interface RouteStoreState {
  routes: RouteRecordRaw[];
  dynamicRoutes: RouteRecordRaw[];
}

/** ======== 约束仓库 AppStore  ======== */
export declare interface AppStoreState {
  /** 暗黑模式 */
  device: string;

  /** 组件尺寸 */
  size: ComponentSize;

  /** 语言 */
  language: string;

  /** 菜单导航泪痣、、配置 */
  menu: MenuSetting;
}
