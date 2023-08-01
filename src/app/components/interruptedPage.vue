<template>
    <div>
        <div class="shadow-5  q-size-sm text-center">
           <screen-list screen="Interrupted" title="Interrupted Status" :data="data"
            @addTasksStatus="addTasksStatus" @deleteTasks="deleteTask"/>
        </div>
    </div>
</template>
<script>
import mixin from '../mixins/mixins';
import screenList from './screenList.vue';
export default ({
    components:{
        screenList
    },mixins:[mixin],
    props:['data']
})
</script>
<style scoped></style>