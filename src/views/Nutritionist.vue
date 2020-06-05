<template>
     <div class='nutritionist'>
        <h2 v-if="lang=='en'">Nutritionist reservation</h2>
        <h2 v-else>Zakazivanje nutricioniste</h2>
        <NutriForm msg="Welcome to Your Vue.js App"/>
    </div>
</template>


<script>
import NutriForm from "../components/services/NutriForm"
export default {
    name:"Nutritionist",
    components:{
        NutriForm
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
    }
}
</script>