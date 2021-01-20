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
      overflow: auto;
      background: #F5F5F5;

    }
    .nav {
      display: flex;
      height: 50px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    }
  }

</style>