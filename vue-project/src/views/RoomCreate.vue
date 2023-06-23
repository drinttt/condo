<template>
<v-app class="bg-indigo-lighten-5">
    <!-- Navbar -->
    <div><NavbarVue /></div>
    <br /><br /><br /><br /><br />
</v-app>
</template>

<script>
import NavbarVue from '../components/NavbarMenu.vue'

export default {
    components: {
        NavbarVue,
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
    }),
    methods: {
        test() {
            // console.log(this.$route.params.)
        },
    },
    created() {
        console.log(this.$route.params.something)
    }
}
</script>

<style>
.dropdown {
    text-decoration: none;
    color: rgb(94, 94, 94);
}
</style>
