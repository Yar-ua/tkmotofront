import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
