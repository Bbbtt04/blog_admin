<template>
  <SiderBarTitle></SiderBarTitle>
  <SiderBarMenu :menulist='permissionStore.menuList' class="menu"></SiderBarMenu>
</template>

<script lang='ts' setup>
import SiderBarTitle from "./components/SiderBarTitle.vue";
import SiderBarMenu from './components/SiderBarMenu.vue';
import {usePermissionStore} from "@/store/modules/permission";
import {useUserStore} from "@/store/modules/user";

const userStore = useUserStore()
const permissionStore = usePermissionStore()
permissionStore.generateRoutes([userStore.role])
</script>