<template>
<v-app class="bg-indigo-lighten-5">
    <div>
        <NavbarVue />
    </div>

    <h2 class="ml-12">
        <v-icon size="small" class="me-2" @click="back"> mdi-arrow-left </v-icon>
    </h2>
    <h1 class="topicinfor">รายละเอียดใบแจ้งหนี้</h1>

    <h2 class="topicinfor mt-4"><em style="color: rgb(106, 106, 106)">ข้อมูลลูกค้า</em></h2>
    <v-container class="topicinfor mt-4">
        <p>เลขห้อง: &nbsp;</p>
        <div class="by-6" style="background-color: white; border-radius: 6px">
            <p class="mx-3">{{ roomNumber }}</p>
        </div>
    </v-container>
    <v-container class="topicinfor">
        <p>ชื่อ-สกุล: &nbsp;</p>
        <div class="by-6" style="background-color: white; border-radius: 6px">
            <p class="mx-3">{{ roomName }}</p>
        </div>
    </v-container>
    <v-container class="topicinfor">
        <p>เบอร์โทร: &nbsp;</p>
        <div class="by-6" style="background-color: white; border-radius: 6px">
            <p class="mx-3">{{ roomTel }}</p>
        </div>
    </v-container>

    <v-container grid-list-md>
        <v-data-table :items-per-page="itemsPerPage" :search="search" :headers="headers" :items="filteredInvoice" :sort-by="[{ key: 'dueDate', order: 'desc' }]" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Invoice</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <!-- <v-select attach :items="items" placeholder="select from items"></v-select> -->
                    <v-select class="mt-5" style="width: 2px" v-model="selectedYear" :items="uniqueYears" label="Filter by Year" placeholder="Select Year"></v-select>
                    <!-- <v-select class="mt-5" style="width: 2px;" v-model="selectedYear" :items="uniqueYears" label="Filter by Year" placeholder="Select Year" @change="updateFilteredExpense"></v-select> -->

                    <v-spacer></v-spacer>

                    <!-- seach -->
                    <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> -->
                    <div class="v-input my-custom-input">
                        <input v-model="search" class="v-input__control" placeholder="Search" />
                        <span class="v-input__append-inner">
                            <v-icon>mdi-magnify</v-icon>
                        </span>
                    </div>

                    <v-dialog v-model="dialog" max-width="800px">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark class="mb-1 mt-1" v-bind="props"> Create </v-btn>
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
                                            <v-text-field v-model="editedItem.year" label="Year"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.month" label="Month"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-text-field v-model="editedItem.room" label="Room Number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.dueDate" label="Due Date"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
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

                    <!-- change status to paid -->
                    <v-dialog v-model="dialogStatus" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure to change status to paid ?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="closeStatus">Cancel</v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="changeStatusConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.status="{ item }">
                <div class="d-flex justify-left">
                    <!-- <template v-if="item.raw.status === 'not paid'">
                        <a style="color: red" target="_blank" :href="`tel:${item.phone}`">
                            {{ item.raw.status }}
                        </a>
                    </template>
                    <template v-else-if="isDueDatePassed(item.raw.dueDate)">
                        <a style="color: blue;" target="_blank" :href="`tel:${item.phone}`">
                            {{ item.raw.status }}
                        </a>
                    </template> -->

                    <!-- ******* -->

                    <template v-if="item.raw.status === 'not paid' && isDueDatePassed(item.raw.dueDate)">
                        <a class="payment-link red" style="color: red; text-decoration: none;" target="_blank" :href="`tel:${item.phone}`">
                            {{ item.raw.status }}
                        </a>
                    </template>

                    <template v-else-if="item.raw.status === 'not paid'">
                        <a style="color: blue; text-decoration: none;" target="_blank" :href="`tel:${item.phone}`">
                            {{ item.raw.status }}
                        </a>
                    </template>
          
                    <template v-else>
                        {{ item.raw.status }}
                    </template>
                </div>
            </template>

            <template #item.actions="{ item }">
                <!-- <v-btn size="small" class="mx-1 text-left" @click="editItem(item.raw)" color="success">edit</v-btn>
                <v-btn size="small" color="error" @click="deleteItem(item.raw)">delete</v-btn> -->
                <div class="d-flex justify-center">
                    <v-icon size="small" class="me-2" @click="editItem(item.raw)"> mdi-pencil </v-icon>
                    <v-icon size="small" class="mr-7" @click="deleteItem(item.raw)"> mdi-delete </v-icon>&nbsp;
                    <v-btn color="success" class="mr-2" size="small" style="font-size: 12px" @click="statusItem(item.raw)">paid</v-btn>
                </div>
            </template>
        </v-data-table>
    </v-container><br />
</v-app>
</template>

