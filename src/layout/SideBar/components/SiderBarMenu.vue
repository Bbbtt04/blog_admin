<template>
  <el-menu
      :active-text-color="vars.menuActiveText"
      :background-color="vars.menuBg"
      :collapse="appStore.collapse"
      :default-active="CurrentRoute"
      :hide-timeout="0"
      :text-color="vars.menuText"
      :unique-opened="false"
      router
  >
    <template v-for="list in menulist" :key="list.path">
      <!--      多级菜单-->
      <el-sub-menu v-if="list.children && list.children.length > 1" :index="list.path">
        <template #title>
          <component :is="list.meta.icon" class="icon"></component>
          <span class="title">{{ list.meta.title }}</span>
        </template>
        <SiderBarMenu :menulist="list.children"></SiderBarMenu>
      </el-sub-menu>

      <!--      一级菜单-->
      <el-menu-item v-else :index="list?.redirect ||list.path">
        <component :is="list.meta?.icon" class="icon"></component>
        <span v-if="list.children" class="title">{{ list.meta?.title }}</span>
        <p v-else class="title" style="margin-left: 40px">{{ list.meta?.title }}</p>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";
import {useAppStore} from "@/store/modules/app";
import {computed, defineProps} from "vue";
import vars from "@/styles/variables.module.scss";

const props = defineProps({
  menulist: {
    type: Array,
    default: []
  }
})

const router = useRouter();
const route = useRoute();
const appStore = useAppStore();
const CurrentRoute = computed(() => {
  return route.path
})

</script>

<style lang="scss" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 210px;
  overflow: hidden;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}

.el-menu {
  border: none;
}

.icon {
  width: 20px;
  height: 20px;
}

.title {
  font-size: 1rem;
  margin-left: 5px;
}
</style>