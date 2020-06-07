

<template>
	<div class="filtered">
		<div v-if="check()" class="row">
			<div class="col-12">
				<div class="row gap">
					<div class="col-12">
						&nbsp;
					</div>
				</div>
				<div class="row links">
					<div v-for="item in items" class="col-12 col-sm-6 col-md-4" :key=item.id>
						<Linkube :text=makeText(item) :img=item.pictures :link="/trainingdetails/+item.id" />
					</div>
				</div>
				<div class="row gap">
					<div class="col-12">
						&nbsp;
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="col-12">
				<div class="row gap">
					<div class="col-12">
						&nbsp;
					</div>
				</div>
				<div class="row links">
					<div v-for="item in allItems" class="col-12 col-sm-6 col-md-4" :key=item.id>
						<Linkube :text=makeText(item) :img=item.pictures :link="/trainingdetails/+item.id" />
					</div>
				</div>
				<div class="row gap">
					<div class="col-12">
						&nbsp;
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.gap{
	height: 35px;
}
.links > *{
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>

<script>
import Linkube from '../services/links/Linkube.vue'
import progs from '../data/programs.js'

export default {
	name: 'TrainingType',
	components: {
		Linkube
	},
	created: function(){
        this.filter=this.$route.params.type;
        
        this.filter=this.$route.params.type;
        if(this.filter == null || this.filter == "undefined"){
                console.log(this.filter);
            this.items=this.allItems;
        }
        else{
            this.items=[];
            
            for(let i = 0; i<this.allItems.length; i++){
                if(this.allItems[i].type == this.filter)
                    this.items.push(this.allItems[i]);
            }
        }
},
	methods:{
		check: function(){
            this.filter=this.$route.params.type;
			if(this.filter == null || this.filter == "undefined"){
				return false;
			}
			else{
				return true;
			}
		},
		makeText: function(item){
			let lang = localStorage.getItem("lang");
			if(lang == "en")
				return [item.type, item.subtype]
			else
				return [item.alttype, item.altsubtype]
		}
	},
	updated: function(){
        this.filter=this.$route.params.type;
	},
	data: function(){
		return{
			filter: 0,
			items: progs,
			allItems: progs
		}
	},
}
</script>
 
