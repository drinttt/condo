const state = {
    editedIndex: -1,
    editedItem: {},
    autophone: [
        {
            caller: '128',
            recipient: "0823334444",
            date: "2023-06-23",
            timeStart: "23:45:30",
            timeEnd: "23:55:30",
        },
        {
            caller: '161',
            recipient: "0823334444",
            date: "2023-06-23",
            timeStart: "23:45:30",
            timeEnd: "23:55:30",
        },
        {
            caller: '123',
            recipient: "0823334444",
            date: "2023-06-23",
            timeStart: "23:45:30",
            timeEnd: "23:55:30",
        },
        {
            caller: '4433',
            recipient: "0823334444",
            date: "2023-06-23",
            timeStart: "23:45:30",
            timeEnd: "23:55:30",
        },
    ],
}
  
const mutations = {
    addItem(state, newItem) {
        state.autophone.push(newItem)
    },
    updateItem(state, {index, updatedItem}) {
        state.autophone.splice(index, 1, updatedItem);
    },
    setEditedItem(state, item) {
        state.editedItem = Object.assign({}, item)
    },
    setEditedIndex(state, index) {
        state.editedIndex = index
    },
    deleteItem(state, index) {
        state.autophone.splice(index, 1)
    },
}
  
  
const actions = {
    addItem({ commit }, newItem) {
        commit('addItem' ,newItem)
    },
    updateItem({ commit, state}, { updatedItem }) {
        //กำหนดว่า ข้อมูลคนละตัวกัน
        const autophoneIndex = state.autophone.findIndex(item => item.caller === state.editedItem.caller && item.date == state.editedItem.date && item.timeStart == state.editedItem.timeStart)
        // const autophoneRecipientIndex = state.autophone.findIndex(item => item.recipient === state.editedItem.recipient)
        // const autophoneDateIndex = state.autophone.findIndex(item => item.date == state.editedItem.date)
        // const autophoneStartIndex = state.autophone.findIndex(item => item.timeStart == state.editedItem.timeStart)
        // const autophoneEndIndex = state.autophone.findIndex(item => item.timeEnd == state.editedItem.timeEnd)

        if (autophoneCallerIndex > -1){
            commit('updateItem', { index: autophoneIndex, updatedItem });
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
  