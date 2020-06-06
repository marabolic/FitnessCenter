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
					<div v-for="item in items" class="col-4" :key=item.id>
						<Linkube :text=item.type :img=item.pictures link="/helo" />
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
					<div v-for="item in allItems" class="col-3" :key=item.id>
						<Linkube :text=item.type :img=item.pictures link="/helo" />
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
	margin: 10px;
}
</style>

<script>
import Linkube from '../Linkube.vue'
import progs from '../data/programs.js'

export default {
	name: 'FilteredTrainingList',
	components: {
		Linkube
	},
	created: function(){
        this.filter=this.$route.params.filter;
	},
	methods:{
		check: function(){
			if(this.filter == null || this.filter == "undefined"){
				return false;
			}
			else{
				return true;
			}
		}
	},
	updated: function(){
        this.filter=this.$route.params.filter;
	},
	data: function(){
		return{
			filter: 0,
			items: progs,
			allItems: progs
		}
	},
	watch: {
		'$route' () {
			this.filter=this.$route.params.filter;
			if(this.filter == null || this.filter == "undefined"){
				this.items=this.allItems;
			}
			else{
				this.items=[];
				for(let i = 0; i<this.allItems.length; i++){
					if(this.allItems[i].type == this.filter)
						this.items.push(this.allItems[i]);
				}
			}
		}

	}
}
</script>
