<template>
  <div>
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

  computed: {
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  }

}
</script>
