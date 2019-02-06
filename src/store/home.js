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
          setAlerts(context, response.data.alerts)
          setErrors(context, null)
        })
        .catch(error => {
          setErrors(context, error.response.data.errors)
        })
    },

    about (context) {
      return axios.get(API.about)
        .then(response => {
          context.commit('setData', response.data.data)
          // console.log(response.data.alerts)
          setAlerts(context, response.data.alerts)
          setErrors(context, null)
        })
        .catch(error => {
          setErrors(context, error.response.data.errors)
        })
    },

    secure (context) {
      return axios.get(API.secure)
        .then(response => {
          context.commit('setData', response.data.data)
          setAlerts(response.data.alerts)
          setErrors(context, null)
        })
        .catch(error => {
          setErrors(context, error.response.data.errors)
        })
    }
  }
}

function setErrors (context, errors) {
  context.commit('errors/setErrors', errors)
}

function setAlerts (context, alerts) {
  context.commit('errors/setAlerts', alerts)
}
