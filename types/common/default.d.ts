import type { RouteRecordRaw } from 'vue-router';
/** ======== 自定义拓展类型声明函数 ======== */

/** 合并对象内部属性类型声明,两对象中不能同时存在同名属性 */
export declare type CombineObjType<
  Obj1 extends Record<string, any>,
  Obj2 extends Record<string, any>,
> = {
  [K in keyof (Obj1 & Obj2)]: K extends keyof Obj1
    ? Obj1[K]
    : K extends keyof Obj2
    ? Obj2[K]
    : never;
};

export declare interface NavMenuRoute extends RouteRecordRaw {
  id: string;
  pid: string;
  sort?: number;
  path: string;
  redirect?: string;
  children?: NavMenuRoute[];
}
