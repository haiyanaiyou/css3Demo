import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import BoxShadow from '@/views/BoxShadow.vue'
import List from '@/views/List.vue'
import Bg from '@/views/bg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/boxshadow',
      name: 'BoxShadow',
      component: BoxShadow
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/bg',
      name: 'Bg',
      component: Bg
    }
  ]
})
