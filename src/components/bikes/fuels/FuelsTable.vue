<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="fuelsList"
      class="elevation-1"
      no-data-text="Sorry, nothing data to display here :("
    >
      <template slot="items" slot-scope="props">
        <!-- <td>{{ props.item.name }}</td> -->
        <td class="text-xs-left">{{ props.item.odometer }}</td>
        <td class="text-xs-left">{{ props.item.distance }}</td>
        <td class="text-xs-left">{{ props.item.refueling }}</td>
        <td class="text-xs-left">{{ props.item.price_fuel }}</td>
      </template>
    </v-data-table>
    {{ fuelsList }}
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'FuelsTable',
  data () {
    return {
      headers: [
        {
          text: 'Odometer (km)',
          align: 'left',
          value: 'odometer'
        },
        { text: 'Distance (km)', value: 'distance' },
        { text: 'Refueling (l)', value: 'reflueing' },
        { text: 'Price (UAN)', value: 'price' }
      ]
    }
  },

  computed: {
    ...mapState('fuel', {
      fuelsList: 'fuelsList'
    })
  }
}
</script>
