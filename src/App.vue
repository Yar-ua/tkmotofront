<template>
  <v-app id="inspire" dark>

    <app-header></app-header>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
          <app-errors></app-errors>
          <app-alerts></app-alerts>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; Yar-ua 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

import Header from '@/components/Header'
import Errors from '@/components/alerts/Errors'
import Alerts from '@/components/alerts/Alerts'

export default {
  name: 'App',
  drawer: false,
  components: {
    'app-header': Header,
    'app-errors': Errors,
    'app-alerts': Alerts
  },
  props: {
    source: String
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
