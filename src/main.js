// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import remConfig from './config/rem-config'; // 配置rem
remConfig(); // 执行rem

import './config/font-family-config.css'; // 引入配置字体的css
import './assets/css/base.css'; // 引入cssReset
import './assets/css/public.css'; // 引入全局公用的css

// 引入boxTitle公用组件
import BoxTitle from '@/components/box-title'; 
Vue.component('BoxTitle', BoxTitle);
// 引入echarts公用组件
import Ehcart from '@/components/echarts'; 
Vue.component('ehcart', Ehcart);
// 引入echarts右上角角标公用组件
import RightEchartsInfo from '@/components/right-echarts-info'; 
Vue.component('RightEchartsInfo', RightEchartsInfo);

// 引入eventBus
import EventBus from './bus/eventBus'; 
Vue.prototype.$eventBus = EventBus;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
