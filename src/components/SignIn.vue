<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-toolbar color="grey darken-3">
            <v-toolbar-title class="white--text">Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="[rules.emailRequired, rules.emailValid]"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :rules="[rules.passRequired, rules.passMin, rules.passMax]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :to="{name: 'Home'}">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
            <v-btn
            color="primary"
            :disabled="!valid"
            @click="signInAction"
            >
              SignIn
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: '',
    show: false,
    rules: {
      emailRequired: v => !!v || 'E-mail is required',
      emailValid: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      passRequired: v => !!v || 'Name is required',
      passMin: v => (v && v.length <= 30) || 'Password must be less than 30 characters',
      passMax: v => (v && v.length >= 8) || 'Password must be more than 6 characters'
    },
    valid: true,
    hasError: false
  }),
  computed: {
    ...mapState(['isAuth'])
  },
  methods: {
    signInAction: function () {
      this.$store.dispatch('sign_in', {email: this.email, password: this.password})
        .then(() => {
          this.hasError = false
          this.$router.push({name: 'Home'})
        }).catch(err => {
          if (err.response.status !== 200) {
            this.hasError = true
          }
        })
    },
    created () {
      if (this.isAuth) {
        this.$router.push({name: 'Home'})
      }
    }
  }
}
</script>
