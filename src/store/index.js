import { createStore } from "vuex";

export default createStore({
  state: {
    listTasksConcluded: "",
    listTasksInterrupted: "",
    listTasksOpen: "",
  },
  getters: {
    getListTasksConcluded(state) {
      return state.listTasksConcluded;
    },
    getListTasksInterrupted(state) {
      return state.listTasksInterrupted;
    },
    getlistTasksOpen(state) {
      return state.listTasksOpen;
    },
  },
  mutations: {
    setListTasksConcluded(state, item) {
      state.listTasksConcluded = item;
    },
    setListTasksInterrupted(state, item) {
      state.listTasksInterrupted = item;
    },
    setListTasksOpen(state, item) {
      state.listTasksOpen = item;
    },
  },
  actions: {
    setList(context, item) {
      let list = JSON.parse(localStorage.getItem(`${item.getList}`));
      if (list != null && typeof list === "object") {
        if (list.length > 0 || item.status) {
            context.commit(`${item.setCommit}`, list);
          if (item.nextCommit) {
            let previousCommit = item.status =='Interrupted' ? 'setListTasksInterrupted' :item.status == 'concluded' ? 'setListTasksConcluded': '' ;
            if(previousCommit != '' && list.length <= 0){
              context.commit(`${previousCommit}`,null)
            }
            item.getList = item.nextGetList;   item.setCommit = item.nextCommit;  item.nextCommit = item.nextGetList = "";
            context.dispatch("setList", item);
          }
        } else{
        context.commit(`${item.setCommit}`, null);
        }
      }else {
        context.commit(`${item.setCommit}`, null);
      }
    },
  },
  modules: {},
});
