import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    fuelsList: []
  },

  mutations: {
    setFuelsList (state, data) {
      state.fuelsList = data
    }
    // updateBikesList (state, data) {
    //   state.addsList += data
    // },
    // updateAddItem (state, data) {
    //   state.addItem = data
    // }
  },

  actions: {
    index (context, params) {
      return axios.get(API.fuels(params.bikeId))
        .then(response => {
          context.commit('setFuelsList', response.data.data)
          // context.commit('updateAddItem', {})
        })
    }
    // show (context, params) {
    //   return axios.get(API.bike(params.id), '')
    //     .then(response => {
    //       context.commit('updateAddItem', response.data.data)
    //     })
    // },
    // create (context, params) {
    //   return axios.post(API.bikes, params)
    //     .then(response => {
    //       context.commit('updateAddItem', response.data.data)
    //       context.commit('updateBikesList', response.data.data)
    //     })
    // },
    // update (context, params) {
    //   return axios.put(API.bike(params.id), params)
    //     .then(response => {
    //       context.commit('updateAddItem', response.data.data)
    //     })
    // },
    // delete (context, params) {
    //   return axios.delete(API.bike(params.id), '')
    // }
  }
}
