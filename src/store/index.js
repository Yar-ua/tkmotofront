import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import API from './api'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    isAuth: !!localStorage.isAuth,
    data: '',
    tokens: {
      accessToken: localStorage.accessToken ? localStorage.accessToken : '',
      client: localStorage.client ? localStorage.client : '',
      expiry: localStorage.expiry ? localStorage.expiry : '',
      bearer: localStorage.bearer ? localStorage.bearer : '',
      uid: localStorage.uid ? localStorage.uid : ''
    },
    user: {}
  },

  mutations: {
    setData (state, data) {
      state.data = data
    },
    updateAuth (state, data) {
      localStorage.isAuth = data
      state.isAuth = data
    },
    updateUser (state, data) {
      localStorage.id = data['id']
      localStorage.user = data['name']
      localStorage.email = data['email']
      state.user = {
        id: data.id,
        user: data.name,
        email: data.email
      }
    },
    updateTokens (state, headers) {
      localStorage.accessToken = headers['access-token']
      localStorage.client = headers['client']
      localStorage.expiry = headers['expiry']
      localStorage.bearer = headers['Bearer']
      localStorage.uid = headers['uid']
      state.tokens = {
        accessToken: headers['access-token'],
        client: headers['client'],
        expiry: headers['expiry'],
        bearer: headers['Bearer'],
        uid: headers['uid']
      }
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
    },
    sign_up (context, params) {
      return axios.post(API.sign_up, params)
        .then(response => {
          context.commit('updateUser', response.data)
          context.commit('updateAuth', true)
          context.commit('updateTokens', response.headers)
        })
    },
    sign_in (context, params) {
      return axios.post(API.sign_in, params)
        .then(response => {
          context.commit('updateUser', response.data)
          context.commit('updateAuth', true)
          context.commit('updateTokens', response.headers)
        })
    },
    sign_out (context) {
      return axios.delete(API.sign_out, '')
        .then(response => {
          context.commit('updateUser', {'id': '', 'name': '', 'email': ''})
          context.commit('updateAuth', false)
          context.commit('updateTokens', response.headers)
          localStorage.clear()
        })
    }
  }
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  setTokensInHeaders(config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

function setTokensInHeaders (config) {
  config.headers.common['access-token'] = localStorage.accessToken
  config.headers.common['client'] = localStorage.client
  config.headers.common['expiry'] = localStorage.expiry
  config.headers.common['Bearer'] = localStorage.bearer
  config.headers.common['uid'] = localStorage.uid
  return config
}

export default Store
