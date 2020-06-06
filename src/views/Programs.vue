<template>
    <div class='programs'>
        <TrainingList/>
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
