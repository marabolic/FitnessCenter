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
					<div v-for="item in items" class="col-4" :key=item>
						<Linkube :text=item img="insta.jpg" link="/helo" />
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
					<div v-for="item in allItems" class="col-3" :key=item>
						<Linkube :text=item img="insta.jpg" link="/helo" />
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
			items: [1,2,3],
			allItems: [1,2,3,4,5,6]
		}
	},
	watch: {
		'$route' () {
			this.filter=this.$route.params.filter;
		}

	}
}
</script>
