<template>
  <div>
  <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <br />
        <v-list-tile @click="drawer">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="drawer">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <img id="logo" src="@/assets/logo.png" alt="Smiley face"> -->
      <v-toolbar-title>TKMoto</v-toolbar-title>
      <v-btn flat :to="{name: 'Home'}">Home</v-btn>
      <v-btn flat :to="{name: 'Bikes'}">Moto</v-btn>isauth: {{isAuth}}
<!--       <template v-if="user.role === 'admin'">
        <v-toolbar-title>admin mode</v-toolbar-title>
      </template> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
<!--       <template v-if="user.role === 'admin'">
        <v-btn flat :to="{name: 'UsersList'}">Users control</v-btn>
      </template>
        <v-btn flat :to="{name: 'AddsList'}">Market Menu</v-btn> -->
        <template v-if="!isAuth">
          <v-btn flat :to="{name: 'SignIn'}">SignIn</v-btn>
          <v-btn flat :to="{name: 'SignUp'}">SignUp</v-btn>
       </template>
        <template v-if="isAuth">
          <v-btn flat color="yellow">
            User login: {{ user }}
          </v-btn>
          <v-btn flat @click="logoutAction">Logout</v-btn>
       </template>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    drawer: false
  }),

  computed: {
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },

  methods: {
    logoutAction: function () {
      this.$store.dispatch('sign_out', '')
        .then(() => {
          this.$router.push({name: 'Home'})
          this.flashMessage.show({
            status: 'success',
            title: 'Success',
            message: 'You logouted cussessfully'
          })
        })
        // .catch(err => {
        //   if (err.response.status !== 200) {
        //     this.hasError = true
        //     if ((err.response.status === 401) || (err.response.status === 404)) {
        //       localStorage.clear()
        //       this.$router.push({ path: '/' })
        //     }
        //   }
        // })
    }
  }
}
</script>
