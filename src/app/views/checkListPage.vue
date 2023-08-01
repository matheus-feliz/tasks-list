<template>
  <bar-component>
    <div class="fatherDiv row">
      <div class="sizeCheckList">
        <transition appear enter-active-class="animate__animated animate__slideInRight animate__slow" leave-active-class="animate__animated animate__slideInLeft animate__slow">
          <interrupted-page v-if="getListTasksInterrupted != null" class="col  col-lg-8" :data="getListTasksInterrupted" />
        </transition>
        <open-page class="col  col-lg-8 open " :data="getListTasksOpen"/>
        <transition appear enter-active-class="animate__animated animate__slideInLeft animate__slow" leave-active-class="animate__animated animate__slideInRight animate__slow">
          <concluded-page v-if=" getListTasksConcluded != null " :data="getListTasksConcluded" class="col  col-lg-8" />
        </transition>
      </div>
    </div>
  </bar-component>
</template>

<script>
import barComponent from '../components/barComponent.vue';
import openPage from '../components/openPage.vue';
import concludedPage from '../components/concludedPage.vue';
import interruptedPage from '../components/interruptedPage.vue';
export default {
  components: {
    barComponent,
    openPage,
    concludedPage,
    interruptedPage
  },
  computed:{
    getListTasksConcluded(){
      return this.$store.getters.getListTasksConcluded;
    },
    getListTasksInterrupted(){
      return this.$store.getters.getListTasksInterrupted;
    },
    getListTasksOpen(){
      return this.$store.getters.getlistTasksOpen;
    }
  },
  created(){
        this.$store.dispatch('setList', {
            getList: 'tasksConcluded',
            setCommit: 'setListTasksConcluded'
        })
        this.$store.dispatch('setList', {
            getList: 'tasks',
            setCommit: 'setListTasksOpen'
        })
        this.$store.dispatch('setList', {
            getList: 'tasksInterrupted',
            setCommit: 'setListTasksInterrupted'
        })
    },
}
</script>

<style scoped>
.size {
  width: 70%;
}
.fatherDiv {
  height: 100vh;
  display: flex;
  justify-content: center;
}
.sizeCheckList{
  width: 80%;
  display: flex;
  justify-content: center;
}
.sizeCheckList > div:nth-child(-n+2){
  margin: 0% 4% 0% 0% ;
}

.open{
  z-index: 10;
}
@media (min-width: 300px) and (max-width:900px){
  .sizeCheckList{
    display: initial;
  }
  .sizeCheckList > div:nth-child(-n+2){
  margin: 4% 0% 4% 0% ;
}
}

</style>