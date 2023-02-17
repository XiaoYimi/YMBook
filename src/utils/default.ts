import type { RouteRecordRaw } from 'vue-router';

/** 检测路由是否存在子路由 */
export const HasRouteChildren = (route: RouteRecordRaw): boolean => {
  return !!(route.children && route.children.length);
};

// 是否为导航菜单路由,常用于地址导航检测并进行导航菜单高亮
export const IsNavMenuRoute = (
  path: string,
  routes: RouteRecordRaw[],
): boolean => {
  return routes.some(route => {
    const InParent = route.path === path;
    return (
      InParent ||
      (route.children?.length && IsNavMenuRoute(path, route.children))
    );
  });
};
