<template>
  <div>
    <div>
      <v-card>
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
          <v-layout row wrap v-for="item in bikesList" :key="item.id">
            <v-flex xs12>
              <v-card color="purple" class="white--text">
                <v-layout row>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{ item.name }}</div>
                        <div>Mileage: {{ item.volume }}</div>
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
                  <v-btn
                    block
                    color="secondary"
                    dark
                    :to="{name: 'BikeItem', params: {id: item.id}}">MORE</v-btn>
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
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bikes',
  body: '',
  data () {
    return {
      msg: 'Bikes list',
      alert: false,
      alertText: ''
    }
  },

  computed: {
    ...mapState('bike', {
      bikesList: 'addsList'
    }),
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },

  // methods: {
  // }
  created () {
    this.$store.dispatch('bike/index', '')
      .catch(err => {
        if (err.response.status !== 200) {
          this.hasError = true
        }
      })
  }

}
</script>
