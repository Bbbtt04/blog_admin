<template>
  <ElConfigProvider>
    <router-view></router-view>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import {ElConfigProvider, ElMessage} from 'element-plus'
//全局挂载message
window.$message = ElMessage
</script>

<style lang="scss" scoped></style>
