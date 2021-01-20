<template>
  <div>
    <Layout>
      <div class="echart">
        <div class="header">
          <div class="tab">
            <span :class="type === '-' && 'selected'" @click = "select('-')">支出</span>
            <span :class="type === '+' && 'selected'" @click = "select('+')">收入</span>
          </div>
        </div>
        <div v-if="type === '-'">
          <Chart :options="x"></Chart>
          <hr>
          <div class="types-top">
            <p>支出排行榜</p>
            <ul>
              <li >
                <span class="wrapper">
                  <span class="wrapper-icon"><Icons :name="getExpend().tags.name"></Icons></span>
                  <span class="wrapper-value">{{getExpend().tags.value}}</span>
                </span>
                <span class="number">{{getExpend().amounts}}</span>
              </li>
            </ul>

          </div>
        </div>
        <div v-else>
          <Chart :options="x"></Chart>
          <hr>
          <div class="types-top">
            <p>收入排行榜</p>
            <ul>
              <li >
                <span class="wrapper">
                  <span class="wrapper-icon"><Icons :name="getIncome().tags.name"></Icons></span>
                  <span class="wrapper-value">{{getIncome().tags.value}}</span>
                </span>
                <span class="number">{{getIncome().amounts}}</span>
              </li>
            </ul>
          </div>
      </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import Chart from '@/components/Chart.vue';
import Icons from '@/components/Icon.vue';

@Component({components: {Layout,Chart,Icons}})

export default class Echart extends Vue {
  type = '-'

  get recordList() {
    return this.$store.state.recordList;

  }
   getExpend() {
    const arr = this.recordList.filter((r: any) => r.types==='-')
    let max = arr[0].amounts
    for(let i = 0;i<arr.length;i++) {
      if(max < arr[i].amounts) {
        max = arr[i].amounts
      }
    }
    for(let j = 0;j<arr.length;j++) {
      if(arr[j].amounts === max) {
        return arr[j]
      }
    }
  }
  getIncome() {
    const arr = this.recordList.filter((r: any) => r.types==='+')
    let max = arr[0].amounts
    for(let i = 0;i<arr.length;i++) {
      if(max < arr[i].amounts) {
        max = arr[i].amounts
      }
    }
    for(let j = 0;j<arr.length;j++) {
      if(arr[j].amounts === max) {
        return arr[j]
      }
    }
  }

  select(){
    if(this.type === '-') {
    this.type = '+'
    }else {
      this.type = '-'
    }
  }
  get x(){
    return {
     grid: {
        left: 30,
          right: 30,
        },
        xAxis: {
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisTick: {show: false}
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [536,5678,323,967,456,346,678,123,123,456,3456,673,876],
          type: 'line',
          itemStyle: {borderColor: '#333'}
        }],
      }
    }
}
</script>

<style lang="scss" scoped>
.echart {
    .header {
      display: flex;
      justify-content: center;
      background-color: #fece0c;
      .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        padding: 22px 0;
        span {
          display: flex;
          align-items: center;
          padding: 6px 50px;
          border: 1px solid #333;
          &.selected{
            color: #fece0c;
            background-color: #333;
          }
        }
      }
    }
    .types-top {
      //padding: 10px 20px;
      p {
        font-size: 18px;
        padding: 10px 20px;
      }
      ul {
        padding: 0 20px;
        background-color: #fff;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .wrapper {
            display: flex;
            padding: 20px 0;
            align-items: center;
            .wrapper-icon {
              display: flex;
              height: 40px;
              width: 40px;
              align-items: center;
              justify-content: center;
              background-color: #eee;
              border-radius: 50%;
              svg {
                height: 20px;
                width: 20px;
              }
            }
            .wrapper-value {
              padding-left: 20px;
            }
          }
          .number {
          }
        }
      }
    }
}
</style>