import Vue from "vue";
const listItems = {
  namespaced: true,
  state:{
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2
      }
    }
  },
  getters :{
    listToDo: ({ list }) => {return list }
  },
  mutations:{
    ADD_ITEM(state, item){
      Vue.set(state.list, item.id, item)
    }
  },
  actions:{
    addNewItem ({commit}, item){
      const newItem = { ...item , id: String(Math.random())};
      commit("ADD_ITEM", newItem);
    }
  }
};

export default listItems;