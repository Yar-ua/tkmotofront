<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-toolbar color="grey darken-3">
            <v-toolbar-title class="white--text">{{ $t('signUp.registration') }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              :label="$t('signUp.login')"
              :rules="[rules.loginRequired, rules.loginMax]"
              v-model="login"
              :hint="$t('signUp.loginHint')"
              persistent-hint
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="[rules.emailRequired, rules.emailValid]"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              name="input-10-1"
              :label="$t('signUp.enterPassword')"
              :hint="$t('signUp.hint')"
              persistent-hint
              v-model="password"
              min="8"
              :rules="[rules.passwordRequired, rules.passwordMin, rules.passwordMax]"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              @click:append="show = !show"
              :type="show ? 'twxt' : 'password'"
              counter
            ></v-text-field>
            <v-text-field
              name="input-10-1"
              :label="$t('signUp.retypePassword')"
              :hint="$t('signUp.hint')"
              persistent-hint
              v-model="repassword"
              min="8"
              :rules="[rules.passwordRequired, rules.passwordMin, rules.passwordMax]"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              @click:append="show = !show"
              :type="show ? 'twxt' : 'password'"
              counter
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :to="{name: 'Home'}">{{ $t('signUp.cancel') }}</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
            <v-btn
              color="primary"
              :disabled="!valid"
              @click="SignUpAction"
              >
                {{ $t('signUp.signUp') }}
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
    rules: {
      loginRequired: v => !!v || 'Login is required',
      loginMax: v => (v && v.length <= 30) || 'Login must be less than 30 characters',
      emailRequired: v => !!v || 'E-mail is required',
      emailValid: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      passwordRequired: v => !!v || 'Name is required',
      passwordMax: v => (v && v.length <= 30) || 'Password must be less than 30 characters',
      passwordMin: v => (v && v.length >= 8) || 'Password must be more than 8 characters'
    },
    email: '',
    password: '',
    repassword: '',
    show: false,
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
            this.flashMessage.show({
              status: 'success',
              title: 'Success',
              message: 'You successfully registred already'
            })
            this.$router.push({name: 'Home'})
          }).catch(err => {
            if (err.response.status !== 200) {
              this.hasError = true
              this.flashMessage.show({
                status: 'error',
                title: 'Error',
                message: 'You are not registred'
              })
            }
          })
      }
    },
    created () {
      if (this.isAuth) {
        this.$router.push({name: 'Home'})
      }
    }
  }
}
</script>
