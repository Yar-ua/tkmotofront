import axios from 'axios'
import API from './api'

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

  actions: {
    home (context) {
      return axios.get(API.home)
        .then(response => {
          context.commit('setData', response)
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
}
