<template>
  <div>
    <hr/>
    <v-progress-linear
      :indeterminate="true"
      color="deep-orange lighten-2"
      :hidden="!isLoading"
    ></v-progress-linear>
    <app-fuels-table></app-fuels-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import FuelsTable from '@/components/bikes/fuels/FuelsTable'

export default {
  name: 'Fuels',
  body: '',
  components: {
    'app-fuels-table': FuelsTable
  },

  computed: {
    ...mapState({
      user: 'user'
    }),
    ...mapGetters('fuel', ['isLoading']),
    isAuth () { return this.$store.getters.isAuth }
  }

}
</script>
