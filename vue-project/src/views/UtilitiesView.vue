<template>
  <v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <div>
      <NavbarVue />
    </div>

    <h1 class="topicinfor">บันทึกสาธารณูปโภคอัตโนมัติ</h1>

    <v-container grid-list-md>
      <v-data-table
        :items-per-page="itemsPerPage"
        :search="search"
        :headers="headers"
        :items="roomsState"
        :sort-by="[{ key: 'rooms', order: 'asc' }]"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Auto Utility Information</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <!-- <v-select attach :items="items" placeholder="select from items"></v-select> -->
            <v-spacer></v-spacer>

            <!-- seach -->
            <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> -->
            <div class="v-input my-custom-input mx-4">
              <input v-model="search" class="v-input__control" placeholder="Search" />
              <span class="v-input__append-inner">
                <v-icon>mdi-magnify</v-icon>
              </span>
            </div>

            <v-dialog v-model="dialog" max-width="800px">
              <!-- button create -->
              <!-- <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark class="mb-1 mt-1" v-bind="props">
                                Create
                            </v-btn>
                        </template> -->

              <!-- Edit/Delete -->
              <v-card>
                <v-card-title class="my-2">
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <!-- Edit/Delete Form -->
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.floors" label="Floor"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.room" label="Room"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.tel" label="Tel."></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <!-- Button Edit/Delete -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- Delete -->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete ?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- <v-btn size="small" class="mx-1 text-left" @click="editItem(item.raw)" color="success">edit</v-btn>
                    <v-btn size="small" color="error" @click="deleteItem(item.raw)">delete</v-btn> -->
          <v-icon size="small" class="me-2" @click="more(item.raw)"> mdi-dots-vertical </v-icon>
        </template>
      </v-data-table> </v-container
    ><br />

    <router-view></router-view>
  </v-app>
</template>

<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import NavbarVue from '../components/NavbarMenu.vue'

export default {
  components: {
    NavbarVue,
    VDataTable
  },
  data: () => ({
    // searchTerm: '',

    //vDataTable
    itemsPerPage: 7,
    dialog: false,
    dialogDelete: false,

    headers: [
      {
        title: 'Floor',
        key: 'floors' //cal
      },
      {
        title: 'Room',
        key: 'room' //fat
      },
      {
        title: 'Name',
        // align: 'start',
        // sortable: false,
        key: 'name'
      },
      {
        title: 'Tel',
        key: 'tel',
        sortable: false //carb
      },
      {
        title: '',
        key: 'actions',
        sortable: false
      }
    ],
    rooms: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      floors: null,
      room: null,
      tel: '',
      protein: 0
    },
    defaultItem: {
      name: '',
      floors: null,
      room: null,
      tel: '',
      protein: 0
    },
    search: '',
    selectedYear: null
  }),
  methods: {
    // RoomCreate() {
    //     this.$router.push('/roomcreate')
    // },
    initialize() {},

    // editItem(item) {
    //     this.editedIndex = this.rooms.indexOf(item)
    //     this.editedItem = Object.assign({}, item)
    //     this.dialog = true
    // },

    // deleteItem(item) {
    //     this.editedIndex = this.rooms.indexOf(item)
    //     this.editedItem = Object.assign({}, item)
    //     this.dialogDelete = true
    // },

    // deleteItemConfirm() {
    //     this.rooms.splice(this.editedIndex, 1)
    //     this.closeDelete()
    // },

    // close() {
    //     this.dialog = false
    //     this.$nextTick(() => {
    //         this.editedItem = Object.assign({}, this.defaultItem)
    //         this.editedIndex = -1
    //     })
    // },

    // closeDelete() {
    //     this.dialogDelete = false
    //     this.$nextTick(() => {
    //         this.editedItem = Object.assign({}, this.defaultItem)
    //         this.editedIndex = -1
    //     })
    // },

    // save() {
    //     if (this.editedIndex > -1) {
    //         Object.assign(this.rooms[this.editedIndex], this.editedItem)
    //     } else {
    //         this.rooms.push(this.editedItem)
    //     }
    //     this.close()
    // },

    more(item) {
      const index = this.$store.state.rooms.room.indexOf(item)
      this.$store.commit('rooms/setUtilityIndex', index)

      // console.log(Object.assign({}, item))
      const roomdata = Object.assign({}, item)
      // console.log(roomdata.room)
      this.$store.commit('rooms/setUtilityRoom', roomdata.room)
      // console.log(this.$store.state.rooms.dataUtilityRoom)

      //*****
      this.$router.push({
        name: 'utilityDetail'
      })
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Create Utility' : 'Edit Room'
    },
    roomsState() {
      return this.$store.state.rooms.room
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },
  created() {
    this.initialize()
  }
}
</script>

<style>
.table-container {
  width: 70%;
  /* display: flex; */
  /* justify-content: center; */
}

.center {
  display: flex;
  justify-content: center;
}

.import-download {
  display: flex;
  justify-content: flex-end;
  max-width: 85%;
}

/* .search {
        display: flex;
        justify-content: flex-end;
        max-width: 85%;
    } */

.topicinfor {
  display: flex;
  justify-content: flex-start;
  /* max-width: 45%; */
  margin-left: 10%;
}

.dropdown {
  text-decoration: none;
  color: rgb(94, 94, 94);
}

/* search */
.my-custom-input {
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 4px;
  padding: 4px;
  height: 36px;
  width: 20px;
}

.my-custom-input input {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 4px 8px;
}

.my-custom-input .v-icon {
  margin-right: 4px;
}
</style>
