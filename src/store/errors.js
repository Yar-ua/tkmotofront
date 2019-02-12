export default {
  namespaced: true,
  state: {
    errors: [],
    alerts: {}
  },

  mutations: {
    setErrors (state, errors) {
      state.errors = errors
    },
    setAlerts (state, alerts) {
      state.alerts = alerts
    }
  }

}
