<template>
  <div>
    <label class="notes">
      <span class="note-left">
        <Icon name="note"></Icon>
        <span>备注:</span>
      </span>
      <input v-model="value" placeholder="请输入备注，最多八个字" maxlength="8" class="note-right"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '@/components/Icon.vue'
import {Component,Watch} from 'vue-property-decorator';
@Component({components: {Icon}})
export default class Notes extends Vue{
  value = ''
  @Watch('value')
  onChangeValue (value: string){
    this.$emit('update:value',this.value)
  }
}
</script>

<style lang="scss" scoped>
   .notes{
    display: flex;
    flex-direction: row;
     align-items: center;
     background-color: #f5f5f5;
    .note-left {
      font-size: 18px;
      display: flex;
      padding: 10px;
      svg {
        height: 24px;
      }
      span {
        padding-left: 5px;
      }
    }
     .note-right {
       flex-grow: 1;
       padding-top: 4px;
       font-size: 14px;
     }
}
</style>