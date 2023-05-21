<template>
<v-card>
    <v-layout>
        <v-app-bar color="surface-variant" title="CONDO"></v-app-bar><br />
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                <template v-slot:append>
                    <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- <v-navigation-drawer color="surface">
          <v-list>
            <v-list-item title="Drawer left"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-navigation-drawer color="surface" location="right">
          <v-list>
            <v-list-item title="Drawer right"></v-list-item>
          </v-list>
        </v-navigation-drawer> -->

        <!-- <v-main style="min-height: 300px;"></v-main> -->
    </v-layout>
</v-card>
</template>

<script>
// import { mdiAccount } from '@mdi/js'

  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
      }
    },
  }
</script>
