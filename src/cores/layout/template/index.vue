<style lang="scss" scoped></style>

<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <nav-menu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavMenu from '@/cores/layout/component/nav-menu.vue';
</script>
