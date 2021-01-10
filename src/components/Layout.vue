<template>
  <div class="layout">
    <div class="layout-wrapper">
      <slot></slot>
    </div>
    <Nav class="nav"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue'
import {Component} from 'vue-property-decorator';
@Component({
  components: {Nav}
})export default class Layout extends Vue {
}
</script>

<style lang="scss" scoped>
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .layout-wrapper {
      flex-grow: 1;
    }
    .nav {
      height: 50px;
      background-color: #fff;
      box-shadow: 0 0 0 1px #e4dcdc;
    }
  }

</style>