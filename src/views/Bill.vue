<template>
  <div>
    <Layout>
      <div class="bill">
        <div class="header">
          <div class="logo">
            <img :src="logo" alt="lucidity的记账簿">
          </div>
          <div class="wrapper">
            <span>{{getYear(year)}} </span>
            <span>支出: {{getSub()}}</span>
            <span>收入: {{getAdd()}}</span>
          </div>
        </div>
        <ol v-if="groupedList.length > 0">
          <li v-for="(group,index) in groupedList" :key="index" class="recordlist">
            <div class="title">
              <span>{{beauty(group.title)}}</span>
            </div>
            <div class="xxx">
              <router-link v-for="(item,index) in group.items" :key="index" :to="`/bill/editor/${item.id}`" class="yyy">
                <div class="item">
                  <div>
                    <Icons :name="item.tags.name"></Icons>
                  </div>
                  <span>{{item.tags.value}}</span>
                </div>
                <span>{{item.types === '-'? '-': ''}}{{item.amounts}}</span>
              </router-link>
            </div>
          </li>
        </ol>
        <div v-else class="noResult">
          <Icons name="records"></Icons>
          <span>还没有记录哦，快去记一笔吧</span></div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import {Component} from 'vue-property-decorator';
import logo from '@//assets/images/logo.jpg';
import Icons from '@/components/Icon.vue';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
@Component({components: {Layout,Icons},})
export default class Bill extends Vue {
  [x: string]: any;

  logo: string = logo
  year = new Date().toISOString()

  get recordList() {
    return this.$store.state.recordList;
  }

  get groupedList() {
    const {recordList} = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
        .filter((r: any) => r.type === this.type)
        .sort((a: any,b: any) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    type Result = { title: string; items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    return result;
  }
  beauty(string: string) {
    const now = dayjs()
    if (dayjs(string).isSame(now, 'day')) {
      return '今天'
    } else if (dayjs(string).isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天'
    } else {
      return dayjs(string).format('M月DD日')
    }
  }

  getYear(year: string) {
    return dayjs(year).format('YYYY年MM月')
  }

  getSub() {
    let sub = 0
    const moneyList = clone(this.recordList)
    for (let i = 0; i < moneyList.length; i++) {
      if(moneyList[i].types === '-') {
        sub = (sub * 10000 + moneyList[i].amounts * 10000) / 10000
      }
    }
    return sub
  }
  getAdd() {
    let add = 0
    const moneyList = clone(this.recordList)
    for (let i = 0; i < moneyList.length; i++) {
      if(moneyList[i].types === '+') {
        add = (add * 10000  + (moneyList[i].amounts) * 10000) / 10000
      }
    }
    return add;
  }

}


</script>

<style lang="scss" scoped>
.bill {
  display: flex;
  flex-direction: column;
  .header {
    background-color: #fece0c;
    display: flex;
    flex-direction: column;
    .logo {
      height: 44px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
      }
    }

    .wrapper {
      display: flex;
      font-size: 16px;
      flex-grow: 1;
      justify-content: space-between;
      padding: 15px 20px 10px;
    }
  }
  ol {
    .recordlist{
      display: flex;
      flex-grow: 1;
      overflow: auto;
      flex-direction: column;
      .title {
        display: flex;
        justify-content: space-between;
        color: #444433;
        font-size: 13px;
        padding: 7px 20px;
      }
      .xxx {
        font-size: 16px;
        align-items: center;
        .yyy {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          //margin-top: 10px;
          align-items: center;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          .item {
            display: flex;
            align-items: center;
            div{
              padding: 5px 6px;
              border-radius: 50%;
              background-color: #f5f5f5;
              svg {
                height: 24px;
                width: 24px;
              }
            }
            span {
              padding-left: 8px;
            }
          }
        }
      }

    }
  }
  .noResult {
    display: flex;
    padding-top: 200px;
    font-size: 14px;
    flex-direction: column;
    align-items: center;
    svg {
      height: 70px;
      width: 70px;
      color: #666;
    }
    span {
      padding-top: 20px;
      color: #999;

    }
  }
}
</style>