<template >
	<div v-if="lang == 'en'" class="vertical-menu">
		<div v-if="filter == 'Core'">
			<a class="active">Core</a>
		</div>
		<div v-else>
			<a @click='go("Core")'>Core</a>
		</div>
		<div v-if="filter == 'Cardio'">
			<a class="active">Cardio</a>
		</div>
		<div v-else>
			<a @click='go("Cardio")'>Cardio</a>
		</div>
		<div v-if="filter == 'Yoga'">
			<a class="active">Yoga</a>
		</div>
		<div v-else>
			<a @click='go("Yoga")'>Yoga</a>
		</div>
		<div v-if="filter == 'Pilates'">
			<a class="active">Pilates</a>
		</div>
		<div v-else>
			<a @click='go("Pilates")'>Pilates</a>
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
		<div v-if="filter == 'Pilates'">
			<a class="active">Pilates</a>
		</div>
		<div v-else>
			<a @click='go("Pilates")'>Pilates</a>
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
export default {
	name: 'FilterByType',
	components: {
	},
	created: function(){
        this.filter=this.$route.params.filter;
		this.lang = localStorage.getItem("lang");
	},
	data: function(){
		return{
			filter: 0,
			lang: 0
		}
	},
	methods:{
		go: function(path){
			if(this.filter == null || this.filter == "undefined"){
				this.$router.push('reservation/'+path);
			}
			else{
				this.$router.replace(path);
			}
			this.filter=path;
			this.$forceUpdate();
		}
	},
	watch: {
		'$route' () {
			this.filter=this.$route.params.filter;
		}

	}
}
</script>
