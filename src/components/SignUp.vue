<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-toolbar color="grey darken-3">
            <v-toolbar-title class="white--text">Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              label="Login..."
              :rules="loginRules"
              v-model="login"
              hint="Enter your login!"
              persistent-hint
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              name="input-10-1"
              label="Enter your password"
              hint="At least 8 characters"
              persistent-hint
              v-model="password"
              min="8"
              :rules="passwordRules"
              :append-icon="watchpass ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (watchpass = !watchpass)"
              :type="watchpass ? 'password' : 'text'"
              counter
            ></v-text-field>
            <v-text-field
              name="input-10-1"
              label="Retype your password"
              hint="At least 8 characters"
              persistent-hint
              v-model="repassword"
              min="8"
              :rules="passwordRules"
              :append-icon-cb="() => (watchpass = !watchpass)"
              :type="watchpass ? 'password' : 'text'"
              counter
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
              @click="SignUpAction"
              >
                SIGN UP
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
  name: 'SignUp',
  data: () => ({
    login: '',
    loginRules: [
      v => !!v || 'Login is required',
      v => (v && v.length <= 30) || 'Login must be less than 30 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
    password: '',
    passwordRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Password must be less than 30 characters',
      v => (v && v.length >= 8) || 'Password must be more than 8 characters'
    ],
    repassword: '',
    watchpass: true,
    valid: true,
    hasError: false
  }),
  computed: {
    ...mapState(['isAuth'])
  },
  methods: {
    SignUpAction: function () {
      if (this.password === this.repassword) {
        this.$store.dispatch('sign_up', {name: this.login, email: this.email, password: this.password})
          .then(() => {
            this.hasError = false
            this.$router.push({name: 'Home'})
          }).catch(err => {
            if (err.response.status !== 200) {
              this.hasError = true
            }
          })
      }
    }
  },
  created () {
    if (this.isAuth) {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
