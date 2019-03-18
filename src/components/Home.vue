<template>
  <div class="hello">
    <h1>{{ $t('home.msg') }}</h1>
    <h1>{{ data }}</h1>
    <div>
      <v-btn
        color="primary"
        @click="homeAction"
      >
        {{ $t('home.btnHome') }}
      </v-btn>
      <v-btn
        color="primary"
        @click="aboutAction"
      >
        {{ $t('home.btnAbout') }}
      </v-btn>
      <v-btn
        color="primary"
        @click="secureAction"
      >
        {{ $t('home.btnSecure') }}
      </v-btn>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  body: '',
  computed: {
    ...mapState('home', {
      data: 'data'
    })
  },

  methods: {
    homeAction: function () {
      this.$store.dispatch('home/home', '')
    },
    aboutAction: function () {
      this.$store.dispatch('home/about', '')
    },
    secureAction: function () {
      this.$store.dispatch('home/secure', '')
    }
  },

  created () {
    this.homeAction()
  }
}
</script>
