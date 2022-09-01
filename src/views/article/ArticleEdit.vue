<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="文章标题">
      <el-input v-model="formInline.title" placeholder="请输入文章标题"/>
    </el-form-item>
    <el-form-item label="标签">
      <el-select v-model="formInline.tagsId" placeholder="请选择文章标签">
        <el-option v-for="item in categories" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="formInline.categoryId" placeholder="请选择文章分类">
        <el-option v-for="item in tags" :label="item.name" :value="item.id"/>
      </el-select>
    </el-form-item>
    <el-form-item label="文章描述">
      <el-input v-model="formInline.description" type="textarea" placeholder="请选择文章描述"/>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">发布</el-button>
    </el-form-item>
  </el-form>

  <div style="border: 1px solid #ccc">
    <Toolbar
        :defaultConfig="toolbarConfig"
        :editor="editorRef"
        style="border-bottom: 1px solid #ccc"
    />
    <Editor
        ref="editor"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        style="height: 500px; overflow-y: hidden;"
        @onCreated="handleCreated"
    />
  </div>
</template>


<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, onMounted, reactive, ref, shallowRef} from 'vue'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import {getTags} from "@/api/tags";
import {getCategory} from "@/api/categories";
import {createArticle} from "@/api/article";

let editor = ref(null)
let tags = ref()
let categories = ref()

onMounted(() => {
  getTags().then(data => tags.value = data.data)
  getCategory().then(data => categories.value = data.data)
})
const formInline = reactive({
  title: "",
  tagsId: [],
  categoryId: "",
  content: "",
  description: ""
})

const onSubmit = () => {
  formInline.content = valueHtml.value
  console.log(formInline)
  createArticle(formInline).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

//editor
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const toolbarConfig = {}
const editorConfig = {placeholder: '请输入内容...'}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style lang='scss' scoped>

</style>