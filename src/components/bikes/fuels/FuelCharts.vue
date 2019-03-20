<template>
  <div>
    FUEL CHARTS
    <GChart
      type="ColumnChart"
      :data="fuelData"
      :options="chartOptions"
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
      fuelsChartRowData: 'fuelsList'
    }),
    fuelData () {
      return this.getFuelArray()
    }
  },

  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartOptions: {
        chart: {
          title: 'Fuel stata',
          subtitle: 'Fuel consumption per 100 km and tax per 1 km'
        }
      }
    }
  },

  methods: {
    getFuelArray () {
      var data = this.fuelsChartRowData
      var arr = []
      arr.push(['Distance', 'L / 100 km'])
      for (var i = 0; i < data.length; i++) {
        arr.push([
          i + 1,
          Math.round((data[i].refueling * 100 / data[i].distance) * 100) / 100
          // Math.round((item.price_fuel / item.distance) * 100) / 100
        ])
      }
      return arr
    }
  }
}
</script>
