// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

import i18n from '@/plugins/i18n'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import FlashMessage from '@smartweb/vue-flash-message'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import FlagIcon from 'vue-flag-icon'

import store from '@/store'

Vue.use(Vuetify, {iconfont: 'fa'})
Vue.use(FlashMessage, {strategy: 'multiple'})
Vue.use(FlagIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
