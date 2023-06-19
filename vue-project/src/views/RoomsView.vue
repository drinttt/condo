<template>
<v-app class="bg-indigo-lighten-5">
    <div>
        <NavbarVue />
    </div>

    <h1 class="topicinfor">รายละเอียดข้อมูลของแต่ละห้อง</h1>

    <v-container grid-list-md>
        <v-data-table :items-per-page="itemsPerPage" :search="search" :headers="headers" :items="roomsState" :sort-by="[{ key: 'rooms', order: 'asc' }]" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Information of each room</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <!-- <v-select attach :items="items" placeholder="select from items"></v-select> -->
                    <v-spacer></v-spacer>

                    <!-- seach -->
                    <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> -->
                    <div class="v-input my-custom-input">
                        <input v-model="search" class="v-input__control" placeholder="Search">
                        <span class="v-input__append-inner">
                            <v-icon>mdi-magnify</v-icon>
                        </span>
                    </div>

                    <v-dialog v-model="dialog" max-width="800px">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark class="mb-1 mt-1" v-bind="props">
                                Create
                            </v-btn>
                        </template>
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
                                <v-btn color="blue-darken-1" variant="text" @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="save2">
                                    Save
                                </v-btn>
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
                <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item.raw)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-container><br />

    <router-view></router-view>
</v-app>
</template>

<script>
import {
    VDataTable
} from 'vuetify/labs/VDataTable'
import {
    mapActions,
    mapMutations,
    mapState
} from 'vuex'
import NavbarVue from '../components/NavbarMenu.vue'

export default {
    components: {
        VDataTable,
        NavbarVue
    },
    data: () => ({

        // searchTerm: '',

        //vDataTable
        itemsPerPage: 8,
        dialog: false,
        dialogDelete: false,

        headers: [{
                title: 'Floor',
                key: 'floors',
            },
            {
                title: 'Room',
                key: 'room'
            },
            {
                title: 'Name',
                // align: 'start',
                // sortable: false,
                key: 'name',
            },
            {
                title: 'Tel',
                key: 'tel',
                sortable: false
            }, //แก้ให้ sort ไม่ได้
            // { title: 'Protein (g)', key: 'protein' },
            {
                title: '',
                key: 'actions',
                sortable: false
            },
        ],
        rooms: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            floors: null,
            room: null,
            tel: '',
            protein: 0,
        },
        defaultItem: {
            name: '',
            floors: null,
            room: null,
            tel: '',
            protein: 0,
        },
        search: '',
    }),
    methods: {
        // RoomCreate() {
        //     this.$router.push('/roomcreate')
        // },
        initialize() {
            // this.rooms = [{
            //         floors: 1,
            //         room: 101,
            //         tel: '0812345678',
            //         name: 'Frozen Yogurt',
            //         calories: 159,
            //         carbs: 24,
            //         protein: 4.0,
            //     },
            //     {
            //         floors: 3,
            //         room: 301,
            //         name: 'Ice cream sandwich',
            //         tel: '0892345678',
            //         calories: 237,
            //         fat: 9.0,
            //         carbs: 37,
            //         protein: 4.3,
            //     },
            //     {
            //         floors: 2,
            //         room: 204,
            //         name: 'Eclair',
            //         tel: '0882345678',
            //         calories: 262,
            //         fat: 16.0,
            //         carbs: 23,
            //         protein: 6.0,
            //     },
            //     {
            //         floors: 4,
            //         room: 409,
            //         name: 'Cupcake',
            //         tel: '0817745678',
            //         calories: 305,
            //         fat: 3.7,
            //         carbs: 67,
            //         protein: 4.3,
            //     },
            //     {
            //         floors: 3,
            //         room: 307,
            //         name: 'Gingerbread',
            //         tel: '0812345666',
            //         calories: 356,
            //         fat: 16.0,
            //         carbs: 49,
            //         protein: 3.9,
            //     },
            //     {
            //         floors: 8,
            //         room: 801,
            //         name: 'Jelly bean',
            //         tel: '0812342278',
            //         calories: 375,
            //         fat: 0.0,
            //         carbs: 94,
            //         protein: 0.0,
            //     },
            //     {
            //         floors: 9,
            //         room: 909,
            //         name: 'Lollipop',
            //         tel: '0819445678',
            //         calories: 392,
            //         fat: 0.2,
            //         carbs: 98,
            //         protein: 0,
            //     },
            //     {
            //         floors: 6,
            //         room: 607,
            //         name: 'Honeycomb',
            //         tel: '0812379678',
            //         calories: 408,
            //         fat: 3.2,
            //         carbs: 87,
            //         protein: 6.5,
            //     },
            //     {
            //         floors: 5,
            //         room: 503,
            //         name: 'Donut',
            //         tel: '0865345678',
            //         calories: 452,
            //         fat: 25.0,
            //         carbs: 51,
            //         protein: 4.9,
            //     },
            //     {
            //         floors: 4,
            //         room: 405,
            //         name: 'KitKat',
            //         tel: '0812345318',
            //         calories: 518,
            //         fat: 26.0,
            //         carbs: 65,
            //         protein: 7,
            //     },
            //     {
            //         floors: 6,
            //         room: 611,
            //         name: 'Kat',
            //         tel: '0814545318',
            //         calories: 518,
            //         fat: 26.0,
            //         carbs: 65,
            //         protein: 7,
            //     },
            //     {
            //         floors: 7,
            //         room: 711,
            //         name: 'Kit',
            //         tel: '0812345355',
            //         calories: 518,
            //         fat: 26.0,
            //         carbs: 65,
            //         protein: 7,
            //     },
            // ]
        },

        // editItem(item) {
        //     this.editedIndex = this.rooms.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialog = true
        //     console.log(this.rooms.indexOf(item))
        // },

        //2
        editItem(item) {
            this.editedIndex = this.$store.state.rooms.room.indexOf(item)
            // console.log(this.editedIndex)
            this.$store.commit('editIndex', this.editedIndex);
            this.editedItem = Object.assign({}, item)
            this.dialog = true

            // console.log(this.$store.state.rooms.editedIndex)
            // console.log(this.$store.state.rooms.room.indexOf(item))
        },

        deleteItem(item) {
            this.editedIndex = this.rooms.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.rooms.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            //edit
            if (this.editedIndex > -1) {
                Object.assign(this.rooms[this.editedIndex], this.editedItem)
            } else {
                //add
                this.rooms.push(this.editedItem)
            }

            this.close()
        },
        save2() {
            console.log(this.$store.state.rooms.editedIndex)
            if (this.$store.state.rooms.editedIndex > -1) {
                //edit
                const updatedItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('rooms/updateItem', {
                    index: this.editedIndex,
                    updatedItem
                });
            } else {
                //add new
                const newItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('rooms/addItem', newItem);
            }
            // console.log(this.editedIndex)
            this.close()
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Create Room' : 'Edit Room'
        },
        //แสดงใน table
        ...mapState(['rooomState']),

        roomsState() {
            return this.$store.state.rooms.room
        },
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },
    created() {
        this.initialize()
    },
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
