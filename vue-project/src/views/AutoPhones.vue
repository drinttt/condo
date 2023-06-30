<template>
<v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <div>
        <NavbarVue />
    </div>

    <h1 class="topicinfor">บันทึกการใช้โทรศัพท์อัตโนมัติ</h1>

    <v-container grid-list-md>
        <v-data-table :items-per-page="itemsPerPage" :search="search" :headers="headers" :items="autoPhoneState" :sort-by="[{ key: 'autophones', order: 'asc' }]" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Automatic phone call log</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>

                    <!-- drop-down filter-Year -->
                    <!-- 1 -->
                    <!-- <v-select class="mt-5" style="width: 2px;" v-model="selectedYear" :items="uniqueYears" label="Filter by Year" placeholder="Select Year"></v-select> -->
                    <!-- <v-select class="mt-5" style="width: 2px;" v-model="selectedYear" :items="uniqueYears" label="Filter by Year" placeholder="Select Year" @change="updateFilteredExpense"></v-select> -->

                    <v-spacer></v-spacer>
                    <!-- search -->
                    <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> -->
                    <div class="v-input my-custom-input">
                        <input v-model="search" class="v-input__control" placeholder="Search">
                        <span class="v-input__append-inner">
                            <v-icon>mdi-magnify</v-icon>
                        </span>
                    </div>

                    <!-- <v-btn color="orange">text</v-btn> -->
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
                                            <v-text-field v-model="editedItem.caller" label="Caller"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.recipient" label="Recipient"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.timeStart" label="Start"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.timeEnd" label="End"></v-text-field>
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
                                <v-btn color="blue-darken-1" variant="text" @click="save">
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
import NavbarVue from '../components/NavbarMenu.vue'

export default {
    components: {
        VDataTable,
        NavbarVue
    },
    data: () => ({
        headers: [{
                title: 'Caller',
                key: 'caller' //cal
            },
            {
                title: 'Recipient',
                key: 'recipient',
                sortable: false,
            },
            {
                title: 'Date',
                // align: 'start',
                // sortable: false,
                key: 'date',
            },
            {
                title: 'Start',
                // align: 'start',
                // sortable: false,
                key: 'timeStart',
            },
            {
                title: 'End',
                key: 'timeEnd',
            },
            {
                title: '',
                key: 'actions',
                sortable: false
            },
        ],
        itemsPerPage: 7,
        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        search: '',

        editedItem: {
            caller: '',
            recipient: '',
            date: '',
            start: '',
            end: '',
        },
        defaultItem: {
            caller: '',
            recipient: '',
            date: '',
            start: '',
            end: '',
        },
    }),
    methods: {
        editItem(item) {
            this.editedIndex = this.$store.state.autophones.autophone.indexOf(item)
            this.$store.dispatch('autophones/editIndex', this.editedIndex);
            this.editedItem = Object.assign({}, item) //copy object
            this.$store.dispatch('autophones/setEditedItem', item);
            this.dialog = true
        },
        deleteItem(item) {
            this.editedIndex = this.$store.state.autophones.autophone.indexOf(item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.$store.dispatch('autophones/deleteItem', this.editedIndex);
            this.closeDelete();
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
            console.log(this.$store.state.autophones.editedIndex)
            if (this.$store.state.autophones.editedIndex > -1) {
                //edit
                const updatedItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('autophones/updateItem', {
                    index: this.editedIndex,
                    updatedItem
                });
            } else {
                //add new
                const newItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('autophones/addItem', newItem);
            }
            // console.log(this.editedIndex)
            this.close()
        },
    },
    computed: {
        autoPhoneState() {
            return this.$store.state.autophones.autophone
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
        // const dateTimeStr = "2023-06-23T23:45:30.000Z";
        // const [dateStr, timeStr] = dateTimeStr.split("T");

        // const date = dateStr; // จะได้ "2023-06-23"
        // const time = timeStr.slice(0, -5); // จะได้ "23:45:30"

        // console.log(date); // แสดงผลเป็น "2023-06-23"
        // console.log(time); // แสดงผลเป็น "23:45:30"
    }
}
</script>

<style>
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

.custom-dropdown {
    width: 150px;
}
</style>
