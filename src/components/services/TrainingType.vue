<!--<template>
	<div>
		<div v-for='training in trainings.type' :key="training.id" > 
            <div v-if="training.type=type">
                <Linkube img="ClassicPilates.jpg" link="/pilates/+Pilates" :text=title />
            </div>
        </div>
	</div>
</template>


<script>
import progs from '../data/programs.js'
import Linkube from "./links/Linkube"
export default {
    name: "TrainingType",
    components:{
		Linkube
	},
	data(){
        return { 
            type: {},
            trainings: progs
        }
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }

        let type = this.$route.params.type;
        let temp_t = this.trainings.find(
            training=>training.type==type
        );
        this.type = temp_t;
        //console.log(this.training);
    }
}
</script>-->

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
						<Linkube :text=makeText(item) :img=item.pictures :link="/weekly/+item.id" />
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
						<Linkube :text=makeText(item) :img=item.pictures :link="/weekly/+item.id" />
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
	},
	methods:{
		check: function(){
			if(this.filter == null || this.filter == "undefined"){
				return false;
			}
			else{
				return true;
			}
		},
		makeText: function(item){
			return [item.type, item.subtype]
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
