<template>
<v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <v-app-bar color="surface-variant">
        <v-app-bar-title>CONDOMINIUM</v-app-bar-title>

        <!-- Information -->
        <v-btn color="white">
            <v-icon icon="mdi-domain"></v-icon>&nbsp; Information

            <v-menu activator="parent" open-on-hover>
                <v-list>
                    <v-list-item v-for="(item, index) in informations" :key="index" :value="index">
                        <router-link :to="`/${item.link}`" class="dropdown">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <!-- Invoice -->
        <v-btn color="white">
            <v-icon icon="mdi-receipt-text-edit-outline"></v-icon>&nbsp; Invoice

            <v-menu activator="parent" open-on-hover>
                <v-list>
                    <v-list-item v-for="(item, index) in invoices" :key="index" :value="index">
                        <router-link :to="`/${item.link}`" class="dropdown">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <!-- Management and Security Systems -->
        <v-btn color="white">
            <v-icon icon="mdi-security"></v-icon>&nbsp; Management&Security Systems

            <v-menu activator="parent" open-on-hover>
                <v-list>
                    <v-list-item v-for="(item, index) in secures" :key="index" :value="index">
                        <router-link :to="`/${item.link}`" class="dropdown">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-spacer />
        <v-spacer />
        <v-spacer />

    </v-app-bar>
    <br /><br /><br /><br />

    <!-- Import - Download - Create -->
    <div class="center">
        <v-row style="display: flex; justify-content: right; max-width: 80%;" class="center">
            <v-col cols="12" md="3" class="mr-16 justify-end" max-width="400px">
                <!-- cols="6" md="5" class="mx-9" -->
                <v-card>
                    <v-text-field label="Search .." v-model="searchTerm" :loading="loading" density="compact" variant="solo" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="text-field-right"></v-text-field>
                </v-card>
            </v-col>
        </v-row>
    </div>

    <h1 class="topicinfor">บันทึกค่าใช้จ่ายในตึก
        <v-row class="mx-4">
            <v-col cols="12" md="3" class="mr-16 justify-end" max-width="400px">
                <v-select class="selectYear" v-model="selectedYear" :items="yearOptions" label="Select Year" variant="solo" @change="filterExpenses"></v-select>
            </v-col>
        </v-row>
    </h1>
    <v-row class="import-download">
        <v-btn class="mx-1">import <v-icon icon="mdi-import"></v-icon>
        </v-btn>
        <v-btn @click="RoomCreate()" class="mx-1">Create <v-icon icon="mdi-pencil-outline"></v-icon>
        </v-btn>
    </v-row><br />

    <!-- table -->
    <div class="center">
        <v-table fixed-header height="700px" class="table-container">
            <thead>
                <tr>
                    <th class="text-center bg-indigo-accent-1">
                        ลำดับที่
                    </th>
                    <th class="text-center bg-indigo-accent-1">
                        ปี
                    </th>
                    <th class="text-left bg-indigo-accent-1">
                        เดือน
                    </th>
                    <th class="text-center bg-indigo-accent-1">
                        ค่าส่วนกลาง
                    </th>
                    <th class="text-left bg-indigo-accent-1">
                        ค่าน้ำ
                    </th>
                    <th class="text-left bg-indigo-accent-1">
                        ค่าไฟ
                    </th>
                    <th class="text-center bg-indigo-accent-1">
                        ค่าซ่อมแซม
                    </th>
                    <th class="text-center bg-indigo-accent-1">
                        ค่าจ้างพนักงาน
                    </th>
                    <th class="text-left bg-indigo-accent-1"> </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(expense, index) in FilterExpenses" :key="expense.year">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-center">{{ expense.year }}</td>
                    <td class="text-left">{{ expense.month }}</td>
                    <td class="text-center">{{ expense.common_fee }}</td>
                    <td class="text-left">{{ expense.water_bill }}</td>
                    <td class="text-left">{{ expense.electricity_bill }}</td>
                    <td class="text-center">{{ expense.repair_cost }}</td>
                    <td class="text-center">{{ expense.employee_salary }}</td>
                    <td class="text-center">
                        <v-btn size="x-small">edit</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>

    <router-view></router-view>
</v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
    components: {
        SvgIcon
    },
    data: () => ({
        // navbar
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
        // Infor_room
        expenses: [{
                year: 2018,
                month: 'มกราคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'กุมภาพันธ์',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'มีนาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'เมษายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'พฤษภาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'มิถุนายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'กรกฎาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'สิงหาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'กันยายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'ตุลาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'พฤศจิกายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2018,
                month: 'ธันวาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            }, {
                year: 2019,
                month: 'มกราคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'กุมภาพันธ์',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'มีนาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'เมษายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'พฤษภาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'มิถุนายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'กรกฎาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'สิงหาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'กันยายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'ตุลาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'พฤศจิกายน',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2019,
                month: 'ธันวาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
            {
                year: 2020,
                month: 'ธันวาคม',
                common_fee: 500,
                water_bill: 100,
                electricity_bill: 400,
                repair_cost: 600,
                employee_salary: 20000
            },
        ],
        // selectedYear: '',
        searchTerm: '',
        // yearOptions: [],
        FilterExpenses: [],
    }),
    methods: {
        RoomCreate() {
            this.$router.push('/roomcreate')
        },
        // filterExpenses() {
        //     if (this.selectedYear) {
        //         this.searchTerm = ''; // รีเซ็ตค่าการค้นหา

        //         this.FilterExpenses = this.expenses.filter(
        //             (expense) => expense.year === this.selectedYear.toString()
        //         );
        //     } else {
        //         this.FilterExpenses = this.expenses;
        //     }
        // },
    },
    computed: {
        FilterExpenses() {
            return this.expenses.filter(expense => {
                return (
                    expense.year.toString().includes(this.searchTerm) ||
                    expense.year.toString().includes(this.selectedYear) ||
                    expense.month.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    expense.common_fee.toString().includes(this.searchTerm) ||
                    expense.water_bill.toString().includes(this.searchTerm) ||
                    expense.electricity_bill.toString().includes(this.searchTerm) ||
                    expense.repair_cost.toString().includes(this.searchTerm) ||
                    expense.employee_salary.toString().includes(this.searchTerm)
                );
            })
        }
    },
    created() {
        this.yearOptions = [...new Set(this.expenses.map(expense => expense.year))];
    },
}
</script>

<style>
.selectYear {
    width: 110px;
    height: 10px;
}

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

.search {
    display: flex;
    justify-content: flex-end;
    max-width: 85%;
}

.topicinfor {
    display: flex;
    justify-content: flex-start;
    /* max-width: 45%; */
    margin-left: 15%;
}

.dropdown {
    text-decoration: none;
    color: rgb(94, 94, 94);
}
</style>
