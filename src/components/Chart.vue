<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
import echarts, {EChartOption} from 'echarts';
@Component
export default class Chart extends Vue {
@Prop() options?: EChartOption
  mounted(){
  if(this.options === undefined) {
    return console.error('option为空')
  }
  const chart = echarts.init(this.$refs.chart as HTMLDivElement)
  chart.setOption(this.options)
}
}
</script>

<style lang="scss" scoped>
.chart {
  height: 250px;
}
</style>