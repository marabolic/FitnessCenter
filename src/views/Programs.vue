<template>
    <div class='programs'>
        <TrainingList msg="Welcome to Your Vue.js App"/>
    </div>
</template>


<script>
    import TrainingList from '../components/services/TrainingList.vue'
   
    export default {
        name:'Programs',
        components:{
            TrainingList
        }
    }
</script>
