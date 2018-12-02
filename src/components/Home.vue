<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ body }}</h1>
    <div>
    <v-btn
      color="primary"
      @click="homeAction"
    >
      home
    </v-btn>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'My home page'
    }
  },
  computed: {
    ...mapState({
      body: 'body'
    })
  },

  methods: {
    homeAction: function () {
      this.$store.dispatch('home', {})
        .then(() => {
          this.hasError = false
          // this.$router.push({name: 'AddsList'})
        }).catch(err => {
          if (err.response.status !== 200) {
            this.hasError = true
          }
        })
    }
  }
}
</script>
