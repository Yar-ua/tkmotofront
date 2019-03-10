<template>
  <div>
    <v-toolbar flat color="grey darken-3">
      <v-toolbar-title>Fuel Information</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-btn
      color="primary"
      small
      @click="createNewItem()"
      >
      New Item
      </v-btn>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.odometer" label="Odometer, km"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.distance" label="Distance, km"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.refueling" label="Refueling, l"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.price_fuel" label="Price, UAN"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="fuelsList"
      class="elevation-1"
      :rows-per-page-items="rowsPerPageItems"
      no-data-text="Sorry, nothing data to display here :("
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.odometer }}</td>
        <td class="text-xs-left">{{ props.item.distance }}</td>
        <td class="text-xs-left">{{ props.item.refueling }}</td>
        <td class="text-xs-left">{{ props.item.price_fuel }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FuelsTable',

  data: () => ({
    dialog: false,
    rowsPerPageItems: [10, 20, {'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1}],
    headers: [
      {
        text: 'Odometer (km)',
        align: 'left',
        value: 'odometer'
      },
      { text: 'Distance (km)', value: 'distance' },
      { text: 'Refueling (l)', value: 'reflueing' },
      { text: 'Price (UAN)', value: 'price' }
    ],
    newItem: {
      odometer: 0,
      distance: 0,
      refueling: 0,
      price_fuel: 0
    },
    editedItem: {
      id: -1,
      odometer: 0,
      distance: 0,
      refueling: 0,
      price_fuel: 0
    }
  }),

  computed: {
    ...mapState('fuel', {
      fuelsList: 'fuelsList'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.$store.dispatch('fuel/index', {bikeId: this.$route.params.id})
    },

    fuelParams () {
      var params = {
        odometer: this.editedItem.odometer,
        distance: this.editedItem.distance,
        refueling: this.editedItem.refueling,
        price_fuel: this.editedItem.price_fuel
      }
      return params
    },

    createFuel (item) {
      this.$store.dispatch('fuel/create',
        {
          bikeId: this.$route.params.id,
          fuel: this.fuelParams()
        })
    },

    updateFuel (item) {
      this.$store.dispatch('fuel/update',
        {
          bikeId: this.$route.params.id,
          id: this.editedItem.id,
          fuel: this.fuelParams()
        })
    },

    createNewItem () {
      this.editItem(this.newItem)
    },

    editItem (item) {
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.$store.dispatch('fuel/delete', {
          bikeId: this.$route.params.id,
          id: item.id
        })
      }
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedItem.id) {
        this.updateFuel(this.editedItem)
        // console.log(this.editedItem + '||' + this.editedItem.id)
        // Object.assign(this.fuelsList[this.editedItem.id], this.editedItem)
      } else {
        this.createFuel(this.editedItem)
        // this.fuelsList.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
