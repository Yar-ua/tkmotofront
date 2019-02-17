<template>
  <div>
    hasAlerts: {{ hasAlert() }}
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Alerts',
  data () {
    return {
      hasAlert: () => {
        if ((this.alerts) && (this.alerts.length !== 0)) {
          return true
        } else {
          return false
        }
      }
    }
  },
  computed: {
    ...mapState('alerts', {
      alerts: 'alerts'
    })
  },
  watch: {
    alerts: function () {
      if (this.hasAlert() === true) {
        this.showAlerts(this.alerts[0])
      }
    }
  },
  methods: {
    showAlerts: function (array) {
      for (var key in array) {
        this.flashMessage.show({
          status: key,
          title: key[0].toUpperCase() + key.slice(1),
          message: array[key]
        })
      }
    }
  }
}
</script>
