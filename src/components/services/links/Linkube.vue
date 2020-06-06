<template>
	<div class="linkube">
		<router-link :to=mylink>
			<div class="row">
				<div class="col-12">
					<img :src="reslove_img()">
				</div>
				<div class="col-12 linkubebar">
					<div class="row" v-for="line in mytext" :key="line" >
						<div class="col-12">
							{{line}}
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<style>

.linkube{
	border-radius: 15px;
	background-color: #2c3e80;
	-moz-border-radius: 15px;
	width: 100%;
	height: 100%;
	padding-bottom: 25px;
	padding-top: 10px;
	padding-left: 10px;
	padding-right: 10px;
	left: 0;
	vertical-align: middle;
}

.linkube:hover{
	width: 100%;
	padding-left: 7px;
	padding-right: 7px;
}

.linkubebar{
	background-color: #72D0F4;
	color: white;
	height: auto;
	overflow-wrap: break-word;
	font-size: 1.5em;
	font-style: italic;
	text-transform: uppercase;
	font-weight: 500;
}

.linkube img{
	width: 100%;
}

</style>

<script>

export default {
	name: 'Linkube',
	data: function(){
		return {
			mylink: this.link,
			myimg: this.img,
			mytext: this.text
		}
	},
	components: {
	},
	props: [
		'link',
		'img',
		'text'
	],
	methods: {
		reslove_img: function(){
			let images = require.context('../../../../public/img/', false, /\.png$|\.jpg$/)
			return images("./"+this.myimg)
		}
	}
}

</script>
