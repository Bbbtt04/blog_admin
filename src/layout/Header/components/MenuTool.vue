<template>
  <el-dropdown trigger="click">
    <el-avatar> user</el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <a href="https://github.com/Bbbtt04" target="_blank">
          <el-dropdown-item>Github</el-dropdown-item>
        </a>
        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>

import {useUserStore} from "@/store/modules/user";

const userStore = useUserStore();

async function handleLogout() {
  userStore.logout()
}
</script>

<style lang='scss' scoped>

</style>