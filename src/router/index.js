import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/pages/page';
import Home from '@/pages/home/home';
import PageElder from '@/pages/elder/page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      children: [
        {
          path: '',
          redirect: 'home',
        },
        {
          path: 'home',
          name: 'xx1',
          component: Home,
        },
        {
          path: 'PageElder',
          name: 'xx1',
          component: PageElder,
        },
      ],
    },
  ],
});
