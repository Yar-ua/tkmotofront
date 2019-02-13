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
          console.log(true)
        } else {
          console.log(false)
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
