import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/home/AppIndex'
import AppLibrary from '@/components/library/AppLibrary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/appindex',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/applibrary',
      name: 'AppLibrary',
      component: AppLibrary
    }
  ]
})
