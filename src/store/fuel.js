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
    },
    pushFuelsList (state, data) {
      state.fuelsList.push(data)
    },
    updateFuelsList (state, data) {
      var items = state.fuelsList
      items.splice(items.indexOf(state.fuelsList.find(x => x.id === data.id)), 1, data)
      state.fuelsList = items
    },
    removeItemFromFuelsList (state, data) {
      var items = state.fuelsList
      items.splice(items.indexOf(state.fuelsList.find(x => x.id === data.id)), 1)
      state.fuelsList = items
    }
  },

  actions: {
    index (context, params) {
      return axios.get(API.fuels(params.bikeId))
        .then(response => {
          context.commit('setFuelsList', response.data.data)
        })
    },
    create (context, params) {
      return axios.post(API.fuels(params.bikeId), params)
        .then(response => {
          if (response.status === 200) {
            context.commit('pushFuelsList', response.data.data)
          }
        })
    },
    update (context, params) {
      return axios.put(API.fuel(params.bikeId, params.id), params)
        .then(response => {
          if (response.status === 200) {
            context.commit('updateFuelsList', response.data.data)
          }
        })
    },
    delete (context, params) {
      return axios.delete(API.fuel(params.bikeId, params.id), '')
        .then(response => {
          if (response.status === 200) {
            context.commit('removeItemFromFuelsList', params)
          }
        })
    }
  }
}
