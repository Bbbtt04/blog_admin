<template>
  <el-icon size="1.7rem"  @click="appStore.ChangeCollapse" class="icon" v-if="!appStore.collapse"><Fold /></el-icon>
  <el-icon size="1.7rem"  @click="appStore.ChangeCollapse" class="icon" v-else><Expand /></el-icon>
</template>

<script setup lang='ts'>
import {useAppStore} from "@/store/modules/app";
const appStore = useAppStore()
</script>

<style scoped lang='scss'>
.icon {
  &:hover {
    filter:drop-shadow(10px 10px 20px #161616)
  }
}
</style>