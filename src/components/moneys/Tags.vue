<template>
    <div class="tag">
      <ul>
        <li v-for="(item,index) in tagList" :key="index" >
          <span :class="{active: index === current}" @click="toggle(index)">
            <Icons :name="item.name"></Icons>
          </span>
          <p>{{item.value}}</p>
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

  current = 0
  toggle(index: number) {
    console.log(index);
    this.current = index
    this.$emit('update:value',this.current)
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
        margin-bottom: 20px;
        span {
          height: 44px;
          width: 44px;
          background-color: #eee;
          border-radius: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
          &.active{
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