<template>
    <div>
        <div rounded class="shadow-5  q-size-sm text-center">
            <screen-list screen="open" title="Open Status"  :data="data" @addTasksStatus="addTasksStatus" @deleteTasks="deleteTask" />
            <div class=" row justify-center size ">
                <div class="col-8 q-mb-sm hei">
                    <q-input v-model="taskText"  @keyup.enter="add('tasks')">
                        <template v-slot: prepend>
                            <q-btn round  flat icon="add" @click="add('tasks')" />
                        </template>
                    </q-input>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mixin from '../mixins/mixins'
import screenList from './screenList.vue';
export default ({
    data() {
        return {
            taskText: "",
        };
    },components:{
        screenList
    },props:['data'],
    mixins:[mixin],
    methods: {
        add(setList) {
            let getTasks=this.getTasks('tasks')
            let tasks = getTasks? getTasks : []
            if(this.taskText != ""){
            let id= this.getTasks('id')? this.getTasks('id'): 0;
            tasks.push({ id:`${id}` ,task: this.taskText, status: "open" });
            this.taskText = "";
            this.setTask(setList, tasks)
            this.setTask('id', id+1)
            this.$store.commit('setListTasksOpen', tasks)
            }
        },
    },
})
</script>

<style scoped>
.size {
    width: 100%;
    height: 2%;
}

.hei {
    height: 5%;
}
</style>