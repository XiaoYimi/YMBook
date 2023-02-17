<style lang="scss" scoped></style>

<template>
  <section></section>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';

const { params, query } = useRoute();
const { path } = params;

useRouter()
  .replace({ path: `/${path}`, query })
  .catch(err => console.log(`跳转发生错误： ${JSON.stringify(err)}`));
</script>
