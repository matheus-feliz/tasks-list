export default ({
    methods: {
        setTask(setList, tasks) {
            localStorage.setItem(`${setList}`, JSON.stringify(tasks));
        },
        getTasks(getList) {
            return  JSON.parse(localStorage.getItem(`${getList}`));
        },
        addTasksStatus(id, moveTask, tasks) {
                for (let i = 0; i < this.getTasks('id'); i++) {
                    if (tasks[i].id == id) {
                        let task = this.getTasks(moveTask.getTasks) ? this.getTasks(moveTask.getTasks) : [];
                        task.push({ id: tasks[i].id, task: tasks[i].task, status: moveTask.nextStatus })
                        tasks.splice(i, 1);
                        this.setTask(moveTask.setTasks, tasks)
                        this.setTask(moveTask.setNexTasks, task)
                        let commit= moveTask.nextStatus === 'concluded' ? 'setListTasksConcluded': moveTask.nextStatus === 'Interrupted'? 'setListTasksInterrupted': 'setListTasksOpen';
                        this.$store.commit(`${commit}`, this.getTasks(moveTask.setNexTasks));
                        break
                    }
                }
        },
        deleteTask(id,item, tasks) {
            for (let i = 0; i < tasks.length; i++) {
                if (id == tasks[i].id) {
                    tasks.splice(i, 1);
                    this.setTask(`${item.getList}`, tasks)
                    this.$store.dispatch('setList', item)
                    break;
                }
            }
        }
    },
    
})