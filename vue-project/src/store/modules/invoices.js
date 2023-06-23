const state = {
    editedIndex: -1,
    editedItem: {},
    invoice: [{
        year: 2018,
        month: 'มกราคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
        // -----------------
        common_fee: 464,
        status: 'not paid',
    },
    {
        year: 2018,
        month: 'กุมภาพันธ์',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'มีนาคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'เมษายน',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'พฤษภาคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'มิถุนายน',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'กรกฎาคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'สิงหาคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'กันยายน',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'ตุลาคม',
        room: 101,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'พฤศจิกายน',
        room: 204,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2018,
        month: 'ธันวาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'มกราคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'กุมภาพันธ์',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'มีนาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'เมษายน',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'พฤษภาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'มิถุนายน',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'กรกฎาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'สิงหาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'กันยายน',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'ตุลาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'พฤศจิกายน',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2019,
        month: 'ธันวาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    {
        year: 2020,
        month: 'ธันวาคม',
        room: 409,
        water_unit: 100,
        electric_unit: 400,
    },
    ]
}
  
  const mutations = {
    addItem(state, newItem) {
        state.invoice.push(newItem);
    },
    updateItem(state, { index, updatedItem }) {
        state.invoice.splice(index, 1, updatedItem);
    },
    setEditedItem(state, item) {
        state.editedItem = Object.assign({}, item);
    },
    setEditedIndex(state, index) {
        state.editedIndex = index;
    },
    deleteItem(state, index) {
        state.invoice.splice(index, 1)
    },
  }
  
  const actions = {
    addItem({ commit }, newItem) {
        commit('addItem', newItem)
    },
    // ?????
    updateItem({ commit, state }, { updatedItem }) {
        const invoiceIndex = state.invoice.findIndex(item => item.room === state.editedItem.room);
        const invoiceYearIndex = state.invoice.findIndex(item => item.year === state.editedItem.year);
        const invoiceMonthIndex = state.invoice.findIndex(item => item.month === state.editedItem.month);
        if (invoiceIndex > -1 && invoiceYearIndex > -1 && invoiceMonthIndex > -1) {
            commit('updateItem', { index: invoiceIndex, updatedItem });
        }
    },
    editIndex({ commit }, index) {
        commit('setEditedIndex', index);
    },
    setEditedItem({ commit }, item) {
        commit('setEditedItem', item);
    },
    deleteItem({commit}, index) {
        commit('deleteItem', index) 
    },
  }
  
  const getters = {
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  