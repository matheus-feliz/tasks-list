<template>
    <div :class="`row  center ${colorHouver()} `"  >
        <span>{{ task.task }}</span>
        <div class="row">
            <div :class="`Circle ${selectColor(task.status)}`" @click="add(task.id, task.status)">
            </div>
            <div v-if="screen == 'open'" :class="`Circle ${selectColor('')}`" @click="add(task.id, '')">
            </div>
            <q-img class="btnD" src="../../assets/delete.svg" @click="deleteStatus(task.id, task.status)" />
        </div>
    </div>
</template>
<script>
export default ({
    data(){
        return{
            exibir:false,
        }
    },
    props: ['task', 'screen'],
    methods: {
        add(id, status, tasks) {
            let moveTask = {
                nextStatus: '',
                getTasks: '',
                setTasks: '',
                setNexTasks: '',
            }
            if (status == 'open' || status == '') {
                moveTask.nextStatus = status == '' ? 'Interrupted' : 'concluded'
                moveTask.getTasks = status == 'open' ? 'tasksConcluded' : 'tasksInterrupted'
                moveTask.setTasks = 'tasks'
                moveTask.setNexTasks = status == 'open' ? 'tasksConcluded' : 'tasksInterrupted'

            } else if (status == 'concluded' || status == 'Interrupted') {
                moveTask.nextStatus = 'open'
                moveTask.getTasks = "tasks"
                moveTask.setTasks = status == 'concluded' ? 'tasksConcluded' : 'tasksInterrupted'
                moveTask.setNexTasks = 'tasks'
            }
            this.$emit('addTasksStatus', id, moveTask, tasks)
        }, deleteStatus(id, status, tasks) {
            let item = {
                getList: '',
                setCommit: ''
            }
            item.getList = status == 'concluded' ? 'tasksConcluded' : status == 'open' ? 'tasks' : 'tasksInterrupted'
            item.setCommit = status == 'concluded' ? 'setListTasksConcluded' : status == 'open' ? 'setListTasksOpen' : 'setListTasksInterrupted'
            this.$emit('deleteTasks', id, item, tasks)
        },
        selectColor(status, select) {
            if (status === 'open') {
                if (select === true) {
                    return 'fullGreen'
                }
                return 'green'
            } else if (status === '' || status === 'Interrupted') {
                if (select === true) {
                    return 'fullRed'
                }
                return status == '' ? 'red' : 'blue'
            } else if (status === 'concluded') {
                if (select === true) {
                    return 'fullBlue'
                }
                return 'blue'
            }
        },
        colorHouver() {
            if (this.screen === 'open') {
                return 'hoverBlue'
            } else if (this.screen === 'Interrupted') {
                return 'hoverRed'
            } else if (this.screen === 'concluded') {
                return 'hoverGreen'
            }
        }
    },
})
</script>
<style scoped>
.btnD {
    width: 10px;
    height: 10px;
}
.btnD:hover {
    opacity: 0.5;
}

.Circle {
    border-radius: 5px;
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fullCircle:hover {
    opacity: 0.5;
}

.fullCircle {
    border-radius: 5px;
    width: 4px;
    height: 4px;
}
.blue {
    border: 2px solid #039be5;
}

.hoverBlue:hover{
    background-color: #039ae556;
}
.fullBlue {
    background-color: #039be5;
    opacity: 0.5;
}

.red {
    border: 2px solid #bf360c;
}
.hoverRed:hover{
    background-color: #bf360c56;
}

.fullRed {
    opacity: 0.5;
    background-color: #bf360c;
}

.fullGreen {
    opacity: 0.5;
    background-color: #7cb342;
}
.hoverGreen:hover{
    background-color: #7cb3425d;
}
.green {
    border: 2px solid #7cb342;
}

.decoracao {
    list-style: none;
    text-decoration: none;
}

.center {
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 100%;
}
</style>