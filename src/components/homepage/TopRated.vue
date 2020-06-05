<template>
    <div >
        <h3 v-if="lang=='en'">Top rated programs</h3>
        <h3 v-else>Najbolje ocenjeni programi</h3>
        <div class="row">
            <div class="col-sm-4" v-for='training in trainings.slice(0,3)' :key="training.id" > 
                <div v-if="training">
                    <router-link :to='/trainingdetails/+training.id'>
                        <Training :training='training'/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Training from '../services/links/Training'
import progs from '../data/programs.js'

export default {
    name: 'TopRated',
    components:{
        Training 
    },
    data(){
        return { 
            trainings: progs
        }
    },
   
    created(){    
        this.trainings = this.trainings.sort(function(a,b){
            if (a.rating > b.rating)
                return -1;
            if (a.rating < b.rating)
                return 1;
            return 0;
        });

        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
       
        
    }
   
}
</script>