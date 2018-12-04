import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import API from './api'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    data: ''
  },

  mutations: {
    setData (state, data) {
      state.data = data
    }
  },

  actions: {
    home (context) {
      return axios.get(API.home)
        .then(response => {
          context.commit('setData', response.data)
        })
    },
    about (context) {
      return axios.get(API.about)
        .then(response => {
          context.commit('setData', response.data)
        })
    },
    secure (context) {
      return axios.get(API.secure)
        .then(response => {
          context.commit('setData', response.data)
        })
    }
  }
})

export default Store
