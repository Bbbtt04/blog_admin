<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="文章标题">
      <el-input v-model="formInline.title" placeholder="请输入文章标题" />
    </el-form-item>
    <el-form-item label="标签">
      <el-select v-model="formInline.tagsId" placeholder="请选择文章标签" multiple>
        <el-option v-for="item in tagsList" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="formInline.categoryId" placeholder="请选择文章分类">
        <el-option v-for="item in categoriesList" :label="item.name" :value="item.id" />
      </el-select>
    </el-form-item>
    <el-form-item label="文章描述">
      <el-input v-model="formInline.description" placeholder="请选择文章描述" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit" v-if="!id">发布</el-button>
      <el-button type="warning" @click="onSubmit" v-if="id">更新</el-button>
    </el-form-item>
  </el-form>
  <v-md-editor v-model="text" height="700px"></v-md-editor>
</template>


<script setup>
import { onBeforeUnmount, onMounted, reactive, ref, shallowRef } from 'vue'
import { getTags } from "@/api/tags";
import { getCategory } from "@/api/categories";
import { createArticle, getContent, editContent } from "@/api/article";
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus';

let tagsList = ref()
let categoriesList = ref()
let text = ref('hello')

const route = useRoute()
const { id } = route.query

onMounted(() => {
  getTags().then(data => {
    tagsList.value = data.data.list
  })
  getCategory().then(data => {
    categoriesList.value = data.data.list
  })
  if (id) {
    getContent(id).then(data => {
      let res = data.data
      text.value = res.content
      formInline.title = res.title
      formInline.description = res.description
    })
  }
})
const formInline = reactive({
  title: "",
  tagsId: [],
  categoryId: "",
  content: "",
  description: ""
})

const onSubmit = () => {
  if (!text.value || !formInline.description || !formInline.title) {
    ElMessage.error('必填的不能为空哦 !')
  }

  formInline.content = text.value
  if (!id) {
    createArticle(formInline).then(data => {
      if (data.message == 'success') {
        ElMessage.success('发布 !')
      }
    }).catch(err => {
      console.log(err)
    })
  } else {
    editContent(id, formInline).then(data => {
      if (data.message == 'success') {
        ElMessage.success('更新成功 !')
      }
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
