import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/cores/layout/template/index.vue';

export default [
  {
    name: 'layout',
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/views/common/dashboard.vue'),
        meta: {
          title: 'dashboard',
          icon: 'home',
        },
      },
    ],
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/common/redirect.vue'),
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/common/login.vue'),
  },
] as RouteRecordRaw[];
