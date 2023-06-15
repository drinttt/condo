import { createStore } from 'vuex'
// import Vuex from 'vuex'
import rooms from './modules/roomsObj'


export default createStore({
  modules: {
    rooms
  },
  state: {
    count: 64,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
// -----------------------------------------------------------
// import Vue from 'vue'
// import Vuex from 'vuex'
// import rooms from './modules/rooms'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     rooms,
//   }
// })
// -----------------------------------------------------------
// import Vue from 'vue'
// import Vuex from 'vuex'
// import rooms from './modules/rooms'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     rooms
//   },
//   // สถานะและการกระทำของ Vuex store หลัก
// })

// export default store

// -------------------------------------------------
// import Vue from 'vue'
// import Vuex from 'vuex'
// import rooms from './modules/rooms'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     rooms,
//  }
// })

// import Vue from 'vue'
// import Vuex from 'vuex'
// import roomsObj from './modules/roomsObj'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     roomsObj
//   }
// })
