<template>
<div>
	<router-link :to='/yoga/+Yoga' >
		Yoga
	</router-link>
	<router-link :to='/pilates/+Pilates'>
		Pilates
	</router-link>
	<router-link :to='/core/+Core'>
		Core
	</router-link>
	<router-link :to='/cardio/+Cardio'>
		Cardio
	</router-link>
</div>
</template>

<script>


export default {
	name:"TypeLink",
	components: {
		
	},
	data(){
		return{
			Yoga : "Yoga",
			Pilates: "Pilates",
			Core: "Core",
			Cardio: "Cardio"
		}
	}

}
</script>


