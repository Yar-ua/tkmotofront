import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    bikesList: 'bikes list'
  },

  mutations: {
    updateBikesList (state, data) {
      state.bikesList = data
    }
  },

  actions: {
    index (context) {
      return axios.get(API.bikesIndex)
        .then(response => {
          context.commit('updateBikesList', response.data)
        })
    }
    // show (context, params) {
    //   if (params.id === 'new') {
    //     context.commit('updateAddItem', {id: '', name: '', description: '', price: '', image: ''})
    //   } else {
    //     return axios.get(API.product(params.id), '')
    //       .then(response => {
    //         let editedItem = {}
    //         Object.assign(editedItem, response.data)
    //         context.commit('updateAddItem', editedItem)
    //       })
    //   }
    // },
    // create (context, params) {
    //   return axios.post(API.products, params)
    //     .then(response => {
    //       context.commit('updateAddItem', response.data)
    //     })
    // },
    // update (context, params) {
    //   return axios.put(API.product(params.id), params)
    // },
    // delete (context, params) {
    //   return axios.delete(API.product(params.id), '')
    // }
  }
}
