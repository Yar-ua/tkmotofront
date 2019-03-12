<template>
  <div>
    <hr/>
    <v-progress-linear
      :indeterminate="true"
      color="deep-orange lighten-2"
      :hidden="!isLoading"
    ></v-progress-linear>
    <app-repairs-table></app-repairs-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import RepairsTable from '@/components/bikes/repairs/RepairsTable'

export default {
  name: 'Repairs',
  body: '',
  components: {
    'app-repairs-table': RepairsTable
  },

  computed: {
    ...mapState({
      user: 'user'
    }),
    ...mapGetters('repair', ['isLoading']),
    isAuth () { return this.$store.getters.isAuth }
  }

}
</script>
