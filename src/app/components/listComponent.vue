<template>
    <div :class="`row  center ${colorHouver()} `">
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
    data() {
        return {
            exibir: false,
        }
    },
    props: ['task', 'screen'],
    methods: {
        add(id, status) {
            let moveTask = {
                nextStatus: status == '' ? 'Interrupted' : status == 'open' ? 'concluded' : 'open',
                getTasks: status == 'open' ? 'tasksConcluded' : status == '' ? 'tasksInterrupted' : 'tasks',
                setTasks: status == '' || status == 'open' ? 'tasks' : status == 'Interrupted' ? 'tasksInterrupted' : 'tasksConcluded',
                setNexTasks: status == 'open' ? 'tasksConcluded' : status == '' ? 'tasksInterrupted' : 'tasks',
                status: status == '' ? 'Interrupted' : status
            }
            this.$emit('addTasksStatus', id, moveTask)
        }, deleteStatus(id, status) {
            let item = {
                getList: status == 'concluded' ? 'tasksConcluded' : status == 'open' ? 'tasks' : 'tasksInterrupted',
                setCommit: status == 'concluded' ? 'setListTasksConcluded' : status == 'open' ? 'setListTasksOpen' : 'setListTasksInterrupted'
            }
            this.$emit('deleteTasks', id, item)
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
@keyframes changeContent {
  0% {
    width: 0%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
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

.hoverBlue::after {
    width: 0%;
    height: 2px;
    background-color: #039ae556;
    animation-direction: reverse;
    transition: 1s ease-in-out;
}

.hoverBlue:hover::after {
    content: "";
    animation: changeContent 1s ease-in-out;
    width: 100%;
}
.fullBlue {
    background-color: #039be5;
    opacity: 0.5;
}
.red {
    border: 2px solid #bf360c;
}
.hoverRed::after {
    width: 0%;
    height: 2px;
    background-color: #bf360c56;
    transition: 1s ease-in-out;
}
.hoverRed:hover::after {
    content: '';
    animation: changeContent 1s ease-in-out;
    width: 100%;
}
.fullRed {
    background-color: #bf360c;
}
.fullGreen {
    background-color: #7cb342;
}

.hoverGreen::after {
    width: 0%;
    height: 2px;
    background-color: #7cb3425d;
    transition: 1s ease-in-out;
}
.hoverGreen:hover::after {
    content: '';
    animation: changeContent 1s ease-in-out;
    width: 100%;
}

.green {
    border: 2px solid #7cb342;
}
.decoracao {
    list-style: none;
    text-decoration: none;
}</style>