<template>
        <Linkube img="Massage.jpg" link="/massage" :text=title />
</template>

<script>
import Linkube from "./Linkube"
export default {
    name:'MassageLink',
    components:{
        Linkube
    },
    data(){
        return{
            title: ["Massage"]
        }
    },
	created: function(){
		let lang = localStorage.getItem("lang");
		if(lang == "en"){
			this.title = ["Massage"];
		}
		else{
			this.title = ["Masaza"];
		}
	}
}
</script>
