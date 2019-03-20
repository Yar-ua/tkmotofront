<template>
  <v-layout justify-center>
    <v-flex xs10 sm10 md10 lg10>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation enctype="multipart/form-data">
          <v-toolbar color="grey darken-3">
            <v-toolbar-title class="white--text">Create or update bike</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="item.name"
                  label="Bike name"
                  :rules="[rules.isRequired, rules.nameLength]"
                  :counter="30"
                ></v-text-field>
                <v-text-field
                  v-model="item.volume"
                  label="Engine volume, ccm3"
                  :rules="[rules.isRequired, rules.beDigit, rules.volumeLength]"
                  :counter="10"
                ></v-text-field>
                <v-text-field
                  v-model="item.color"
                  label="Color"
                  :counter="20"
                  :rules="[rules.isRequired, rules.colorLength]"
                ></v-text-field>
                <v-text-field
                v-model="item.year"
                label="Year"
                :rules="[rules.isRequired, rules.beDigit]"
                mask=####
                ></v-text-field>
              </v-flex>
<!--               <template v-if="item.imageUrl != null">
                <img v-bind:src="item.imageUrl">
              </template> -->
<!--               <template v-else>
                <img src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG" height="150px" alt="Icon No Free Png"/>
              </template> -->

<!--               <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                <img :src="imageUrl" height="150" v-if="imageUrl"/>
                <v-text-field label="Select Image" @click='pickFile' v-model='imagefile' prepend-icon='attach_file'></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  :imagefile="imagefile"
                  @change="onFilePicked"
                  >
              </v-flex> -->
            </v-layout>
          </v-container>

          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :to="{name: 'Bikes'}">BACK</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
            <template v-if="this.$route.params.id == 'new'">
              <v-btn
              color="primary"
              :disabled="!valid"
              @click="create"
              >
              SAVE BIKE
              </v-btn>
            </template>
            <template v-if="this.$route.params.id !== 'new'">
              <v-btn
              color="primary"
              :disabled="!valid"
              @click="update"
              >
              UPDATE BIKE
              </v-btn>
              <v-btn
              color="error"
              :disabled="!valid"
              @click="destroy"
              >
              DELETE BIKE
              </v-btn>
            </template>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BikeForm',
  data: () => {
    return {
      dialog: false,
      name: '',
      description: '',
      color: '',
      year: '',
      rules: {
        isRequired: v => !!v || 'Must be required',
        beDigit: v => /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(v) || 'Must be digit',
        nameLength: v => (v && v.length <= 30) || 'Must be less than 30 characters',
        volumeLength: v => (v && v.length <= 10) || 'Volume must be less than 10 digits',
        colorLength: v => (v && v.length <= 20) || 'Color must be less than 20 characters'
      },
      valid: true,
      hasError: false
      // imageName: '',
      // imageUrl: '',
      // imagefile: ''
    }
  },
  computed: {
    ...mapState('bike', {
      item: 'addItem'
    }),
    ...mapState({
      user: 'user'
    }),
    isAuth () { return this.$store.getters.isAuth }
  },
  methods: {
    bikeParams () {
      var params = {
        name: this.item.name,
        volume: this.item.volume,
        color: this.item.color,
        year: this.item.year
      }
      return params
    },
    confirmDelete () {
      if (confirm('Are You sure? Your bike and all information will be destroyed')) {
        var bikeName = prompt('Enter Your bike name for destroy confirmation', 'sample bikename')
        if (bikeName === this.item.name) {
          return true
        } else {
          alert('Mistake in inputed bike name')
          return false
        }
      }
    },

    create: function () {
      var params = this.bikeParams()
      this.$store.dispatch('bike/create', params)
        .then(() => {
          this.hasError = false
          this.$router.push({name: 'BikeItem', params: {id: this.item.id}})
        })
    },
    update: function () {
      var params = this.bikeParams()
      params.id = this.item.id
      this.$store.dispatch('bike/update', params)
        .then(() => {
          this.$router.push({name: 'BikeItem', params: {id: this.item.id}})
        })
    },
    destroy: function () {
      if (this.confirmDelete() === true) {
        this.$store.dispatch('bike/delete', {id: this.item.id})
          .then(() => {
            this.$router.push({name: 'Bikes'})
          })
      }
    }
  //   pickFile () {
  //     this.$refs.image.click()
  //   },
  //   onFilePicked (e) {
  //     const files = e.target.files
  //     if (files[0] !== undefined) {
  //       this.imageName = files[0].name
  //       if (this.imageName.lastIndexOf('.') <= 0) {
  //         return
  //       }
  //       const fr = new FileReader()
  //       fr.readAsDataURL(files[0])
  //       fr.addEventListener('load', () => {
  //         this.imageUrl = fr.result
  //         this.imageFile = files[0] // this is an image file that can be sent to server...
  //       })
  //     } else {
  //       this.imageName = ''
  //       this.imageFile = ''
  //       this.imageUrl = ''
  //     }
  //   }
  }
}
</script>
