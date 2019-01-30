import axios from 'axios'
import API from './api'

export default {
  namespaced: true,
  state: {
    addsList: 'bikes list',
    addItem: {}
  },

  mutations: {
    setBikesList (state, data) {
      state.addsList = data
    },
    updateBikesList (state, data) {
      state.addsList += data
    },
    updateAddItem (state, data) {
      state.addItem = data
    }
  },

  actions: {
    index (context) {
      return axios.get(API.bikesIndex)
        .then(response => {
          context.commit('setBikesList', response.data)
        })
    },
    show (context, params) {
      return axios.get(API.bikesShow(params.id), '')
        .then(response => {
          context.commit('updateAddItem', response.data)
        })
    },
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
    create (context, params) {
      return axios.post(API.bikesCreate, params)
        .then(response => {
          context.commit('updateAddItem', response.data)
          context.commit('updateBikesList', response.data)
        })
    }
    // update (context, params) {
    //   return axios.put(API.product(params.id), params)
    // },
    // delete (context, params) {
    //   return axios.delete(API.product(params.id), '')
    // }
  }
}
