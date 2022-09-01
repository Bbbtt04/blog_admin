<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-for="(item, index) in breadList">
      <el-breadcrumb-item
          v-if="item.name"
          :key="item.meta"
          :to="item.path"
      >{{ item.meta.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import {computed} from "vue";
import {ArrowRight} from '@element-plus/icons-vue';
import {useRoute} from "vue-router";

let route = useRoute()
let breadList = computed(() => {
  return route.matched.filter(item => item.meta.title)
})
</script>

<style lang='scss' scoped>

</style>