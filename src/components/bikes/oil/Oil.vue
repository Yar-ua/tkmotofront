<template>
  <div>
    <h4> {{ text }}  </h4>
    <hr/><br/>
    <v-text-field
      v-model="value"
      label="Distance where oil in gearbox was changed on, km"
      :rules="[rules.beDigit]"
    ></v-text-field>
    <v-btn
    color="primary"
    small
    @click="create"
    :disabled="!valid"
    >
    SAVE OIL CHANGE
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Oil',
  data: () => {
    return {
      dialog: false,
      text: 'on ... km oil was changed',
      value: 0,
      rules: {
        beDigit: v => /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(v) || 'Must be digit'
      },
      valid: true,
      hasError: false
    }
  },

  computed: {
    ...mapGetters('bike', ['isLoading']),
    ...mapState('oil', {
      item: 'oilLastChange'
    })
  },

  methods: {
    oilConfigParams () {
      var params = {
        bikeId: this.$route.params.id,
        oil_distance: this.value
      }
      return params
    },

    create: function () {
      var params = this.oilConfigParams()
      this.$store.dispatch('oil/createOil', params)
    }
  }
}
</script>
