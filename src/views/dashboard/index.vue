<template>
  <div class="data">
    <el-row :gutter="20">
      <DataCard :title="`文章数目`" :total="articleCon"></DataCard>
      <DataCard :title="`标签数目`" :total="tagsCon"></DataCard>
      <DataCard :title="`分类数目`" :total="categoriesCon"></DataCard>
      <DataCard :title="`评论数目`"></DataCard>
    </el-row>
  </div>
  <el-row :gutter="10">
    <el-col :span="10">
      <el-card :span="10" class="relation">
        <Pie></Pie>
      </el-card>
    </el-col>
    <el-col :span="14">
      <el-card class="relation" style="margin-left: 30px">
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import DataCard from './components/DataCard.vue'
import Pie from "@/components/echarts/pie.vue"
import {getMainList} from "@/api/article";
import {getTags} from "@/api/tags";
import {getCategory} from "@/api/categories";

let articleCon = ref()
let tagsCon = ref()
let categoriesCon = ref()

onMounted(() => {
  getMainList(1).then(data => articleCon.value = data.data.cnt)
  getTags().then(data => tagsCon.value = data.data.count)
  getCategory().then(data => categoriesCon.value = data.data.count)
})

</script>

<style lang="scss" scoped>
.relation {
  margin-top: 50px;
  height: 50vh;
}

.el-row {
  margin-top: 10px;
}

.data {
  height: 200px;

  .item {
    height: 200px;
  }

  .card-header {
    font-size: large;
  }
}
</style>
