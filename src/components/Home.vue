<template>
  <div class="hello">

  <template>
    <v-alert v-for="error in errors" :key="error"
      :value="true"
      dismissible
      type="error"
    >
      {{ error }}
    </v-alert>
  </template>

  <template v-if="hasAlert === true">
    <v-alert v-for="(value, key) in alerts[0]" :key="key"
      :value="true"
      dismissible
      :type="key"
    >
      {{ value }}
    </v-alert>
  </template>

    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    error: {{ errors }}<br/>
    alerts: {{ alerts }}<br/>
    hasalert: {{ hasAlert }}<br/>
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
      // hasError: false,
      hasAlert: false
    }
  },
  computed: {
    ...mapState('home', {
      data: 'data'
    }),
    ...mapState('errors', {
      errors: 'errors',
      alerts: 'alerts'
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
      if (this.alerts.length !== 0) {
        this.hasAlert = true
      } else {
        this.hasAlert = false
      }
      // if (this.errors !== '') {
      //   this.hasError = true
      // } else {
      //   this.hasError = false
      // }
    }
  },

  created () {
    this.homeAction()
  }
}
</script>
