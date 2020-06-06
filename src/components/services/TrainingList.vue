<template>
    <div>
        <h3 v-if="lang=='en'">Programs</h3>
        <h3 v-else> Programi </h3>
        <div class="row trList">
            <div class='col-sm-4' v-for='training in trainings' :key="training.id"> 
                    <Training :training='training'/>
            </div>
        </div>
            
    </div>
</template>

<style>
    .trList > *{
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>

<script>
import Training from '../services/links/Training'
import progs from '../data/programs.js'

export default {
    name: 'TrainingList',
    components:{
        Training
    },
    data(){
        return { 
            trainings: progs
        }
    },
   
    created(){    
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
        this.trainings = this.trainings.sort(function(a,b){
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
    }

}
</script>


