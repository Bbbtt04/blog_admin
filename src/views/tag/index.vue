<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>标签列表</span>
            <el-button class="button" text @click="getTagsList">获取最新列表</el-button>
          </div>
        </template>
        <el-tag
            v-for="item in items"
            :key="item.name"
            class="item"
            closable
            effect="light"
            hit
            size="large"
            @close="handleRemoveTag(item.id)"
        >
          {{ item.name }}
        </el-tag>
      </el-card>
    </el-col>
    <el-col :offset="1" :span="13">
      <el-card class="add">
        <template #header>
          <h1>管理标签</h1>
        </template>
        <el-form
            label-width="80px"
        >
          <el-form-item
              label="标签名称"
              prop="email"
          >
            <el-input v-model="FormData.name"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">创建标签</el-button>
            <el-button @click="resetForm()">清空</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang='ts' setup>
import {onMounted, reactive, ref} from "vue";
import {createTag, getTags, removeTag} from "@/api/tags";
import type {FormInstance} from 'element-plus'
import {ElMessage} from 'element-plus'

let items = ref()
onMounted(() => {
  getTagsList()
})

function getTagsList() {
  getTags().then(data => {
    items.value = data.data.list
  })
}

const FormData = reactive({
  name: ""
})
//表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!FormData.name) ElMessage.error('请输入标签')
  else {
    createTag(FormData).then(data => {
      if (data.success === true) {
        ElMessage.success('创建成功!')
        getTagsList()
      } else {
        ElMessage.error(data.message)
      }
    }).catch(err => {
      ElMessage.error('创建失败')
    })
  }
}

const resetForm = () => {
  FormData.name = null
}

function handleRemoveTag(id) {
  removeTag(id).then((data) => {
    if (data.success === true) {
      if (data.success === true) {
        ElMessage.success('删除成功!')
      }
      getTagsList()
    }
  }).catch(err => {
    ElMessage.error('删除失败')
  })
}
</script>

<style lang='scss' scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin: 10px;
}

.box-card {
  width: 480px;
}

.add {
  height: 300px;
}
</style>