import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'


import App from './App.vue'
import router from './router'

// Vuetify
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import '@mdi/font/css/materialdesignicons.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'




const vuetify = createVuetify({
  components,
  directives,

  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi,
  //   },
  // }
})

// library.add(fas, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
// app.component('fa', FontAwesomeIcon)
