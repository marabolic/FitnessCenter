<template>
	<div class="termbox">
		<div class="row">
			<div class="col-12">
				<div class="row">
					<div class="col-12">
						Time: {{myterm.hour}}:{{myterm.min}}
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						Left: {{myterm.left}}
					</div>
				</div>
				<div v-if="showBtn()" class="row">
					<div v-if="showRedBtn()" class="col-12">
						<button @click="redBtnClick()" class="btn btn-danger">
							{{btnText1}}
						</button>
					</div>
					<div v-else class="col-12">
						<button @click="btnClick()" class="btn btn-primary">
							{{btnText2}}
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

export default {
	name: "TermBox",
	components: {
	},
	created: function(){
		this.myterm = this.term;
		let lang = localStorage.getItem("lang");
		if(lang == null || lang == "undefined"){
			lang = "sr";
		}
		if(lang=="en"){
			this.btnText1 = "Reserve";
			this.btnText2 = "Unreserve";
			this.btnText3 = "Reserved";
		}
		else{
			this.btnText1 = "Rezervisi";
			this.btnText2 = "Odjavi";
			this.btnText3 = "Rezervisano";
		}
	},
	props: [
		"term"
	],
	data: function(){
		return{
			myterm: 0,
			btnText1: "",
			btnText2: "",
		}
	},
	methods:{
		showBtn: function(){
			return true
		},
		showRedBtn: function(){
			return true;
		},
		isReserved: function(){
			return true;
		},
		btnClick: function(){
		},
		redBtnClick: function(){
		},
	}
}
</script>
