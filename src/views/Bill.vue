<template>
  <div>
    <Layout>
      <div class="header">
        <div class="logo">
          <img :src="logo" alt="lucidity的记账簿">
        </div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import {Component} from 'vue-property-decorator';
import logo from '@//assets/images/logo.jpg';


@Component({components: {Layout}})
export default class Bill extends Vue {
  logo: string = logo
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  background-color: #fece0c;
  display: flex;
  flex-direction: column;
  .logo {
    height: 40px;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
}
</style>