<template>
  <div class="content">
    <div class="content-tool">
      <el-button color="#585153" @click="addArticle">新建文章</el-button>
    </div>
    <div class="content-table">
      <el-table :data="articleData?.list" :row-style="rowStyle" fit stripe style="width: 100%;">
        <el-table-column label="标题" prop="title" width="150"/>
        <el-table-column label="分类" prop="tags" width="150">
          <template #default="scope">
            <el-tag v-for="item in scope.row.tags"> {{ item.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="标签" prop="category" width="120">
          <template #default="scope">
            <el-tag v-if="scope.row.category?.name"> {{ scope.row.category?.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="阅读量" prop="views" width="100">
          <template #default="scope">
            <el-tag round size="large" type="warning"> {{ scope.row.views }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="description" width="120"/>
        <el-table-column label="状态" prop="status" width="120"/>
        <el-table-column label="置顶" prop="isTop" width="120"/>
        <el-table-column label="评论" prop="isComment" width="120"/>
        <el-table-column label="创建时间" prop="createdDate" width="210"/>
        <el-table-column fixed="right" label="操作" prop="id" width="170">
          <template #default="scope">
            <el-button @click="changeArticle(scope.row.id)">修改</el-button>
            <el-button type="danger" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          v-model:current-page="page"
          :total="articleData?.cnt"
          background
          layout="total , prev, pager, next"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import {onMounted, ref, watch} from "vue";
import {getMainList, removeContent} from "@/api/article";
import {router} from "@/router";
import {formatDate} from "@/utils";


let articleData = ref();
let page = ref(1)

onMounted(() => {
  getList()
})

function getList(page = 1) {
  getMainList(page).then(data => {
    articleData.value = data.data
    console.log(articleData.value)
    articleData.value.list.forEach(item => {
      item.createdDate = formatDate(item.createdDate)
    })
  })
}

function rowStyle() {
  return `height: 55px`
}

function addArticle() {
  router.push({name: 'add'})
}

function remove(id) {
  removeContent(id).then(data => {
    getList()
  })
}

function changeArticle(id) {
  router.push({name:'add',query:{id}})
}

watch(page, () => {
  getList(page.value)
})
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px;
  width: 85vw;
  height: 90vh;
  background-color: white;

  &-tool {
    height: 50px;
    width: 100%;
  }

  &-table {
    height: 65vh;

    .el-pagination {
      float: right;
      margin-top: 30px;
    }
  }

  &-next {
    margin-top: 20px;
    flex: 1;
  }
}
</style>