export default {
  namespaced: true,
  state: {
    alerts: {}
  },

  mutations: {
    setAlerts (state, alerts) {
      state.alerts = alerts
    }
  }

}
