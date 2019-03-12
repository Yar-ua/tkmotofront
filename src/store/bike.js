import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    addsList: 'bikes list',
    addItem: {},
    loading: false
  },

  getters: {
    isLoading (state) {
      return state.loading
    }
  },

  mutations: {
    setBikesList (state, data) {
      state.addsList = data
      state.loading = false
    },
    updateBikesList (state, data) {
      state.addsList += data
    },
    updateAddItem (state, data) {
      state.addItem = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },

  actions: {
    index (context) {
      context.commit('setLoading', true)
      return axios.get(API.bikes)
        .then(response => {
          context.commit('setBikesList', response.data.data)
          context.commit('updateAddItem', {})
        })
    },
    show (context, params) {
      return axios.get(API.bike(params.id), '')
        .then(response => {
          context.commit('updateAddItem', response.data.data)
        })
    },
    create (context, params) {
      return axios.post(API.bikes, params)
        .then(response => {
          context.commit('updateAddItem', response.data.data)
          context.commit('updateBikesList', response.data.data)
        })
    },
    update (context, params) {
      return axios.put(API.bike(params.id), params)
        .then(response => {
          context.commit('updateAddItem', response.data.data)
        })
    },
    delete (context, params) {
      return axios.delete(API.bike(params.id), '')
    }
  }
}
