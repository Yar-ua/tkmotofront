<template>
  <v-layout justify-center>
    <v-flex xs10 sm10 md10 lg10>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation enctype="multipart/form-data">
          <v-toolbar color="grey darken-3">
            <v-toolbar-title class="white--text">Bike information</v-toolbar-title>
              <v-spacer>
                <v-flex xs12 sm6 class="py-2">
                </v-flex>
              </v-spacer>
              <template v-if="(user.id == item.user_id)">
                <v-btn
                  color="blue-grey darken-1"
                  :to="{name: 'BikeConfig', params: {id: item.id}}"
                  small
                >
                  Config bike
                </v-btn>
                <v-btn
                  color="red darken-3"
                  :to="{name: 'BikeForm', params: {id: item.id}}"
                  small
                >
                  Edit bike
                </v-btn>
            </template>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
            <v-flex justify-start xs6>
              <p>Name: {{ item.name }}</p>
              <p>Engine volume: {{ item.volume }} ccm3</p>
              <p>Color: {{ item.color }}</p>
              <p>Year: {{ item.year }}</p>
            </v-flex>
            <v-flex>
            <p>Tech information:</p>
            <p>Odometer, km: {{ odometer }}</p>
            <p>Distance to oil change, km:<span v-html="value"></span></p>
            <template v-if="(user.id == item.user_id)">
              <v-btn
                color="blue-grey darken-1"
                :to="{name: 'Oil', params: {id: item.id}}"
                small
              >
                Change oil
              </v-btn>
            </template>
            </v-flex>
<!--               <template v-if="item.imageUrl != null">
                <img v-bind:src="item.imageUrl">
              </template>
              <template v-else> -->
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  height="150px"
                  contain
                  alt="Icon No Free Png"/>
              <!-- </template> -->
            </v-layout>
<!--               <template v-if="item.imageUrl != null">
                <img v-bind:src="item.imageUrl">
              </template> -->
<!--               <template v-else>
                <img src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG" height="150px" alt="Icon No Free Png"/>
              </template> -->
            <div>
              <v-btn
                :to="{name: 'Fuels'}">
                <v-icon>fas fa-gas-pump</v-icon>
                Fuel statistic
              </v-btn>
              <v-btn
                :to="{name: 'Repairs'}">
                <v-icon>build</v-icon>
                Repair statistic
              </v-btn>

              <router-view></router-view>

            </div>
          </v-container>

          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :to="{name: 'Bikes'}">BACK</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BikeItem',
  data: () => {
    return {
      dialog: false,
      valid: true
    }
  },

  computed: {
    ...mapState({
      user: 'user'
    }),
    ...mapState('bike', {
      item: 'addItem',
      config: 'config'
    }),
    ...mapState('fuel', {
      odometer: 'odometer'
    }),
    ...mapState('oil', {
      oilLastChange: 'oilLastChange'
    }),
    isAuth () { return this.$store.getters.isAuth },
    value: function () {
      let delta = this.config.oil_change - (this.odometer - this.oilLastChange)
      let color = this.getColor(delta)
      let text = `<span style="color: ${color}">${delta}</span>`
      return text
    }
  },

  methods: {
    getColor (value) {
      if (value >= 150) {
        return ''
      } else if ((value <= 100) && (value >= 0)) {
        return 'yellow'
      } else {
        return 'red'
      }
    }
  },

  created () {
    this.$store.dispatch('bike/show', {id: this.$route.params.id})
    this.$store.dispatch('fuel/fuellast', {id: this.$route.params.id})
    this.$store.dispatch('bike/showConfig', {id: this.$route.params.id})
    this.$store.dispatch('oil/oillast', {id: this.$route.params.id})
  }
}
</script>
