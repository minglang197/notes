<template>
  <div class="numberpad">
    <div class="input">{{output}}</div>
    <div class="numpad">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="ok" class="ok">OK</button>
        <button @click="inputContent" class="zero">0</button>
        <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue{
  output = '0'

  inputContent(event: MouseEvent){
    const buttons = (event.target as HTMLButtonElement)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const input = buttons.textContent!
    if(this.output.length === 6){
      window.alert("只支持六位数")
      return;
    }
    if(this.output === '0') {
      if('0123456789'.indexOf(input) >= 0) {
        this.output = input
      }else {
        this.output += input
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input
  }
  remove() {
    if(this.output.length === 1) {
      this.output = '0'
    }else {
      this.output = this.output.slice(0,-1)
    }
  }
  clear(){
    this.output = '0'
  }
  ok(){
    if(this.output === '0') {
      window.alert("请输入正确的钱数")
      return this.output = '0'
    }
    if(this.output === '0.') {
      window.alert("请输入正确的钱数")
      return this.output = '0'
    }
    this.$emit('update:value',this.output)
    this.$emit('submit',this.output)
    this.$router.replace('/bill')
  }
}
</script>

<style lang="scss" scoped>
.numberpad{
  display: flex;
  flex-direction: column;
  .input{
    font-size: 36px;
    font-family: Consolas,monospace;
    text-align: right;
    padding: 0 10px;
    color: black;
  }
  .numpad{
    button{
      width: 25%;
      height: 55px;
      float: left;
      &.ok {
        float: right;
        height: 55*2px;
      }
      &.zero {
        width: 25*2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1){
        background: $bg;
      }
      &:nth-child(2),&:nth-child(5) {
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9) {
        background: darken($bg,4*2%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: darken($bg,4*3%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: darken($bg,4*4%);
      }
      &:nth-child(14) {
        background: darken($bg,4*5%);
      }
      &:nth-child(16),&:nth-child(12){
        background: darken($bg,4*6%);
      }
    }
  }
}
</style>