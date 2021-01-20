<template>
  <div class="money">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
    <Notes @update:value="onUpdateNote"></Notes>
    <Tags :tag-list="dataSource" :selected-tag.sync="record.tags"></Tags>
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
import RecordIcon from '@/constant/IconConstant';


@Component({components: {Type,Tags,Notes,NumberPad},
})

export default class Money extends Vue {
  dataSource = RecordIcon

  record: RecordItem = {
    tags: {name: 'shop', value: '购物'},
    notes: '',
    types: '-',
    amounts: 0,
    createdAt: '',
    id: 0,
  }
  get recordList() {
    return this.$store.state.recordList;
  }

  onUpdateNote(value: string) {
    this.record.notes = value
  }

  onUpdateAmount(value: string) {
    this.record.amounts = parseFloat(value)
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record)
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
