<template>
  <AppProvider></AppProvider>
</template>

<script lang="ts" setup>
import AppProvider from '@/components/common/AppProvider.vue'
import '@/styles/variables.module.scss'</script>
<style lang="scss">
#nprogress .bar {
  background: #ff81c3 !important;
  height: 3px !important;
}

body {
  overflow: hidden;
  background-color: #f5f7f9;
}

</style>