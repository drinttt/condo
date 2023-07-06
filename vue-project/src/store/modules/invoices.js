const state = {
  editedIndex: -1,
  editedItem: {},

  invoice: [
    {
      year: 2018,
      month: 'มกราคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-02-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'กุมภาพันธ์',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-03-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'มีนาคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-04-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'เมษายน',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-05-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'พฤษภาคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-06-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'มิถุนายน',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-07-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'กรกฎาคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-08-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'สิงหาคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-09-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'กันยายน',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-10-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'ตุลาคม',
      room: 101,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-11-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'พฤศจิกายน',
      room: 204,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2018-12-05',
      status: 'not paid'
    },
    {
      year: 2018,
      month: 'ธันวาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-01-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'มกราคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-02-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'กุมภาพันธ์',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-03-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'มีนาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-04-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'เมษายน',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-05-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'พฤษภาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-06-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'มิถุนายน',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-07-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'กรกฎาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-08-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'สิงหาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-09-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'กันยายน',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-10-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'ตุลาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-11-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'พฤศจิกายน',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2019-12-05',
      status: 'not paid'
    },
    {
      year: 2019,
      month: 'ธันวาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2020-01-05',
      status: 'not paid'
    },
    {
      year: 2020,
      month: 'ธันวาคม',
      room: 409,

      water_unit: 100,
      electric_unit: 400,
      common_fee: 464,

      dueDate: '2021-01-05',
      status: 'not paid'
    }
  ]
}

const mutations = {
  addItem(state, newItem) {
    state.invoice.push(newItem)
  },
  updateItem(state, { index, updatedItem }) {
    state.invoice.splice(index, 1, updatedItem)
  },
  setEditedItem(state, item) {
    state.editedItem = Object.assign({}, item)
  },
  setEditedIndex(state, index) {
    state.editedIndex = index
  },
  deleteItem(state, index) {
    state.invoice.splice(index, 1)
  },
  changeStatus(state, { year, month, room }) {
    const index = state.invoice.findIndex(
      (item) => item.year === year && item.month === month && item.room === room
    )
    if (index > -1) {
      state.invoice[index].status = 'paid'
    }
  }
}

const actions = {
  addItem({ commit }, newItem) {
    commit('addItem', newItem)
  },
  // ?????
  updateItem({ commit, state }, { updatedItem }) {
    // const invoiceIndex = state.invoice.findIndex(item => item.room === state.editedItem.room);
    const invoiceIndex = state.invoice.findIndex(
      (item) =>
        item.room === state.editedItem.room &&
        item.year === state.editedItem.year &&
        item.month === state.editedItem.month
    )
    // const invoiceYearIndex = state.invoice.findIndex(item => item.year === state.editedItem.year);
    // const invoiceMonthIndex = state.invoice.findIndex(item => item.month === state.editedItem.month);
    if (invoiceIndex > -1) {
      commit('updateItem', { index: invoiceIndex, updatedItem })
    } else {
      commit('addItem', updatedItem)
    }
  },
  editIndex({ commit }, index) {
    commit('setEditedIndex', index)
  },
  setEditedItem({ commit }, item) {
    commit('setEditedItem', item)
  },
  deleteItem({ commit }, index) {
    commit('deleteItem', index)
  },
  changeStatus({ commit, state }, { year, month, room }) {
    const index = state.invoice.findIndex(
      (item) => item.year === year && item.month === month && item.room === room
    )
    if (index > -1) {
      commit('changeStatus', { year, month, room })
    }
  }
}

const getters = {
  //Unique year
  uniqueYears: (state) => {
    const allYears = new Set(state.invoice.map((item) => String(item.year)))
    const sortedYears = Array.from(allYears).sort((a, b) => {
      return parseInt(a) - parseInt(b)
    })
    return ['All', ...sortedYears]
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
