<template>
  <div>
    FUEL CHARTS
    <GChart
      type="ColumnChart"
      :data="fuelData"
      :options="fuelChartOptions"
    />
    <hr/>
    <GChart
      type="ColumnChart"
      :data="taxData"
      :options="taxChartOptions"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GChart } from 'vue-google-charts'

export default {
  name: 'FuelCharts',
  components: {
    GChart
  },

  computed: {
    ...mapState('fuel', {
      fuelsList: 'fuelsList'
    }),
    fuelData () {
      return this.getFuelArray()
    },
    taxData () {
      return this.getTaxArray()
    }
  },

  data () {
    return {
      fuelChartOptions: {
        chart: {
          subtitle: 'Fuel consumption per 100 km and tax per 1 km'
        },
        title: 'Fuel per 100 km'
      },
      taxChartOptions: {
        chart: {
          subtitle: 'Tax per 1 km'
        },
        title: 'Tax per 100 km',
        colors: ['#e0440e']
      }
    }
  },

  methods: {
    getFuelArray () {
      var data = this.fuelsList
      var arr = []
      arr.push(['Distance', 'L / 100 km'])
      for (var i = 0; i < data.length; i++) {
        arr.push([
          i + 1,
          Math.round((data[i].refueling * 100 / data[i].distance) * 100) / 100
        ])
      }
      return arr
    },
    getTaxArray () {
      var data = this.fuelsList
      var arr = []
      arr.push(['Distance', 'UAN / 1 km'])
      for (var i = 0; i < data.length; i++) {
        arr.push([
          i + 1,
          Math.round((data[i].price_fuel * 100 / data[i].distance) * 100) / 100
        ])
      }
      return arr
    }
  }
}
</script>
