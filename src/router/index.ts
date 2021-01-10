import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Bill from '@/views/Bill.vue';
import Money from '@/views/Money.vue';
import Echart from '@/views/Echart.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/bill'
  },
  {
    path: '/bill',
    name: 'Bill',
    component: Bill
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/echart',
    name: 'Echart',
    component: Echart
  },


]

const router = new VueRouter({
  routes
})

export default router
