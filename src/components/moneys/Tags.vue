<template>
    <div class="tag">
      <ul>
        <li v-for="(tag,index) in tagList" :key="index" @click="select(tag)">
          <span :class="{'selected': tag.name === selectedTag.name}" >
            <Icons :name="tag.name"></Icons>
          </span>
          <p>{{tag.value}}</p>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icons from '@/components/Icon.vue';
import {Component,Prop} from 'vue-property-decorator';

@Component({components:{Icons}})
export default class Tags extends Vue {
  @Prop({required: true})tagList!: TagItem
  @Prop({required: true, type: Object}) selectedTag!: TagItem;


  select(tag: TagItem) {
    this.$emit('update:selectedTag', tag);
  }
}
</script>

<style lang="scss" scoped>
  .tag {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    ul {
      padding: 17px 10px 0 10px;
      overflow: auto;
      li {
        font-size: 14px;
        width: 25%;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 22px;
        span {
          height: 44px;
          width: 44px;
          background-color: #eee;
          border-radius: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
          &.selected{
            background-color: #fece0c;
          }
          svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }

</style>