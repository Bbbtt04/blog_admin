<template>
  <div class="content">
    <div class="content-tool">
      <el-button color="#585153">新建文章</el-button>
    </div>
    <div class="content-table">
      <el-table :data="Datalist" fit  stripe style="width: 100%;">
        <el-table-column label="标题" prop="title" width="200"/>
        <el-table-column label="分类" prop="categoryId" width="120"/>
        <el-table-column label="标签" prop="tagsId" width="120"/>
        <el-table-column label="阅读量" prop="views" width="120"/>
        <el-table-column label="描述" prop="description" width="120"/>
        <el-table-column label="状态" prop="status" width="120"/>
        <el-table-column label="置顶" prop="isTop" width="120"/>
        <el-table-column label="评论" prop="isComment" width="120"/>
        <el-table-column label="创建时间" prop="createDate" width="210"/>
        <el-table-column label="更新时间" prop="updateDate" width="210"/>
        <el-table-column fixed="right" label="操作" width="170">
          <template #default>
            <el-button
            >修改
            </el-button
            >
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script lang='ts' setup>
import {onMounted, ref} from "vue";
import {getMainList} from "@/api/article";

let Datalist = ref();

onMounted(() => {
  getMainList().then(data => {
    Datalist.value = data.data
  })
})
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px;
  width: 85vw;
  height: 85vh;
  background-color: white;

  &-tool {
    height: 50px;
    width: 100%;
  }

  &-table {
    margin-top: 20px;
    height: 65vh;
  }

  &-next {
    margin-top: 20px;
    flex: 1;
  }
}
</style>