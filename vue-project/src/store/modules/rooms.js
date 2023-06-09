const state = {
  something: 46,
  editedIndex: -1,
  editedItem: {},
  filterYear: null,

  //Utility
  dataUtilityRoom: null,
  dataUtilityIndex: null,

  //invoice
  dataInvoiceIndex: null,
  dataInvoiceRoom: null,

  room: [
    {
      floors: 1,
      room: 101,
      tel: '0812345678',
      name: 'Frozen YogurtAnna'
    },
    {
      floors: 2,
      room: 204,
      name: 'Eclair',
      tel: '0882345678',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0
    },
    {
      floors: 3,
      room: 301,
      name: 'Ice cream sandwich',
      tel: '0892345678',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3
    },
    {
      floors: 4,
      room: 409,
      name: 'Cupcake',
      tel: '0817745678',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3
    },
    {
      floors: 3,
      room: 307,
      name: 'Gingerbread',
      tel: '0812345666',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9
    },
    {
      floors: 8,
      room: 801,
      name: 'Jelly bean',
      tel: '0812342278',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0
    },
    {
      floors: 9,
      room: 909,
      name: 'Lollipop',
      tel: '0819445678',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0
    },
    {
      floors: 6,
      room: 607,
      name: 'Honeycomb',
      tel: '0812379678',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5
    },
    {
      floors: 5,
      room: 503,
      name: 'Donut',
      tel: '0865345678',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9
    },
    {
      floors: 4,
      room: 405,
      name: 'KitKat',
      tel: '0812345318',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7
    },
    {
      floors: 6,
      room: 611,
      name: 'Kat',
      tel: '0814545318',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7
    },
    {
      floors: 7,
      room: 711,
      name: 'Kit',
      tel: '0812345355',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7
    }
  ]
}

const mutations = {
  addItem(state, newItem) {
    state.room.push(newItem)
  },

  updateItem(state, { index, updatedItem }) {
    state.room.splice(index, 1, updatedItem)
  },

  setEditedItem(state, item) {
    state.editedItem = Object.assign({}, item)
  },
  setEditedIndex(state, index) {
    state.editedIndex = index
  },
  deleteItem(state, index) {
    state.room.splice(index, 1)
  },

  //Utility
  setUtilityIndex(state, index) {
    state.dataUtilityIndex = index
  },
  setUtilityRoom(state, payload) {
    state.dataUtilityRoom = payload
  },

  //Invoice
  setInvoiceIndex(state, index) {
    state.dataInvoiceIndex = index
  },
  setInvoiceRoom(state, payload) {
    state.dataInvoiceRoom = payload
  }
}

const actions = {
  addItem({ commit }, newItem) {
    commit('addItem', newItem)
  },
  updateItem({ commit, state }, { updatedItem }) {
    const roomIndex = state.room.findIndex((item) => item.room === state.editedItem.room)
    if (roomIndex > -1) {
      commit('updateItem', { index: roomIndex, updatedItem })
    }
  },
  setEditedItem({ commit }, item) {
    commit('setEditedItem', item)
  },
  editIndex({ commit }, index) {
    commit('setEditedIndex', index)
  },
  deleteItem({ commit }, index) {
    commit('deleteItem', index)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
