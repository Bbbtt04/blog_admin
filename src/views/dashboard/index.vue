<template>
  <div class="data">
    <el-row :gutter="20">
      <DataCard :title="`文章数目`"></DataCard>
      <DataCard :title="`标签数目`"></DataCard>
      <DataCard :title="`分类数目`"></DataCard>
      <DataCard :title="`评论数目`"></DataCard>
    </el-row>
  </div>
</template>

<script setup>
import DataCard from './components/DataCard.vue'
</script>

<style lang="scss" scoped>
.data {
  height: 200px;

  .el-row {
    margin-bottom: 20px;
  }
  .item {
    height: 200px;
  }
  .card-header {
    font-size: large;
  }
}
</style>