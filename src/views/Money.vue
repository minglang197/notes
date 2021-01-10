<template>
  <div class="money">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"></NumberPad>
    <Notes @update:value="onUpdateNote"></Notes>
    <Tags :tag-list="dataSource" @update:value="onUpdateTags"></Tags>
    <Type :value.sync = 'record.types' ></Type>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/moneys/Tags.vue';
import Notes from '@/components/moneys/Notes.vue';
import NumberPad from '@/components/moneys/NumberPad.vue';
import Type from '@/components/moneys/Type.vue';
import IconConst from '@/constant/IconConst';
type Record= {
    tags: TagItem;
    notes: string;
    types: string;
    amounts: string;
}

@Component({components: {Type,Tags,Notes,NumberPad}})

export default class Money extends Vue{
  dataSource= IconConst
  record: Record = {
    tags: {name: 'shop',value: '购物'},
    notes: '',
    types: '-',
    amounts: '0',

  }
  onUpdateNote(value: string){
    this.record.notes = value
  }
  onUpdateAmount(value: string){
    this.record.amounts = value
  }
  onUpdateTags(value: TagItem){
    this.record.tags = value
  }
}
</script>

<style lang="scss" scoped>
  .money {
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
  }
</style>