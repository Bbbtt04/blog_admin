<template>
  <div class="top">
    <div class="left">
      <MenuCollapse/>
    </div>
    <div class="right">
      <MenuTool/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import MenuCollapse from './components/MenuCollapse.vue'
import MenuTool from "@/layout/Header/components/MenuTool.vue";</script>

<style lang='scss' scoped>
.top {
  padding: 30px;
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    align-items: center;
  }
}
</style>