<template>
         <Linkube img="Nutri.jpg" link="/nutritionist" :text=title />
</template>

<script>
import Linkube from "./Linkube"
export default {
    name:'NutriLink',
    components:{
        Linkube
    },
    data(){
        return{
            title: ["Nutritionist"]
        }
    },
	created: function(){
		let lang = localStorage.getItem("lang");
		if(lang == "en"){
			this.title = ["Nutritionist"];
		}
		else{
			this.title = ["Nutricionista"];
		}
	}
}
</script>
