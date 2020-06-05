<template>
	<div>
		<!--<div v-for='training in trainings.type' :key="training.id" > 
            <div v-if="training.type=type">
                <router-link :to='/trainingdetails/+training.id'>
                    <Training :training='training'/>
                </router-link>
            </div>
        </div>-->
        <h2>Tip: {{type}} </h2>
	</div>
</template>


<script>
import progs from '../data/programs.js'
export default {
	name: "TrainingType",
	data(){
        return { 
            type: {},
            trainings: progs
        }
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }

        let type = this.$route.params.type;
        let temp_t = this.trainings.find(
            training=>training.type==type
        );
        this.type = temp_t;
        //console.log(this.training);
    }
}
</script>