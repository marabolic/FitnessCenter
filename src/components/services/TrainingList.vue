<template>
    <div v-if="lang=='en'">
        <h3>Programs</h3>
         <div v-for='training in trainings' :key="training.id" > 
            <div v-if="training">
                <router-link :to='/trainingdetails/+training.id'>
                    <Training :training='training'/>
                    

                </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <h3>Programi</h3>
        <div v-for='training in trainings' :key="training.id" > 
            <div v-if="training">
                <!--<router-link :to='/trainingdetails/+training.id'>-->
                <router-link :to='/trainingdetails/+training.id'>
                    <Training :training='training'/>
                    
                </router-link>
            </div>
        </div>
    </div>
    
</template>


<script>
import Training from '../services/Training'
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


