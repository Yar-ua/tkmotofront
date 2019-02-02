import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page404 from '@/components/Page404'
import PageNoPermission from '@/components/PageNoPermission'

import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

import Bikes from '@/components/bikes/Bikes'
import BikeForm from '@/components/bikes/BikeForm'
import BikeItem from '@/components/bikes/BikeItem'

import store from '../store'

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
    },
    {
      path: '/no_permission',
      name: 'PageNoPermission',
      component: PageNoPermission
    },
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    // bikes CRUD
    // index
    {
      path: '/bikes',
      name: 'Bikes',
      component: Bikes
    },
    // create, edit
    {
      path: '/bikes/:id(\\d+|new)',
      name: 'BikeForm',
      component: BikeForm,
      beforeEnter (to, from, next) {
        if (store.getters.isAuth) {
          next()
        } else {
          next('/no_permission')
        }
      }
    },
    // show
    {
      path: '/bikes/:id(\\d+)' + '/show',
      name: 'BikeItem',
      component: BikeItem
    }
  ]
})
