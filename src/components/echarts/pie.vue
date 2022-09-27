<template>
  <div class="echarts-box">
    <div :id="eChart" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { getRelation } from '@/api/tags.js';
import { watch, onMounted, ref } from 'vue';

const eChart = ref("eChart" + Date.now() + Math.random())
let option = ref({
  title: {
    text: '标签数目',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '标签使用',
      type: 'pie',
      radius: '50%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

function filterChartData(data) {
  return data.map(item => {
    let ans = { name: '', value: 0 }
    ans.name = item.name
    ans.value = item.value
    return ans;
  })
}

onMounted(() => {
  getRelation().then(data => {
    option.value.series[0].data = filterChartData(data.data)
  }).then(() => {
    let myChart = echarts.init(document.getElementById(eChart.value))

    myChart.setOption(option.value)
    window.onresize = myChart.resize;
  })
})
</script>

<style scoped>

</style>
