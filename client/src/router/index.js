import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/ping';
import Books from '@/components/books';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'ping',
      component: Ping,
    },
  ],
  // mode: 'history',
});
