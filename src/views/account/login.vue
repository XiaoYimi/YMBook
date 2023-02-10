<style lang="scss" scoped></style>

<template>
  <section>
    <el-form>
      <el-form-item label="手机号" size="default">
        <el-input
          v-model="account.user"
          placeholder="用户名"
          size="default"
          clearable
        />
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts" setup>
import { UserStore } from '@/store/user';

const account = ref({
  user: '',
  pass: '',
});
</script>
