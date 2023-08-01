import { createStore } from 'vuex'

export default createStore({
  state: {
    listTasksConcluded:'',
    listTasksInterrupted:'',
    listTasksOpen:''
  },
  getters: {
    getListTasksConcluded(state) {
      return state.listTasksConcluded;
    },
    getListTasksInterrupted(state){
      return state.listTasksInterrupted;
    },
    getlistTasksOpen(state){
      return state.listTasksOpen
    }
  },
  mutations: {
    setListTasksConcluded(state, item){
      state.listTasksConcluded = item;
    },
    setListTasksInterrupted(state, item){
      state.listTasksInterrupted = item;
    },   
    setListTasksOpen(state, item){
      state.listTasksOpen= item
    } 
  },
  actions: {
    setList(context,item){
      console.log(item)
      let list= JSON.parse(localStorage.getItem(`${item.getList}`));
     if(list != null && typeof list === 'object'){
       if(list.length >0){
        console.log(item.setCommit, list.length)
        context.commit(`${item.setCommit}`,list)
       }else{
        console.log(item.setCommit, null)
        context.commit(`${item.setCommit}`,null)
       }
     }
    }
  },
  modules: {
  }
})
