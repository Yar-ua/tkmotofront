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
    }
  }
}
