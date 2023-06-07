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
  </v-app>
</template>

<script>
export default {
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
    }),
}
</script>

<style>
.dropdown {
    text-decoration: none;
    color: rgb(94, 94, 94);
}
</style>