<script>
import NavbarVue from '../components/NavbarMenu.vue'
import {
    VDataTable
} from 'vuetify/lib/labs/VDataTable/index.mjs'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        NavbarVue,
        VDataTable
    },
    data: () => ({
        itemsPerPage: 12,
        invoices: [],
        search: '',
        dialog: false,
        dialogDelete: false,
        dialogStatus: false,
        editIndex: -1,
        selectedYear: 'All',
        filteredInvoice: [],

        headers: [{
                title: 'Year',
                key: 'year'
            },
            {
                title: 'Month',
                key: 'month'
            },
            {
                title: 'Room Number',
                key: 'room'
            },
            {
                title: 'Due date',
                key: 'dueDate'
                // sortable: false
            },
            {
                title: 'Status',
                // align: 'start',
                sortable: false,
                key: 'status'
            },
            {
                title: '',
                key: 'actions',
                sortable: false
            }
        ],
        editedItem: {
            year: null,
            month: '',
            room: null,
            dueDate: '',
            status: ''
        },
        defaultItem: {
            year: null,
            month: '',
            room: null,
            dueDate: '',
            status: ''
        }
    }),
    methods: {
        back() {
            this.$router.replace('/invoices')
        },
        editItem(item) {
            this.editedIndex = this.$store.state.invoices.invoice.indexOf(item)
            this.$store.dispatch('invoices/editIndex', this.editedIndex)
            this.editedItem = Object.assign({}, item) //copy object
            this.$store.dispatch('invoices/setEditedItem', item)
            this.dialog = true
        },
        save() {
            // console.log(this.$store.state.invoices.editedIndex)
            if (this.$store.state.invoices.editedIndex > -1) {
                //edit
                const updatedItem = {
                    ...this.editedItem
                }
                this.$store.dispatch('invoices/updateItem', {
                    index: this.editedIndex,
                    updatedItem
                })
            } else {
                //add new
                const newItem = {
                    ...this.editedItem
                }
                this.$store.dispatch('invoices/addItem', newItem)
            }
            console.log(this.$store.state.invoices.invoice)
            this.close()
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        deleteItem(item) {
            this.editedIndex = this.$store.state.invoices.invoice.indexOf(item)
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            this.$store.dispatch('invoices/deleteItem', this.editedIndex)
            this.closeDelete()
        },
        changeStatusConfirm() {
            const {
                year,
                month,
                room
            } = this.editedItem
            this.$store.dispatch('invoices/changeStatus', {
                year,
                month,
                room
            })
            this.closeStatus()
        },
        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        //change status
        statusItem(item) {
            // console.log(item)
            this.editedIndex = this.$store.state.invoices.invoice.indexOf(item)
            this.editedItem = Object.assign({}, item)
            console.log(this.editedItem)
            this.dialogStatus = true
        },
        closeStatus() {
            this.dialogStatus = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        isDueDatePassed(dueDate) {
          const today = new Date();
          const due = new Date(dueDate);
          return due < today;
        },
    },
    computed: {
        ...mapGetters(['roomNumber', 'roomName', 'roomTel']),
        roomNumber() {
            const index = this.$store.state.rooms.dataInvoiceIndex
            const roomData = this.$store.state.rooms.room[index]
            // console.log(roomData.room);
            return roomData.room
        },
        roomName() {
            const index = this.$store.state.rooms.dataInvoiceIndex
            const roomData = this.$store.state.rooms.room[index]
            // console.log(roomData.name);
            return roomData.name
        },
        roomTel() {
            const index = this.$store.state.rooms.dataInvoiceIndex
            const roomData = this.$store.state.rooms.room[index]
            // console.log(roomData.tel);
            return roomData.tel
        },

        invoicesState() {
            return this.$store.state.invoices.invoice
        },
        filteredData() {
            // const keyword = this.search.toLowerCase();
            // return this.data.filter(item => item.name.toLowerCase() === keyword);
            const index = this.$store.state.rooms.dataInvoiceIndex
            const roomData = this.$store.state.rooms.room[index]
            const keyword = roomData.room
            // console.log(roomData.name)
            // return this.data.filter(item => item.room.toLowerCase() === keyword);
            //****
            return this.$store.state.invoices.invoice.filter((item) => item.room == keyword)
            // console.log(this.data.filter(item => item.room.toLowerCase() === keyword))
        },
        uniqueYears() {
            // return this.$store.state.expenses.years
            return this.$store.getters['invoices/uniqueYears']
        },

        filteredInvoice() {
            // console.log('Hello')
            if (this.selectedYear === 'All') {
                // return this.$store.state.invoices.invoice;
                const index = this.$store.state.rooms.dataInvoiceIndex
                const roomData = this.$store.state.rooms.room[index]
                const keyword = roomData.room

                return this.$store.state.invoices.invoice.filter((item) => item.room == keyword)
            } else {
                const index = this.$store.state.rooms.dataInvoiceIndex
                const roomData = this.$store.state.rooms.room[index]
                const keyword = roomData.room

                return this.$store.state.invoices.invoice.filter(
                    (item) => item.year == this.selectedYear && item.room == keyword
                )
            }

            // return this.$store.state.expenses.expense.filter(
            //     item => item.year === this.selectedYear
            // );
        }
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
        dialogStatus(val) {
            val || this.closeStatus()
        }
    }
}
</script>

<style></style>
