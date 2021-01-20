<template>
  <div class="type">
    <ul>
      <li :class="value === '-' && 'selected'" @click = "selectType('-')">支出</li>
      <li :class="value === '+' && 'selected'" @click = "selectType('+')">收入</li>
    </ul>
    <Icons @click.native="cancel" name="right">取消</Icons>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icons from '@/components/Icon.vue';
@Component({components:{Icons}})
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
      padding: 10px 16px 10px 16px;
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
  svg {
    position: absolute;
    right: 6px;
    top: 14px;
    height: 24px;
    width: 24px;

  }
}

</style>