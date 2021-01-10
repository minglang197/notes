<template>
  <nav>
    <router-link to="/bill" active-class="selected"><Icon class="icon" name="bill"/><span>明细</span></router-link>
    <router-link to="/money" active-class="selected"><Icon class="icon" name = "money"/><span>记账</span></router-link>
    <router-link to="/echart" active-class="selected"><Icon class="icon" name="echart"/><span>图表</span></router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '@/components/Icon.vue';
import {Component} from 'vue-property-decorator';

@Component({components: {Icon}})
export default class Nav extends Vue{
}
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    color: #444;
    a {
      width: 33.3333%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &.selected {
        color: #fece0c;
      }
      .icon {
        height: 30px;
        width: 30px;
      }
    }
  }

</style>