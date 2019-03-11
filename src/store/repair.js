import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    repairsList: []
  },

  mutations: {
    setRepairsList (state, data) {
      state.repairsList = data
    },
    pushFuelsList (state, data) {
      state.repairsList.push(data)
    },
    updateRepairsList (state, data) {
      var items = state.repairsList
      items.splice(items.indexOf(state.repairsList.find(x => x.id === data.id)), 1, data)
      state.repairsList = items
    },
    removeItemFromRepairList (state, data) {
      var items = state.repairsList
      items.splice(items.indexOf(state.repairsList.find(x => x.id === data.id)), 1)
      state.repairsList = items
    }
  },

  actions: {
    index (context, params) {
      return axios.get(API.repairs(params.bikeId))
        .then(response => {
          context.commit('setRepairsList', response.data.data)
        })
    },
    create (context, params) {
      return axios.post(API.repairs(params.bikeId), params)
        .then(response => {
          if (response.status === 200) {
            context.commit('pushFuelsList', response.data.data)
          }
        })
    },
    update (context, params) {
      return axios.put(API.repair(params.bikeId, params.id), params)
        .then(response => {
          if (response.status === 200) {
            context.commit('updateRepairsList', response.data.data)
          }
        })
    },
    delete (context, params) {
      return axios.delete(API.repair(params.bikeId, params.id), '')
        .then(response => {
          if (response.status === 200) {
            context.commit('removeItemFromRepairList', params)
          }
        })
    }
  }
}
