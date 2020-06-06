<template>
    <div class='training'>
        <div >
            <div v-if="lang=='en'">
                <Linkube img="Massage.jpg" :link="/training/+training.id" :text=text />
                
            </div>
            <div v-else>
                <h3>{{training.alttype}}</h3>
                <h5>{{training.altsubtype}}</h5>
                <h5>{{training.rating}}</h5>
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
    },
    data(){
        return{
            text: ""
        }
    }
}
</script>

