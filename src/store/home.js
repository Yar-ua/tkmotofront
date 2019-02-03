import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    data: '',
    errors: ''
  },

  mutations: {
    setData (state, data) {
      state.data = data
    },
    setErrors (state, errors) {
      state.errors = errors
    }
  },

  actions: {
    home (context) {
      return axios.get(API.home)
        .then(response => {
          context.commit('setData', response.data.data)
          context.commit('setErrors', null)
        })
    },
    about (context) {
      return axios.get(API.about)
        .then(response => {
          context.commit('setData', response.data.data)
          context.commit('setErrors', null)
        })
    },
    secure (context) {
      return axios.get(API.secure)
        .then(response => {
          context.commit('setData', response.data.data)
        })
        .catch(error => {
          context.commit('setErrors', error.response.data.errors)
        })
    }
  }
}
