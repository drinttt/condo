<template>
<v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <div>
        <NavbarVue />
    </div>

    <h1 class="topicinfor">บันทึกค่าใช้จ่ายในตึก</h1>

    <v-container grid-list-md>
        <v-data-table :items-per-page="itemsPerPage" :group-by="groupBy" :search="search" :headers="headers" :items="expensesState" :sort-by="[{ key: 'expenses', order: 'asc' }]" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Building Expenses</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <!-- <v-select attach :items="items" placeholder="select from items"></v-select> -->
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
                                            <v-text-field v-model="editedItem.year" label="Year"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.month" label="Month"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="5">
                                            <v-text-field v-model="editedItem.common_fee" label="Common fee"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.electricity_bill" label="Electricity bill"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.water_bill" label="Water bill"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.repair_cost" label="Repair cost"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.employee_salary" label="Employee salary"></v-text-field>
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
import NavbarVue from '../components/NavbarMenu.vue'

export default {
    components: {
        VDataTable,
        NavbarVue,
    },
    data: () => ({
        // navbar
        // services: [{
        //         icon: "mdi-domain",
        //         title: "Media Monitoring",
        //         link: "/expenses"
        //     },
        //     {
        //         icon: "mdi-message-text",
        //         title: "Audience Measurement",
        //         link: "/expenses"
        //     },
        //     {
        //         icon: "mdi-flag",
        //         title: "utilities"
        //     }
        // ],
        groupBy: [{
            key: 'year',
            order: 'asc'
        }],

        informations: [{
                title: 'ข้อมูลของแต่ละห้อง',
                link: "rooms"
            },
            {
                title: 'บันทึกค่าใช้จ่ายในตึก',
                link: "expenses"
            },
            {
                title: 'บันทึกสาธารณูปโภคอัตโนมัติ',
                link: "utilities"
            },
            {
                title: 'บันทึกการใช้โทรศัพท์อัตโนมัติ',
                link: "autophones"
            },
        ],
        invoices: [{
                title: 'ใบแจ้งหนี้',
                link: 'invoices'
            },
            {
                title: 'ระบบผ่อนชำระ',
                link: 'installments'
            },
        ],
        secures: [{
                title: 'ระบบระดับผู้ใช้งาน log เก็บข้อมูล',
                link: 'userloglevel'
            },
            {
                title: 'ระบบเชื่อมโปรแกรมบัญชี',
                link: 'accounting'
            },
        ],

        // searchTerm: '', 
        //vDataTable
        itemsPerPage: 12,
        dialog: false,
        dialogDelete: false,

        headers: [{
                title: 'Year',
                key: 'year' //cal
            },
            {
                title: 'Month',
                key: 'month',
                sortable: false,
            },
            {
                title: 'Common fee',
                // align: 'start',
                // sortable: false,
                key: 'common_fee',
            },
            {
                title: 'Electricity bill',
                // align: 'start',
                // sortable: false,
                key: 'electricity_bill',
            },
            {
                title: 'Water bill',
                key: 'water_bill',
            },
            {
                title: 'Repair cost',
                // align: 'start',
                // sortable: false,
                key: 'repair_cost',
            },
            {
                title: 'Employee salary',
                // align: 'start',
                // sortable: false,
                key: 'employee_salary',
            },
            {
                title: '',
                key: 'actions',
                sortable: false
            },
        ],
        expenses: [],
        editedIndex: -1,
        editedItem: {
            year: null,
            month: '',
            common_fee: null,
            electricity_bill: null,
            water_bill: null,
            repair_cost: null,
            employee_salary: null,
        },
        defaultItem: {
            year: null,
            month: '',
            common_fee: null,
            electricity_bill: null,
            water_bill: null,
            repair_cost: null,
            employee_salary: null,
        },
        search: '',
    }),
    methods: {
        // RoomCreate() {
        //     this.$router.push('/roomcreate')
        // },
        initialize() {
            // this.expenses = [{
            //         year: 2018,
            //         month: 'มกราคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'กุมภาพันธ์',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'มีนาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'เมษายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'พฤษภาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'มิถุนายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'กรกฎาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'สิงหาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'กันยายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'ตุลาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'พฤศจิกายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2018,
            //         month: 'ธันวาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     }, {
            //         year: 2019,
            //         month: 'มกราคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'กุมภาพันธ์',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'มีนาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'เมษายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'พฤษภาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'มิถุนายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'กรกฎาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'สิงหาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'กันยายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'ตุลาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'พฤศจิกายน',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2019,
            //         month: 'ธันวาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            //     {
            //         year: 2020,
            //         month: 'ธันวาคม',
            //         common_fee: 500,
            //         water_bill: 100,
            //         electricity_bill: 400,
            //         repair_cost: 600,
            //         employee_salary: 20000
            //     },
            // ]
        },

        // editItem(item) {
        //     this.editedIndex = this.expenses.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialog = true
        // },
        editItem(item) {
            this.editedIndex = this.$store.state.expenses.expense.indexOf(item)
            this.$store.dispatch('expenses/editIndex', this.editedIndex);
            this.editedItem = Object.assign({}, item) //copy object
            this.$store.dispatch('expenses/setEditedItem', item);
            this.dialog = true
        },

        deleteItem(item){
            this.editedIndex = this.$store.state.expenses.expense.indexOf(item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.$store.dispatch('expenses/deleteItem', this.editedIndex);
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

        // save() {
        //     if (this.editedIndex > -1) {
        //         Object.assign(this.expenses[this.editedIndex], this.editedItem)
        //     } else {
        //         this.expenses.push(this.editedItem)
        //     }
        //     this.close()
        // },
        save2() {
            console.log(this.$store.state.expenses.editedIndex)
            if (this.$store.state.expenses.editedIndex > -1) {
                //edit
                const updatedItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('expenses/updateItem', {
                    index: this.editedIndex,
                    updatedItem
                });
            } else {
                //add new
                const newItem = {
                    ...this.editedItem
                };
                this.$store.dispatch('expenses/addItem', newItem);
            }
            // console.log(this.editedIndex)
            this.close()
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Create Expense' : 'Edit Expense'
        },
        expensesState() {
            return this.$store.state.expenses.expense
        }
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
