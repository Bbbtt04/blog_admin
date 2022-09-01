<template>
  <div class="top">
    <div class="left">
      <MenuCollapse/>
      <Breadcrumb class="mar-l"/>
    </div>
    <div class="right">
      <MenuTool/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import MenuCollapse from './components/MenuCollapse.vue'
import MenuTool from "@/layout/Header/components/MenuTool.vue";
import Breadcrumb from "@/layout/Header/components/Breadcrumb.vue";</script>

<style lang='scss' scoped>
.mar-l {
  margin-left: 30px;
}
.top {
  padding: 30px;
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    width: 800px;
    align-items: center;
  }
}
</style>