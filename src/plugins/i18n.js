import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    header: {
      settings: 'Settings',
      signIn: 'SignIn',
      signUp: 'SignUp',
      logout: 'Logout'
    },

    home: {
      msg: 'My home page',
      btnHome: 'Home',
      btnAbout: 'About',
      btnSecure: 'Secure'
    },

    page404: {
      msg: 'Page not found'
    },

    pageNoPermission: {
      msg: 'You haven\'t got permission for this page'
    },

    signIn: {
      login: 'Login',
      signIn: 'SignIn',
      cancel: 'Cancel',
      password: 'Password',
      hint: 'At least 8 characters'
    },

    signUp: {
      registration: 'Registration',
      login: 'Login...',
      enterPassword: 'Enter your password',
      retypePassword: 'Retype your password',
      cancel: 'Cancel',
      signUp: 'Sign Up',
      hint: 'At least 8 characters',
      loginHint: 'Enter your login'
    },

    HomeMsg: 'My home page',
    guide: 'For a guide and recipes on how to configure / customize this project,',
    checkout: 'check out the',
    plugins: 'Installed CLI Plugins',
    links: 'Essential Links',
    ecosystem: 'Ecosystem'
  },
  'es': {
    welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
    guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
    checkout: 'revisar la',
    plugins: 'Plugins de CLI instalados',
    links: 'Enlaces esenciales',
    ecosystem: 'Ecosistema'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages // set locale messages
})

export default i18n
