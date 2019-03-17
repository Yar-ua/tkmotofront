<template>
  <div>
    <h4> {{ text }}  </h4>
    <hr/><br/>
    <v-progress-linear
      :indeterminate="true"
      color="deep-orange lighten-2"
      :hidden="!isLoading"
    ></v-progress-linear>
    <v-text-field
      v-model="item.oil_change"
      label="Distance to oil change, km"
      :rules="[rules.beDigit]"
    ></v-text-field>
    <v-btn
    color="primary"
    small
    @click="update"
    :disabled="!valid"
    >
    SAVE CONFIG
    </v-btn>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BikeConfig',
  data: () => {
    return {
      dialog: false,
      text: 'bike settings',
      rules: {
        beDigit: v => /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(v) || 'Must be digit'
      },
      valid: true,
      hasError: false
    }
  },

  computed: {
    ...mapGetters('bike', ['isLoading']),
    ...mapState('bike', {
      item: 'config'
    })
  },

  methods: {
    bikeConfigParams () {
      var params = {
        bikeId: this.$route.params.id,
        oil_change: this.item.oil_change
      }
      return params
    },

    update: function () {
      var params = this.bikeConfigParams()
      this.$store.dispatch('bike/updateConfig', params)
    }
  },

  created () {
    this.$store.dispatch('bike/showConfig', {id: this.$route.params.id})
  }
}
</script>
