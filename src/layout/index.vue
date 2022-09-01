<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="appStore.collapse ? '60px' : '210px'">
        <SideBar/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "./SideBar/index.vue";
import Header from './Header/index.vue'
import {useAppStore} from "@/store/modules/app";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.common-layout {
  .el {
    &-aside {
      height: 100vh;
      background-color: #354259;
      overflow: hidden;
      transition: width 0.6s;
    }

    &-header {
      display: flex;
    }
  }
}
.main{
  width: 100%;
  height: 100%;
}
</style>
