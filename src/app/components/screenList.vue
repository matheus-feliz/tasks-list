<template>
    <div>
        <div rounded class="sonDiv">
            <div :class="`${colorBg(screen)} text-center`">
                <span :class="`${colorTitle(screen)}`">
                    {{ title }}
                </span>
            </div>
            <ul class="decoracao">
                <li v-for="task in data" :key="task.id">
                    <transition appear enter-active-class="animate__animated animate__slideInLeft animate__slow"
                        leave-active-class="animate__animated animate__slideInRight animate__slow">
                        <list-component :screen="`${screen}`" :task="task" @addTasksStatus="addTasksStatus"
                            @deleteTasks="deleteTask" />
                    </transition>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import listComponent from './listComponent.vue';
export default ({
    components: {
        listComponent
    }, props: ['screen', 'data', 'title'],
    methods: {
        addTasksStatus(id, moveTask) {
            this.$emit('addTasksStatus', id, moveTask, this.data)
        },
        deleteTask(id, item) {
            this.$emit('deleteTasks', id, item, this.data)
        },
        colorBg(screen) {
            if (screen == 'open') {
                return 'bg-light-blue-7';
            } else if (screen == 'concluded') {
                return 'bg-light-green-7';
            } else if (screen == 'Interrupted') {
                return 'bg-deep-orange-10';
            }
        },
        colorTitle(screen) {
            if (screen == 'open') {
                return 'text-light-blue-1 text-body1';
            }
            else if (screen == 'concluded') {
                return 'text-light-blue-1  text-body1';
            }
            else if (screen == 'Interrupted') {
                return 'text-light-blue-1 text-body1';
            }
        },
    },
})
</script>

<style scoped>
.sonDiv {
    align-items: center;
    justify-content: center;
}

.decoracao {
    list-style: none;
    width: 100%;
    margin-left: -5.1%;
}

.center {
    align-items: center;
    justify-content: space-around;
    text-align: center;
}</style>