<template>
    <div>
        <h3 v-if="lang=='en'">Programs</h3>
        <h3 v-else> Programi </h3>
        <div class="row">
            <div class='col-sm-4' v-for='training in trainings' :key="training.id"> 
                
                    <Training :training='training'/>
                
            </div>
        </div>
            
    </div>
</template>

<style>
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
    }

}
</script>


