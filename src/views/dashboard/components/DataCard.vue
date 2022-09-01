<template>
  <el-col :span="6">
    <el-card class="item">
      <template #header>
        <div class="card-header">
          <p>{{ props.title }}</p>
        </div>
      </template>
    </el-card>
  </el-col>
</template>

<script lang='ts' setup>
import {defineProps} from "vue";

const props = defineProps({
  title:String,
  total:Number
})
</script>

<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
}

.item {
  height: 200px;
}

.card-header {
  font-size: large;
}
</style>