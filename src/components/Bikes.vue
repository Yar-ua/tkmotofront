<template>
  <div>
  <h2>
    {{ msg }} <br/>
    bikes: {{ bikes }}
  </h2>
  <v-card color="blue-grey darken-2" class="white--text">
  <v-card-title primary-title>
    <div>
      <div class="headline">Unlimited music now</div>
      <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn flat dark>Listen now</v-btn>
  </v-card-actions>
</v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bikes',
  body: '',
  data () {
    return {
      msg: 'Bikes',
      alert: false,
      alertText: ''
    }
  },

  computed: {
    ...mapState('bike', {
      bikes: 'bikesList'
    })
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
    console.log('bikes load')
  }

}
</script>
