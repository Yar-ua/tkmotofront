<template>
  <div class="hello">
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
      msg: 'My home page'
    }
  },
  computed: {
    ...mapState('home', {
      data: 'data'
    })
  },

  methods: {
    homeAction: function () {
      this.$store.dispatch('home/home', '')
        .then(response => {
          this.checkIfErrors()
        })
    },
    aboutAction: function () {
      this.$store.dispatch('home/about', '')
        .then(response => {
          this.checkIfErrors()
        })
    },
    secureAction: function () {
      this.$store.dispatch('home/secure', '')
        .then(response => {
          this.checkIfErrors()
        })
    }
  },

  created () {
    this.homeAction()
  }
}
</script>
