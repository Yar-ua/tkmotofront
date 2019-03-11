<template>
  <div>
    <hr/>
    <app-repairs-table></app-repairs-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
    isAuth () { return this.$store.getters.isAuth }
  }

}
</script>
