<template>
    <div class='training'>
        <div >
            <div v-if="lang=='en'">
                <Linkube :img=training.pictures :link="/trainingdetails/+training.id" :text=text />
                
            </div>
            <div v-else>
                <Linkube :img=training.pictures :link="/trainingdetails/+training.id" :text=alttext />
            </div>
        </div>
    </div>
</template>

<style>
    .card{
        width: 100%;

    }
    .card-body{
        width: 100%;

    }
</style>

<script>
import Linkube from "./Linkube"

export default {
    name: 'Training',
    props:[
        'training'
    ],
    components:{
        Linkube
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }

        this.text = [this.training.type ,
                this.training.subtype,
                this.training.rating];
        this.alttext =  [this.training.alttype ,
                this.training.altsubtype,
                this.training.rating];
    },
    data(){
        return{
            text: ""
        }
    }
}
</script>

