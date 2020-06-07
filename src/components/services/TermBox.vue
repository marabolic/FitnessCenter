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
					<div class="col-12">
						<button @click="btnClick()" class="btn btn-primary">
							Reserve
						</button>
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
	},
	props: [
		"term"
	],
	data: function(){
		return{
			myterm: 0,
		}
	},
	methods:{
		showBtn: function(){
		},
		btnClick: function(){
		}
	}
}
</script>
