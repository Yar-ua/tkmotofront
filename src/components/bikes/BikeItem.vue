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
                  color="red darken-3"
                  :to="{name: 'BikeForm', params: {id: item.id}}"
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
            <p>XXX: YYY</p>
            <p>XXX: YYY</p>
            <p>XXX: YYY</p>
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
          </v-container>

          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :to="{name: 'Bikes'}">BACK</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
            <!-- <template v-if="this.$route.params.id == 'new'">
              <v-btn
              color="primary"
              :disabled="!valid"
              @click="create"
              >
              SAVE BIKE
              </v-btn>
            </template> -->
<!--             <template v-if="this.$route.params.id !== 'new'">
              <v-btn
              color="primary"
              :disabled="!valid"
              @click="update"
              >
              UPDATE PRODUCT
              </v-btn>
              <v-btn
              color="error"
              :disabled="!valid"
              @click="destroy"
              >
              DELETE PRODUCT
              </v-btn>
            </template> -->
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
      valid: true,
      hasError: false
      // imageName: '',
      // imageUrl: '',
      // imagefile: ''
    }
  },

  computed: {
    ...mapState('bike', {
      item: 'addItem'
    }),
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },

  created () {
    this.$store.dispatch('bike/show', {id: this.$route.params.id})
      .catch(err => {
        if (err.response.status !== 200) {
          this.hasError = true
        }
      })
  }
}
</script>
