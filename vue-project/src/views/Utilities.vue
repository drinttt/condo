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
                        <v-text-field v-model="searchTerm" :loading="loading" density="compact" variant="solo" label="Search .." append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="text-field-right"></v-text-field>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    
        <h1 class="topicinfor">บันทึกสาธารณูปโภคอัตโนมัติ</h1>
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
                            เลขที่ห้อง
                        </th>
                        <th class="text-left bg-indigo-accent-1">
                            ชื่อ-สกุล เจ้าของห้อง
                        </th>
                        <th class="text-left bg-indigo-accent-1">
                            เบอร์โทร
                        </th>
                        <th class="text-left bg-indigo-accent-1"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(room, index) in FilterRooms" :key="room.name">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-center">{{ room.room_number }}</td>
                        <td class="text-left">{{ room.name }}</td>
                        <td class="text-left">{{ room.tel }}</td>
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
    import {
        mdiImport,
        mdiDownloadCircleOutline,
        mdiDotsVertical,
        mdiPencilOutline
    } from '@mdi/js';
    
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
            rooms: [{
                    room_number: "001",
                    name: "Harry Riddle",
                    tel: "0835678543"
                },
                {
                    room_number: "002",
                    name: "Ron Potter",
                    tel: "0667654327"
                },
                {
                    room_number: "003",
                    name: "Anna Yeeha",
                    tel: "0835678543"
                },
                {
                    room_number: "004",
                    name: "Spice Girl",
                    tel: "0667654327"
                },
                {
                    room_number: "005",
                    name: "Taylor perry",
                    tel: "0835678543"
                },
                {
                    room_number: "006",
                    name: "Robert Prattrick",
                    tel: "0667654327"
                },
                {
                    room_number: "007",
                    name: "Irene Rvv",
                    tel: "0835678543"
                },
                {
                    room_number: "010",
                    name: "Suelgi Rvv",
                    tel: "0667654327"
                },
                {
                    room_number: "008",
                    name: "Wendy Rvv",
                    tel: "0667654327"
                },
                {
                    room_number: "009",
                    name: "Joy Rvv",
                    tel: "0835678543"
                },
                {
                    room_number: "011",
                    name: "Yeri Rvv",
                    tel: "0835678543"
                },
                {
                    room_number: "012",
                    name: "Taeyoen Girl",
                    tel: "0667654327"
                },
                {
                    room_number: "013",
                    name: "Wonyong Ive",
                    tel: "0835678543"
                },
                {
                    room_number: "014",
                    name: "Ruby Jane",
                    tel: "0667654327"
                },
            ],
            searchTerm: ''
        }),
        methods: {
            RoomCreate() {
                this.$router.push('/roomcreate')
            }
        },
        computed: {
            FilterRooms(){
                return this.rooms.filter( room=> {
                    return (
                        room.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        room.room_number.toString().includes(this.searchTerm) ||
                        room.tel.toLowerCase().includes(this.searchTerm.toLowerCase())
                    );
                })
            }
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
    