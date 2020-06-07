<template>
	<div class="myacc">
		<div class="row gap">
			<div class="col-12">
				&nbsp;
			</div>
		</div>
		<div v-if="!noReserved()" class="row">
			<div class="col-12">
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
										<div v-for="(term, j) in terms[ind]" class="col-6 col-sm-4 col-md-3 col-lg-2" :key="term.id">
											<TermBox :term="term" :id="ids[ind][j]" />
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
										<div v-for="(term, j) in terms[ind]" class="col-6 col-sm-4 col-md-3 col-lg-2" :key="term.id">
											<TermBox :term="term" :id="ids[ind][j]" />
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
		</div>
		<div v-else class="row">
			<div v-if="lang=='en'" class="offset-3 col-6">
				<h1> No Reservations </h1>
				<hr>
				<p>
					You have not made any reservations, <br>
					if you wish to do so you can by using the Reservations section <br>
					Your new reservations should appear here
					<br><br><br><br><br><br><br><br><br><br><br>
				</p>
			</div>
			<div v-else class="offset-3 col-6">
				<h1> Nemate Rezervacije  </h1>
				<hr>
				<p>
					Jos niste izabrali rezervaciju, <br>
					Ukoliko to zelite da ucinite mozete na sekciji Rezervacija<br>
					Vase nove rezervacije bi trebale da se pojave ovde
					<br><br><br><br><br><br><br><br><br><br><br>
				</p>
			
			</div>
		</div>
	</div>
</template>

<style>
.myacc{
}
</style>

<script>
import progs from '../components/data/programs.js';
import TermBox from '../components/services/TermBox.vue'

export default {
	name: 'MyAccount',
	components: {
		TermBox
	},
	created: function(){
		this.lang = localStorage.getItem('lang');
		this.reserved = JSON.parse(localStorage.getItem('reserved'));
		let reserved = this.reserved;
		let r = !(reserved == null || reserved == "undefined")
		for(let i = 0; i < progs.length; i++){
			let id = progs[i].id;
			for(let j = 0; j < progs[i].terms.length; j++){
				if(r && this.reserved.find(res => (res.id == id && 
					res.termid == progs[i].terms[j].id))){
					this.terms[progs[i].terms[j].day].push(progs[i].terms[j]);
					this.ids[progs[i].terms[j].day].push(progs[i].id);
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
			ids:[[],[],[],[],[],[],[]],
			reserved: 0,
			id: 0
		}
	},
	methods: {
		noReserved: function(){
			this.reserved = JSON.parse(localStorage.getItem('reserved'));
			let reserved = this.reserved;
			let r = !(reserved == null || reserved == "undefined")
			if(!r)
				return true;
			return reserved.length==0;
		}
	}
}
</script>
