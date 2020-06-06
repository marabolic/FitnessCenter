<template>
	<div class='row'>
		<div class='col-3'>
			<Linkube img="Meditation.jpg" link="/yoga/+Yoga" :text=titleY />
		</div>
		<div class='col-3'>
			<Linkube img="ClassicPilates.jpg" link="/pilates/+Pilates" :text=titleP />
		</div>
		<div class='col-3'>
			<Linkube img="Nutri.jpg" link="/core/+Core" :text=titleCo />
		</div>
		<div class='col-3'>
			<Linkube img="tabata.jpg" link="/core/+Cardio" :text=titleCa />
		</div>
	</div>
</template>

<script>

import Linkube from "./Linkube"
export default {
	name:"TypeLink",
	components:{
		Linkube
	},
	data(){
		return{
			Yoga : "Yoga",
			Pilates: "Pilates",
			Core: "Core",
			Cardio: "Cardio",
			titleY: ["Yoga"],
			titleP: ["Pilates"],
			titleCo: ["Core"],
			titleCa: ["Cardio"],
		}
	}

}
</script>


