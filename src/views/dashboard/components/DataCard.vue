<template>
  <el-col :span="6">
    <el-card class="item">
      <template #header>
        <div class="card-header">
          <p>{{ props.title }}</p>
        </div>
      </template>
      <div class="content">
        <div class="total">{{ total ? total : 'null' }}</div>
        <div class="icon">
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script lang='ts' setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String,
  total: Number
})
</script>

<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
}

.item {
  height: 200px;

  .content {
    padding: 30px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    .icon {
      height: 1em;
      width: 1em;
    }
  }
}

.card-header {
  font-size: large;
}
</style>
