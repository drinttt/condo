<template>
<v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <v-app-bar color="surface-variant">
        <v-app-bar-title>CONDOMINIUM</v-app-bar-title>

        <!-- Information -->
        <v-btn color="white">
            Information

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
            Invoice

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
            Management&Security Systems

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
    <br /><br /><br /><br /><br />

    <!-- Import - Download -->
    <h1 class="topicinfor">ข้อมูลของแต่ละห้อง</h1>
    <v-row class="import-download">
        <v-btn>import <svg-icon type="mdi" :path="import_icon"></svg-icon>
        </v-btn>&nbsp;&nbsp;&nbsp;
        <v-btn>Download <svg-icon type="mdi" :path="download_icon"></svg-icon>
        </v-btn>
    </v-row><br/>
    
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
                <tr v-for="(item, index) in rooms" :key="item.name">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-center">{{ item.room_number }}</td>
                    <td class="text-left">{{ item.name }}</td>
                    <td class="text-left">{{ item.tel }}</td>
                    <td class="text-left"><svg-icon type="mdi" :path="dotVertical"></svg-icon></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
    mdiImport,
    mdiDownloadCircleOutline,
    mdiDotsVertical
} from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data: () => ({
        informations: [{
                title: 'ข้อมูลของแต่ละห้อง',
                link: "rooms"
            },
            {
                title: 'บันทึกค่าใช้จ่ายในตึก'
            },
            {
                title: 'บันทึกสาธารณูปโภคอัตโนมัติ'
            },
            {
                title: 'บันทึกการใช้โทรศัพท์อัตโนมัติ'
            },
        ],
        invoices: [{
                title: 'ใบแจ้งหนี้',
                link: 'invoice'
            },
            {
                title: 'ระบบผ่อนชำระ',
                link: 'jj'
            },
        ],
        secures: [{
                title: 'ระบบระดับผู้ใช้งาน log เก็บข้อมูล'
            },
            {
                title: 'ระบบเชื่อมโปรแกรมบัญชี'
            },
        ],
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
        // icon
        import_icon: mdiImport,
        download_icon: mdiDownloadCircleOutline,
        dotVertical: mdiDotsVertical,
    }),
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
.topicinfor {
  display: flex;
  justify-content: flex-end;
  max-width: 34%;
}


.dropdown {
    text-decoration: none;
    color: rgb(94, 94, 94);
}
</style>
