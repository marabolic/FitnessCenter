<template>
	<div class="termbox">
		<div class="row">
			<div class="col-12">
				<div class="row">
					<div class="col-12">
						{{myTren}}
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						{{mySub}}
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						{{timeTxt}}: {{myterm.hour}}:{{myterm.min}}
					</div>
				</div>
				<div class="row"> <div class="col-12">
						{{leftTxt}}: {{left}}
					</div>
				</div>
				<div v-if="showBtn()" class="row">
					<div v-if="showRedBtn()" class="col-12">
						<button @click="redBtnClick()" class="btn btn-danger">
							{{btnText2}}
						</button>
					</div>
					<div v-else class="col-12">
						<button @click="btnClick()" class="btn btn-primary">
							{{btnText1}}
						</button>
					</div>
				</div>
				<div v-else class="col-12">
					<div v-if="isReserved()" class="col-12">
						{{btnText3}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

.termbox{
	background-color: #00BFF0;
	border-radius: 10px;
	padding-top: 7px;
	padding-bottom: 7px;
}

</style>

<script>
import progs from "../data/programs.js"

export default {
	name: "TermBox",
	components: {
	},
	created: function(){
		this.myterm = this.term;
		let lang = localStorage.getItem("lang");
		this.trenid = this.id;
		if(this.isReserved())
			this.left = this.myterm.left - 1;
		else
			this.left = this.myterm.left;

		if(lang == null || lang == "undefined"){
			lang = "sr";
		}
		if(lang=="en"){
			this.btnText1 = "Reserve";
			this.btnText2 = "Unreserve";
			this.btnText3 = "Reserved";
			this.timeTxt = "Time";
			this.leftTxt = "Left";
		}
		else{
			this.btnText1 = "Rezervisi";
			this.btnText2 = "Odjavi";
			this.btnText3 = "Rezervisano";
			this.timeTxt = "Vreme";
			this.leftTxt = "Preostalo";
		}
		for(let i = 0; i < progs.length; i++){
			if(progs[i].id == this.id){
				if(lang=="en"){
					this.myTren = progs[i].type;
					this.mySub =  progs[i].subtype;
				}
				else{
					this.myTren = progs[i].alttype;
					this.mySub =  progs[i].altsubtype;
				}
			}
		}
	},
	props: [
		"term",
		"id"
	],
	data: function(){
		return{
			myterm: 0,
			btnText1: "",
			btnText2: "",
			trenid: 0,
			left: 0,
			myTren:0,
			mySub: 0
		}
	},
	methods:{
		showBtn: function(){
			let isRes = this.isReserved();
			if(!isRes && this.myterm.left == 0)
				return false;
			let now = new Date();
			let isInHalfHour = true;
			if(now.getDay()>this.myterm.day){
				isInHalfHour = false
			}
			else if(now.getDay()<this.myterm.day){
				isInHalfHour = false
			}
			else{
				let x = 60*now.getHours() + now.getMinutes();
				let y = 60*this.myterm.hour + this.myterm.min;
				if(x>y){
					isInHalfHour = false;
				}
				else{
					isInHalfHour = (y-x <= 30);
				}
			}
			if(isRes && isInHalfHour)
				return false;
			return true;
		},
		showRedBtn: function(){
			return this.isReserved();
		},
		isReserved: function(){
			let reserved = localStorage.getItem('reserved');
			if(reserved==null || reserved=="undefined"){
				return false;
			}
			reserved = JSON.parse(reserved);
			for(let i = 0; i < reserved.length; i++){
				if(reserved[i].id == this.trenid &&
					reserved[i].termid == this.myterm.id){
					return true;
				}
			}
			return false;
		},
		btnClick: function(){
			if(!this.showBtn() || this.showRedBtn())
				return;
			let reserved = localStorage.getItem('reserved');
			if(reserved==null || reserved=="undefined"){
				reserved = [];
			}
			else{
				reserved = JSON.parse(reserved);
			}
			let now = new Date();
			let until = 0;
			if(now.getDay() > this.myterm.day){
				until = 7 + this.myterm.day - now.getDay();
			}
			else{
				until = this.myterm.day - now.getDay();
			}
			until*=24;
			until -= now.getHours();
			until*=60;
			until -= now.getMinutes();
			until*=60;
			until -= now.getSeconds();
			until*=1000;
			until+= this.myterm.hour*60*60*1000 + this.myterm.min*60*1000;
			let timest = now.getTime() + until;
			reserved.push({id: this.trenid, termid: this.myterm.id, time: timest});
			reserved = JSON.stringify(reserved);
			localStorage.setItem('reserved', reserved);
			this.left-=1;
			this.$forceUpdate();
		},
		redBtnClick: function(){
			if(!this.showBtn() || !this.showRedBtn())
				return;
			let reserved = JSON.parse(localStorage.getItem('reserved'));
			for(let i = 0; i < reserved.length; i++){
				if(reserved[i].id == this.trenid &&
					reserved[i].termid == this.myterm.id){
					reserved.splice(i,1);
					break;
				}
			}
			reserved = JSON.stringify(reserved);
			localStorage.setItem('reserved', reserved);
			this.left+=1;
			this.$forceUpdate();
		},
	}
}
</script>
