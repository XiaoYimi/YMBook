import {
  Router,
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

interface IRouter extends Router {
  matcher: Router;
}

// 引入静态路由、动态路由
import ConstantRoutes from '@/router/routes/constant';
import DynamicRoutes from '@/router/routes/dynamic';

/** 实例化路由对象 */
const router = createRouter({
  routes: ConstantRoutes,
  history: createWebHashHistory(),
}) as IRouter;

/** 导出动态路由，方便使用 */
export const dynamicRoutes = DynamicRoutes;

/** 重置路由 */
export const resetRouter = (): void => {
  const newRouter: IRouter = router;
  router.matcher = newRouter.matcher;
};

/** 配置路由白名单 */
const WhiteRoutes: string[] = ['/login'];

/** 检测是否为白名单路由 */
export const IsWhiteRoute = (path: string): boolean => {
  return WhiteRoutes.some(route => {
    return route.indexOf(path) !== -1;
  });
};

/** 导出路由实例 */
export default router;
