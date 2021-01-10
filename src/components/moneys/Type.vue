<template>
  <div class="type">
    <ul>
      <li :class="value === '-' && 'selected'" @click = "selectType('-')">支出</li>
      <li :class="value === '+' && 'selected'" @click = "selectType('+')">收入</li>
    </ul>
    <button @click="cancel" class="button">取消</button>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Type extends Vue{
  @Prop() readonly value!: string

  selectType(value: string){
    if(value !== '-' && value !== '+') {
      throw new Error('错误')
    }
    this.$emit("update:value",value)
  }
  cancel(){
    this.$router.replace('/bill')
  }

}
</script>

<style lang="scss" scoped>
.type {
  background-color: #fece0c;
  display: flex;
  justify-content: center;
  position: relative;
  ul {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    li {
      position: relative;
      padding: 20px 16px 10px 16px;
      &.selected::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #333;
      }
    }
  }
  .button {
    font-size: 17px;
    position: absolute;
    right: 20px;
    top: 23px
  }
}

</style>