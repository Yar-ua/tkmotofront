import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page404 from '@/components/Page404'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

import Bikes from '@/components/bikes/Bikes'
import BikeForm from '@/components/bikes/BikeForm'

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
    {
      path: '/bikes',
      name: 'Bikes',
      component: Bikes
    },
    {
      path: '/bikes/:id(\\d+|new)',
      name: 'BikeForm',
      component: BikeForm
    }
  ]
})
