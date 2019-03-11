<template>
  <div>
    <v-toolbar flat color="grey darken-3">
      <v-toolbar-title>Repair Information</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.description" label="Description of repair"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.detail" label="Changed or repaired detail"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.price_detail" label="Detail or repair cost, UAN"></v-text-field>
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
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">{{ props.item.detail }}</td>
        <td class="text-xs-left">{{ props.item.price_detail }}</td>
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
    rowsPerPageItems: [5, 15, {'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1}],
    headers: [
      {
        text: 'Description',
        align: 'left',
        value: 'description'
      },
      { text: 'Detail for repair or change', value: 'detail' },
      { text: 'Price (UAN)', value: 'price_detail' }
    ],
    newItem: {
      description: '',
      detail: '',
      price_detail: 0
    },
    editedItem: {
      id: -1,
      description: '',
      detail: '',
      price_detail: 0
    }
  }),

  computed: {
    ...mapState('repair', {
      fuelsList: 'repairsList'
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
      this.$store.dispatch('repair/index', {bikeId: this.$route.params.id})
    },

    repairParams () {
      var params = {
        description: this.editedItem.description,
        detail: this.editedItem.detail,
        price_detail: this.editedItem.price_detail
      }
      return params
    },

    createRepair (item) {
      this.$store.dispatch('repair/create',
        {
          bikeId: this.$route.params.id,
          repair: this.repairParams()
        })
    },

    updateRepair (item) {
      this.$store.dispatch('repair/update',
        {
          bikeId: this.$route.params.id,
          id: this.editedItem.id,
          repair: this.repairParams()
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
        this.$store.dispatch('repair/delete', {
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
        this.updateRepair(this.editedItem)
      } else {
        this.createRepair(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
