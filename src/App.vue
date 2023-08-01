<template>
 <checkListPage/>
</template>

<script>
import { ref } from 'vue'
import checkListPage from './app/views/checkListPage.vue';
export default {
  name: 'LayoutDefault',
  components:{
    checkListPage
  },
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
