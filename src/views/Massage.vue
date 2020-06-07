<template>
    <div class='massage'>
        <h2 v-if="lang=='en'">Massage reservation</h2>
        <h2 v-else>Zakazivanje masaze</h2>
        <MassageForm msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import MassageForm from "../components/services/MassageForm"
export default {
    name:"Massage",
    components:{
        MassageForm
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
    }
}



</script>
