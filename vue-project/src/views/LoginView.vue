<template>
<v-app>
    <v-app-bar color="surface-variant" title="CONDO"></v-app-bar><br /><br />
    <v-main class="pa-16 bg-cyan-lighten-5">
        <v-card width="400px" class="mx-auto bg-pink-lighten-4" id="rounded-card">
            <v-card-title primary-title class="text-center">
                LOGIN
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        label="USERNAME"
                        type="text"
                        v-model="loginName"
                        :rules="loginNameRules"
                    >
                    </v-text-field>
                    <v-text-field
                        type="password"
                        v-model="Password"
                        label="PASSWORD"
                        :rules="passwordRules"
                    >
                    </v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn
                    class="text-none text-subtitle-1"
                    color="#A5107B"
                    size="small"
                    variant="flat"
                    >
                    Login
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-main>
</v-app>
</template>

<script>
export default {
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
    })
}
</script>

<style>
#rounded-card {
    border-radius: 20px;
    -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
    box-shadow: 0 -1px 10px rgba(0, 0, 0, .2) !important;
}
</style>
