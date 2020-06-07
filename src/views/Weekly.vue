<template>
	<div class="weekly">
		<div class="row gap">
			<div class="col-12">
				&nbsp;
			</div>
		</div>
		<div v-if="lang=='en'" class="row gap">
			<div class="col-12">
				&nbsp;
			</div>
		</div>
		<div v-else class="row gap">
			<div class="col-12">
				&nbsp;
			</div>
		</div>
		<div v-if="lang=='en'">
			<div class="row" v-for="(day, ind) in week" :key=day>
				<div class="col-12" v-if="terms[ind].length>0">
					<div class="row">
						<div class="weekday col-10 offset-2">
							<h1>{{day}}</h1>
						</div>
					</div>
					<div class="row">
						<div class="weekday offset-1 col-11">
							<hr>
						</div>
						<div class="col-1">
							&nbsp;
						</div>
					</div>
					<div class="row">
						<div class="col-11 offset-1">
							<div class="row">
								<div v-for="term in terms[ind]" class="col-6 col-sm-4 col-md-3 col-lg-2" :key="term.id">
									<TermBox :term="term" :id="id" />
								</div>
							</div>
						</div>
					</div>
					<div class="row gap">
						&nbsp;
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="row" v-for="(day, ind) in altweek" :key=day>
				<div class="col-12" v-if="terms[ind].length>0">
					<div class="row">
						<div class="weekday col-10 offset-2">
							<h1>{{day}}</h1>
						</div>
					</div>
					<div class="row">
						<div class="weekday offset-1 col-11">
							<hr>
						</div>
						<div class="col-1">
							&nbsp;
						</div>
					</div>
					<div class="row">
						<div class="col-11 offset-1">
							<div class="row">
								<div v-for="term in terms[ind]" class="col-6 col-sm-4 col-md-3 col-lg-2" :key="term.id">
									<TermBox :term="term" :id="id" />
								</div>
							</div>
						</div>
					</div>
					<div class="row gap">
						&nbsp;
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

.weekly gap{
	height: 20px;
}

.weekday{
	text-align: left;
}

.weekday hr{
	border-width: 4px;
}

</style>

<script>
import progs from '../components/data/programs.js';
import TermBox from '../components/services/TermBox.vue'

export default {
	name: 'Weekly',
	components: {
		TermBox
	},
	created: function(){
		this.lang = localStorage.getItem('lang');
		this.id = this.$route.params.id;
		let id = this.id;
		for(let i = 0; i < progs.length; i++){
			for(let j = 0; j < progs[i].terms.length; j++){
				if(id==progs[i].id){
					this.terms[progs[i].terms[j].day].push(progs[i].terms[j]);
				}
			}
		}
	}
	,
	data: function(){
		return{
			week: ["Sunday", "Monday", "Tuesday",
				"Wednesday", "Thursday", "Friday", "Saturday"],
			altweek: ["Nedelja", "Ponedeljak", "Utorak",
			"Sreda", "Cetvrtak", "Petak", "Subota"],
			lang: 0,
			terms:[[],[],[],[],[],[],[]],
			reserved: 0,
			id: 0
		}
	}
}
</script>
