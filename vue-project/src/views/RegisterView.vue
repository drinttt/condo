<template>
  <v-app>
    <v-app-bar color="surface-variant" title="CONDOMINIUM"></v-app-bar><br /><br />
    <v-main class="pa-16 bg-indigo-lighten-5">
      <v-container>
        <v-card width="500px" class="mx-auto bg-pink-lighten-4" id="rounded-card"
          ><br /><br />
          <v-card-title primary-title class="text-center text-h4 mb-1">
            <b class="headlogin">Sign up</b>
          </v-card-title>
          <v-card-text class="justify-center">
            <v-form v-model="valid" class="justify-center">
              <v-col cols="12" class="justify-center">
                <v-text-field
                  label="Email"
                  prepend-inner-icon="mdi-email-outline"
                  type="email"
                  v-model="Email"
                  variant="outlined"
                  :rules="emailRules"
                  required
                  class="headlogin"
                >
                </v-text-field
                ><br />
                <v-text-field
                  label="Username"
                  prepend-inner-icon="mdi-account"
                  type="text"
                  v-model="loginName"
                  variant="outlined"
                  :rules="loginNameRules"
                  required
                  class="headlogin"
                >
                </v-text-field
                ><br />
                <v-text-field
                  :type="show1 ? 'text' : 'password'"
                  prepend-inner-icon="mdi-lock"
                  v-model="Password1"
                  variant="outlined"
                  label="Password"
                  :rules="passwordRules"
                  required
                  class="headlogin"
                  :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="show1 = !show1"
                >
                </v-text-field
                ><br />
                <v-text-field
                  :type="show1 ? 'text' : 'password'"
                  prepend-inner-icon="mdi-lock"
                  v-model="Password2"
                  variant="outlined"
                  label="Confirm Password"
                  :rules="passwordRules"
                  required
                  class="headlogin"
                  :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="show1 = !show1"
                >
                </v-text-field>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-actions class="align-content-xl-center justify-center">
            <v-btn
              class="text-none mb-3"
              color="#A5107B"
              size="x-large"
              variant="flat"
              rounded="xl"
              width="200px"
            >
              <b class="buttlogin">Create Account</b>
            </v-btn> </v-card-actions
          ><br />
        </v-card>
      </v-container>
    </v-main>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loginName: null,
    loginNameRules: [
      (v) => !!v || 'Username must be required.'
      // value => {
      // if (value?.length > 1) return true

      // return 'Username must be required.'
      // },
    ],
    Password1: null,
    Password2: null,
    passwordRules: [
      (value) => {
        if (value?.length > 1) return true

        return 'Password must be required.'
      }
    ],
    Email: null,
    emailRules: [
      (value) => {
        if (value?.length > 1) return true

        return 'Email must be required.'
      }
    ],
    form: null,

    show1: false,
    show2: true,
    password: 'Password',
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`
    }
  })
}
</script>

<style>
#rounded-card {
  border-radius: 25px;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.2) !important;
}
.headlogin {
  color: #a5107b;
}
.buttlogin {
  color: white;
}
.linkregis {
  color: #a5107b;
  text-decoration: none;
}
.grey {
  color: gray;
}
</style>
