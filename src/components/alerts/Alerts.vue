<template>
  <div v-if="hasAlert() === true">
    <v-alert v-for="(value, key) in alerts[0]" :key="key"
      :value="true"
      dismissible
      :type="key"
    >
      {{ value }}
    </v-alert>
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
  }
}
</script>
