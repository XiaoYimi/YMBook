<style lang="scss" scoped></style>

<template>
  <el-aside width="200">
    <el-menu :default-active="activePath" class="">
      <template v-for="subMenu in routes" :key="subMenu.path">
        <nav-item :menu="subMenu" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import NavItem from '@/cores/layout/component/nav-item.vue';
import { webLocalStorage } from '@/cores/function/storage';
import { IsNavMenuRoute } from '@/utils/default';
import router from '@/router/index';

const activePath = computed(() => webLocalStorage.getValue('menu-index')) ?? '';

const routes = ref([
  {
    id: '1',
    pid: '0',
    path: '/1',
    name: '1',
    children: [{ id: '3-1', pid: '1-1', path: '/about', name: '1-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '2',
    pid: '0',
    path: '/workbench',
    name: '2',
    children: [],
    sort: 0,
  },
  {
    id: '3',
    pid: '0',
    path: '/3',
    name: '3',
    children: [{ id: '3-1', pid: '3-1', path: '3-1', name: '3-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '4',
    pid: '0',
    path: '/4',
    name: '4',
    sort: 0,
  },
  {
    id: '5',
    pid: '0',
    path: '/5',
    name: '5',
    children: [{ id: '3-1', pid: '5-1', path: '5-1', name: '5-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '6',
    pid: '0',
    path: '/6',
    name: '6',
    sort: 0,
  },
  {
    id: '7',
    pid: '0',
    path: '/7',
    name: '7',
    children: [{ id: '3-1', pid: '7-1', path: '7-1', name: '7-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '8',
    pid: '0',
    path: '/8',
    name: '8',
    sort: 0,
  },
  {
    id: '9',
    pid: '0',
    path: '/9',
    name: '9',
    children: [{ id: '3-1', pid: '9-1', path: '9-1', name: '9-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '10',
    pid: '0',
    path: '/10',
    name: '10',
    sort: 0,
  },
  // {
  //   id: '11',
  //   pid: '0',
  //   path: '/11',
  //   name: '11',
  //   children: [{ id: '3-1', pid: '11-1', path: '11-1', name: '11-1', sort: 0 }],
  //   sort: 0,
  // },
  // {
  //   id: '12',
  //   pid: '0',
  //   path: '/12',
  //   name: '12',
  //   sort: 0,
  // },
  {
    id: '13',
    pid: '0',
    path: '/13',
    name: '13',
    children: [{ id: '3-1', pid: '13-1', path: '13-1', name: '13-1', sort: 0 }],
    sort: 0,
  },
  {
    id: '14',
    pid: '0',
    path: '/14',
    name: '14',
    sort: 0,
  },
]);

/** 导航高亮 */
// const currentRoutePath = router.currentRoute.value.fullPath;
// IsNavMenuRoute(currentRoutePath, routes.value) &&
//   webLocalStorage.setValue('menu-index', currentRoutePath);
</script>
