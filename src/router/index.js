import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Page from '@/pages/page'
import PageElder from '@/pages/elder/page'
import PageResource from '@/pages/resource/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path:"",
        redirect: 'page'
      },{
        path:'page',
        name:'xx1',
        component: Page
      },{
        path:'PageElder',
        name:'xx1',
        component: PageElder
      },{
        path:'PageResource',
        name:'xx2',
        component: PageResource
      }]
    }
  ]
})
