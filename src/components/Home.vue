<template>
  <div class="hello">
    <v-alert
      v-model="alert"
      dismissible
      type="error"
    >
      You must register or sign in
    </v-alert>
    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    <div>
    <v-btn
      color="primary"
      @click="homeAction"
    >
      home
    </v-btn>
    <v-btn
      color="primary"
      @click="aboutAction"
    >
      about
    </v-btn>
    <v-btn
      color="primary"
      @click="secureAction"
    >
      secure
    </v-btn>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  body: '',
  data () {
    return {
      msg: 'My home page',
      alert: false
    }
  },
  computed: {
    ...mapState({
      data: 'data'
    })
  },

  methods: {
    homeAction: function () {
      this.$store.dispatch('home', '')
        .catch(err => {
          if (err.response.status !== 200) {
            this.hasError = true
          }
        })
    },
    aboutAction: function () {
      this.$store.dispatch('about', '')
        .catch(err => {
          if (err.response.status !== 200) {
            this.hasError = true
          }
        })
    },
    secureAction: function () {
      this.$store.dispatch('secure', '')
        .catch(err => {
          if (err.response.status !== 200) {
            // this.hasError = true,
            this.alert = true
          }
        })
    }
  }
}
</script>
