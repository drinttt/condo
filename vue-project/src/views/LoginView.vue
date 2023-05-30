<template>
<v-app>
    <v-app-bar color="surface-variant" title="CONDOMINIUM"></v-app-bar><br /><br />
    <v-main class="pa-16 bg-indigo-lighten-5">
        <v-container>
            <v-card width="500px" class="mx-auto bg-pink-lighten-4 " id="rounded-card"><br /><br />
                <v-card-title primary-title class="text-center text-h4 mb-1">
                    <b class="headlogin">Login</b>
                </v-card-title>
                <v-card-text class="justify-center">
                    <v-form v-model="valid" class="justify-center">
                        <v-col cols="12" class="justify-center">
                            <v-text-field label="Username" type="text" v-model="loginName" variant="outlined" :rules="loginNameRules" required class="headlogin">
                            </v-text-field><br />
                            <v-text-field type="password" v-model="Password" variant="outlined" label="Password" :rules="passwordRules" required class="headlogin">
                            </v-text-field>
                        </v-col>
                        <div class="text-caption text-center">
                            <p class="grey">Don't you have account?<router-link to="/Register" class="linkregis">&nbsp;&nbsp;Register here.</router-link>
                            </p>
                            <!-- <svg-icon type="mdi" :path="account"></svg-icon> -->
                        </div>
                    </v-form>
                </v-card-text>
                <v-card-actions class="align-content-xl-center justify-center">
                    <v-btn @click="Rooms" class="text-none mb-3" color="#A5107B" size="x-large" variant="flat" rounded="xl" width="150px">
                        <b class="buttlogin">LOGIN</b>
                    </v-btn>
                </v-card-actions><br />

            </v-card>
        </v-container>
    </v-main>
    <router-view></router-view>
</v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data: () => ({
        loginName: null,
        loginNameRules: [
            v => !!v || 'Username must be required.'
            // value => {
            // if (value?.length > 1) return true

            // return 'Username must be required.'
            // },
        ],
        Password: null,
        passwordRules: [
            value => {
                if (value?.length > 1) return true

                return 'Password must be required.'
            },
        ],
        form: null,
        // icon
        account: mdiAccount,
    }),
    methods: {
        Rooms() {
            this.$router.push('/rooms')
        }
    },
}
</script>

<style>
#rounded-card {
    border-radius: 25px;
    -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
    box-shadow: 0 -1px 10px rgba(0, 0, 0, .2) !important;
}

.headlogin {
    color: #A5107B;
}

.buttlogin {
    color: white;
}

.linkregis {
    color: #A5107B;
    text-decoration: none;
}

.grey {
    color: gray;
}
</style>
