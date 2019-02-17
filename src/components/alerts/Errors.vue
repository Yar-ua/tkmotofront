<template>
  <div>
    <v-alert v-for="error in errors" :key="error"
    :value="true"
    dismissible
    type="error"
    >
      {{ error }}
    </v-alert>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Errors',
  data () {
    return {
      hasErrors: () => {
        if (this.errors.length !== 0) {
          return true
        } else {
          return false
        }
      }
    }
  },
  computed: {
    ...mapState('errors', {
      errors: 'errors'
    })
  }
}
</script>
