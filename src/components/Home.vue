<template>
  <div class="hello">

  <template v-if="hasError === true">
    <v-alert
      :value="true"
      dismissible
      type="success"
    >
      {{ errors }}
    </v-alert>
  </template>

    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    err: {{ errors }}
    haserr: {{ hasError }}
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
      alert: false,
      alertType: 'success',
      hasError: false
    }
  },
  computed: {
    ...mapState('home', {
      data: 'data',
      errors: 'errors'
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
    },
    checkIfErrors () {
      if (this.errors !== null) {
        this.hasError = true
      } else {
        this.hasError = false
      }
    }
  },

  created () {
    this.homeAction()
  }
}
</script>
