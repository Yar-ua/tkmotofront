export default {
  namespaced: true,
  state: {
    errors: {},
    alerts: {},
    hasError: false,
    hasAlert: false
  },

  mutations: {
    setErrors (state, errors) {
      state.errors = errors
    },
    setAlerts (state, alerts) {
      state.alerts = alerts
    },
    setHasAlert (state, bool) {
      console.log('aaa')
      state.hasAlert = bool
    }
  }

}
