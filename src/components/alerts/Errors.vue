<template>
  <div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Errors',
  data () {
    return {
      hasErrors: () => {
        if ((this.errors) && (this.errors.length !== 0)) {
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
  },
  watch: {
    errors: function () {
      if (this.hasErrors() === true) {
        this.flashMessage.show({status: 'error', title: 'Error', message: this.errors})
      }
    }
  }
}
</script>
