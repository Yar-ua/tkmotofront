<template>
  <v-container fluid grid-list-lg>
    <v-toolbar>
    <v-toolbar-title class="white--text">
      <h4>{{ msg }}</h4>
    </v-toolbar-title>
      <v-spacer>
        <v-flex xs12 sm6 class="py-2">
        </v-flex>
      </v-spacer>
      <template v-if="isAuth">
        <v-btn
          color="red darken-3"
          :to="{name: 'BikeForm', params: {id: 'new'}}"
        >
          Create new bike
        </v-btn>
      </template>
    </v-toolbar>
    <template>
      <v-progress-linear
        :indeterminate="true"
        :hidden="!isLoading"
        color="deep-orange lighten-2"
      ></v-progress-linear>
    </template>
    <v-layout row wrap v-for="item in bikesList" :key="item.id">
      <v-flex xs12>
        <v-card color="purple" class="white--text">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <u v-if="user.id === item.user_id">
                    your bike
                  </u>
                  <div class="headline">{{ item.name }}</div>
                  <div>Engine volume: {{ item.volume }} ccm3</div>
                  <div>Color: {{ item.color }}</div>
                  <div>Year: {{ item.year }}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                height="125px"
                contain
              ></v-img>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="pa-3">
            <template v-if="item.id">
              <v-btn
                block
                color="secondary"
                dark
                :to="{name: 'BikeItem', params: {id: item.id}}"
                >SHOW MORE
              </v-btn>
            </template>
            <v-spacer></v-spacer>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Bikes',
  body: '',
  data () {
    return {
      msg: 'Bikes list'
    }
  },

  computed: {
    ...mapState('bike', {
      bikesList: 'addsList'
    }),
    ...mapGetters('bike', ['isLoading']),
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },

  created () {
    this.$store.dispatch('bike/index', '')
  }

}
</script>
