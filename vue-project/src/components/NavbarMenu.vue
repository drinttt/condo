<template>
  <div>
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
            <v-list-item
              :to="item.link"
              v-for="(item, index) in invoices"
              :key="index"
              :value="index"
            >
              <!-- <router-link :to="`/${item.link}`" class="dropdown"> -->
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <!-- </router-link> -->
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
  </div>
</template>

<script>
export default {
  data: () => ({
    // navbar
    services: [
      {
        icon: 'mdi-domain',
        title: 'Media Monitoring',
        link: '/rooms'
      },
      {
        icon: 'mdi-message-text',
        title: 'Audience Measurement',
        link: '/expenses'
      },
      {
        icon: 'mdi-flag',
        title: 'utilities'
      }
    ],

    informations: [
      {
        title: 'ข้อมูลของแต่ละห้อง',
        link: 'rooms'
      },
      {
        title: 'บันทึกสาธารณูปโภคอัตโนมัติ',
        link: 'utilities'
      },
      {
        title: 'บันทึกค่าใช้จ่ายในตึก',
        link: 'expenses'
      },
      {
        title: 'บันทึกการใช้โทรศัพท์อัตโนมัติ',
        link: 'autophones'
      }
    ],
    invoices: [
      {
        title: 'ใบแจ้งหนี้',
        link: 'invoices'
      },
      {
        title: 'ระบบผ่อนชำระ',
        link: 'installments'
      }
    ],
    secures: [
      {
        title: 'ระบบระดับผู้ใช้งาน log เก็บข้อมูล',
        link: 'userloglevel'
      },
      {
        title: 'ระบบเชื่อมโปรแกรมบัญชี',
        link: 'accounting'
      }
    ]
  })
}
</script>

<style></style>
