import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import API from './api'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    body: {}
  },

  mutations: {
    setBody (state, data) {
      state.body = data
    }
  },

  actions: {
    home (context) {
      return axios.get(API.home)
        .then(response => {
          context.commit('setBody', response.data)
        })
    }
  }
})

export default Store
