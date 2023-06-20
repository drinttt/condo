const state = {
    editedIndex: -1,
    editedItem: {},
    expense: [{
        year: 2018,
        month: 'มกราคม',
        common_fee: 464,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'กุมภาพันธ์',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'มีนาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'เมษายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'พฤษภาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'มิถุนายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'กรกฎาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'สิงหาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'กันยายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'ตุลาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'พฤศจิกายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2018,
        month: 'ธันวาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    }, {
        year: 2019,
        month: 'มกราคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'กุมภาพันธ์',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'มีนาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'เมษายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'พฤษภาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'มิถุนายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'กรกฎาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'สิงหาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'กันยายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'ตุลาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'พฤศจิกายน',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2019,
        month: 'ธันวาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
    {
        year: 2020,
        month: 'ธันวาคม',
        common_fee: 500,
        water_bill: 100,
        electricity_bill: 400,
        repair_cost: 600,
        employee_salary: 20000
    },
]
}
  
  const mutations = {
    addItem(state, newItem) {
        state.expense.push(newItem)
    },
    updateItem(state, {index, updatedItem}) {
        state.expense.splice(index, 1, updatedItem);
    },
    setEditedItem(state, item) {
        state.editedItem = Object.assign({}, item)
    },
    setEditedIndex(state, index) {
        state.editedIndex = index
    },
    deleteItem(state, index) {
        state.expense.splice(index, 1)
    }
  }
  
  const actions = {
    addItem({ commit }, newItem) {
        commit('addItem' ,newItem)
    },
    updateItem({ commit, state}, { updatedItem }) {
        const expenseIndex = state.expense.findIndex(item => item.expense === state.editedItem.expense)
        if (expenseIndex > -1) {
            commit('updateItem', { index: expenseIndex, updatedItem });
        }
    },
    setEditedItem({ commit }, item){
        commit('setEditedItem', item)
    },
    editIndex({ commit } , index) {
        commit('setEditedIndex', index)
    },
    deleteItem({commit}, index) {
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
  