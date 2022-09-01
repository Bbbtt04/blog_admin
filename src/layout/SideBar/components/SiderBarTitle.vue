<template>
  <div :class="{'collapse':appStore.collapse}" class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link v-if="!appStore.collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="!appStore.collapse" class="sidebar-logo" src="@/assets/vue.png">
        <h1 class="sidebar-title"> 小屋管理系统 </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="appStore.collapse" class="sidebar-logo" src="@/assets/vue.png">
        <h1 v-else class="sidebar-title">小屋管理系统</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/modules/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2e3a4d;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }

    & .sidebar-title {
      display: block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

}
</style>