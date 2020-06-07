<template >
	<div v-if="lang == 'en'" class="vertical-menu">
		<div @click="sortByName">
			<a class="active">Sort by Name</a>
		</div>
		
		<div @click="sortByDuration">
			<a class="active">Sort by Duration</a>
		</div>
		
		<div @click="sortByDifficulty">
			<a class="active">Sort by Difficulty</a>
		</div>
		
	
	</div> 
	<div v-else class="vertical-menu">
		<div v-if="filter == 'Core'">
			<a class="active">Kor</a>
		</div>
		<div v-else>
			<a @click='go("Core")'>Kor</a>
		</div>
		<div v-if="filter == 'Cardio'">
			<a class="active">Kardio</a>
		</div>
		<div v-else>
			<a @click='go("Cardio")'>Kardio</a>
		</div>
		<div v-if="filter == 'Yoga'">
			<a class="active">Joga</a>
		</div>
		<div v-else>
			<a @click='go("Yoga")'>Joga</a>
		</div>
	</div> 
</template>

<style>

.vertical-menu{
	width: 100%;
	height: 100%;
	border-top: #00BFF0 8px solid;
	background-color: #F0F0F0;
}

.vertical-menu a{
	background-color: #72D0F4;
	color: white;
	display: block;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-right: 0;
	text-decoration: none;
	width: 100%;
}

.vertical-menu a:hover{
	background-color: #00BFF0;
	color: white;
}

.vertical-menu a.active{
	background-color: #00BFF0;
	color: white;
}

</style>

<script>
import progs from '../data/programs.js'

export default {
	name: 'SortList',
	components: {
	},
	created(){
		this.lang = localStorage.getItem("lang");
	},
	data(){
		return { 
            trainings: progs,
            lang: 0
        }
	},
	methods:{
		sortByName(){
            this.trainings = this.trainings.sort(function(a,b){
                if (a.subtype < b.subtype)
                    return -1;
                if (a.subtype > b.subtype)
                    return 1;
                return 0;
                
            });
        },
        sortByDifficulty(){
            this.trainings = this.trainings.sort(function(a,b){
                if (a.difficulty > b.difficulty)
                    return -1;
                if (a.difficulty > b.difficulty)
                    return 1;
                return 0;
            });
        },
        sortByDuration(){
            this.trainings = this.trainings.sort(function(a,b){
                if (a.duration > b.duration)
                    return -1;
                if (a.duration < b.duration)
                    return 1;
                return 0;
            });
        }
	}
}
</script>
