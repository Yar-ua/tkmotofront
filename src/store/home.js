import axios from 'axios'
import API from './api'
import errors from './errors'

export default {
  namespaced: true,
  state: {
    data: ''
  },

  mutations: {
    setData (state, data) {
      state.data = data
    }
  },

  modules: {
    errors
  },

  actions: {

    home (context) {
      return axios.get(API.home)
        .then(response => {
          context.commit('setData', response.data.data)
        })
    },

    about (context) {
      return axios.get(API.about)
        .then(response => {
          context.commit('setData', response.data.data)
        })
    },

    secure (context) {
      return axios.get(API.secure)
        .then(response => {
          context.commit('setData', response.data.data)
        })
    }
  }
}
