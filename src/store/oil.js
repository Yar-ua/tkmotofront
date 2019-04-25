import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    oilLastChange: 0
  },

  mutations: {
    setOilLastChange (state, data) {
      if (data != null) {
        console.log('data ')
        console.log(data)
        state.oilLastChange = data
      }
    }
  },

  actions: {
    oillast (context, params) {
      return axios.get(API.bikeOil(params.id), '')
        .then(response => {
          try {
            context.commit('setOilLastChange', response.data.data)
          } catch (e) {
            context.commit('setOilLastChange', 0)
          }
        })
    },
    createOil (context, params) {
      return axios.post(API.bikeOilCreate(params.bikeId), params)
        .then(response => {
          try {
            console.log('resp ')
            console.log(response.data.data.oil_distance)
            context.commit('setOilLastChange', response.data.data.oil_distance)
          } catch (e) {
            context.commit('setOilLastChange', 0)
          }
        })
    }
  }
}
