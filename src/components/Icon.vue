<template>
  <svg>
    <use :xlink:href = "`#${name}`"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component,Prop} from 'vue-property-decorator';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
@Component
export default class Icons extends Vue{
  @Prop({required: true, type: String}) name!: string;
}
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;      ////iconfont的官网中的默认样式
  fill: currentColor;
  overflow: hidden;
}
</style>