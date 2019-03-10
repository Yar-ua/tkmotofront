<template>
  <div>
    {{ msg }}
    <hr/>
    <app-fuels-table></app-fuels-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import FuelsTable from '@/components/bikes/fuels/FuelsTable'

export default {
  name: 'Fuels',
  body: '',
  components: {
    'app-fuels-table': FuelsTable
  },
  data () {
    return {
      msg: 'FUELS STATISTIC'
    }
  },

  computed: {
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },

  created () {
    this.$store.dispatch('fuel/index', {bikeId: this.$route.params.id})
  }

}
</script>
