import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';

/** 进度条配置 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

/** 引入 element-plus 弹窗组件 */
// import { ElMessage } from 'element-plus';

/* 路由鉴权方案
 * 前端在路由 meta 信息标记 roles 权限
 * 通过后端返回 role 标识，前端将自动过滤并重置权限路由
 */

/** 引入路由实例 */
import router, { IsWhiteRoute } from '@/router/index';

/** 引入仓库 UserStore */
import { UserStore } from '@/store/lib/user';

/** 路由实例生命周期钩子 */
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: Function,
  ) => {
    NProgress.start();

    /** 获取用户 token */
    const token = UserStore().token;

    if (token) {
      /** 有 token, 登陆页转主页 */
      if (to.path === '/login') {
        next({ path: '/' });
        NProgress.done();
      } else {
        /** 有 token, 非登陆页则校验角色身份 */
        if (UserStore().roles.length === 0) {
          /** 有 token,但无角色身份；则尝试请求后台获取角色身份(UserStore.方法) */
          await UserStore().getUserInfo();

          // 再次获取角色身份,根据角色身份动态配置路由
          const roles = UserStore().roles;

          // 再重定向所所访问的路由地址
          next({ ...to, replace: true });
        } else {
          // 有 token 以及 角色身份
          next();
        }
      }
    } else {
      // 没有 token，则检测是否在可访问的白名单中
      // const WithWhiteList = true;
      IsWhiteRoute(to.path) ? next() : next(`/login?redirect=${to.path}`);
      // NProgress.done();
      next();
    }

    /** 判断是否存在 token */
  },
);

router.afterEach((to: RouteLocationNormalized) => {
  console.log(`go to route: ${to.path}`);
  NProgress.done();
});
