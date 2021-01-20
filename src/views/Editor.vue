<template>
  <div class="editor">
    <div class="header">
        <div></div>
        <div class="icons">
          <span>
            <Icons :name="records.tags.name"></Icons>
          </span>
          <p>{{records.tags.value}}</p>
        </div>
        <Icons name="right" @click.native="goBack"></Icons>
    </div>
    <ul>
      <li>
          <span>日期</span>
          <span class="span1">{{getTime(records.createdAt)}}</span>
      </li>
      <li>
          <span>类型</span>
          <span class="span1">{{records.types === '-'? '支出': '收入'}}</span>

      </li>
      <li>
          <span>金额</span>
          <span class="span1">{{records.amounts}}</span>
      </li>
      <li>
          <span>备注</span>
          <span class="span1">{{records.notes}}</span>
      </li>
    </ul>
    <div class="delete">
      <span @click="remove">删除标签</span>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icons from '@/components/Icon.vue';
import clone from '@/lib/clone';
import dayjs from 'dayjs';

@Component({components: {Icons}})

export default class Editor extends Vue{
  records?: RecordItem;

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    for(let i = 0;i<this.recordList.length;i++){
      if(this.recordList[i].id === parseInt(this.$route.params.id)) {
        this.records = clone(this.recordList[i])
      }
    }
    return this.records;
  }
  getTime(string: string){
    let str = dayjs(string).toISOString()
    str = str.slice(0,10)
    return str
  }
  goBack(){
    this.$router.replace('/')
  }
  remove(){
    if (this.records) {
      this.$store.commit('removeRecord', this.records.id);
      this.$router.replace('/');
    }else {
      window.alert('出现错误')
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;
  background-color: #F5F5F5;
  .header {
    height: 88px;
    background-color: #fece0c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    svg {
      height: 26px;
      width: 26px;
    }
    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      span {
        background-color: #f5f5f5;
        padding: 10px 11px;
        border-radius: 50%;
      }
      p {
        padding-top: 5px;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      border-bottom: 1px solid #ddd;
      padding: 20px;
      background-color: #fff;
      span {
          margin-right: 20px;
          color: #aaa;
      }
      .span1 {
        color: #444433;
      }
    }
  }
  .delete{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px ;
    span{
      display: flex;
      height: 40px;
      width: 100px;
      background-color: #fff;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>