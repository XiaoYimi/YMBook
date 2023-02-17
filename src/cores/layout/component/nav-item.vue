<style lang="scss" scoped></style>

<template>
  <!-- 渲染多级菜单 -->
  <template v-if="HasRouteChildren(props.menu)">
    <el-sub-menu :index="props.menu.path">
      <template #title>
        <el-icon>bb</el-icon>
        <span>nnav {{ props.menu.name }}</span>
      </template>
      <template v-for="subMenu in props.menu.children" :key="subMenu.name">
        <nav-item :menu="subMenu" />
      </template>
    </el-sub-menu>
  </template>
  <!-- 渲染一级菜单 -->
  <template v-else>
    <el-menu-item
      :index="props.menu.path"
      :key="props.menu.name"
      @click="navigateTab(props.menu.path)"
    >
      <template #title>
        <el-icon>bb</el-icon>
        <span>nav {{ props.menu.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import router from '@/router/index';
import { HasRouteChildren } from '@/utils/default';
import { webLocalStorage } from '@/cores/function/storage';

// 获取组件传值
const props = withDefaults(defineProps<{ menu: RouteRecordRaw }>(), {});

// 导航路由跳转并设置高亮
const navigateTab = (path: string) => {
  // 保存导航栏高亮配置值
  webLocalStorage.setValue('menu-index', path);
  router.push({ path: path });
};
</script>
