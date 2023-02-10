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
      <el-form-item label="密码" size="default">
        <el-input
          v-model="account.pass"
          placeholder="密码"
          type="password"
          size="default"
          clearable
        />
      </el-form-item>
      <el-form-item size="default">
        <el-button type="primary" size="default" @click="Login"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts" setup>
const account = ref({
  user: '',
  pass: '',
});

const Login = () => {
  console.log(account.value);
};
</script>
