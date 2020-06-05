<template>
	<div class="reservation">
		<div class="row">
			<div class="slightly-gray col-2">
				<FilterByType/>
			</div>
			<div class="col-10">
				<Weekly/>
			</div>
		</div>
	</div>
</template>

<style>
</style>

<script>

import Weekly from '../components/services/Weekly.vue'
import FilterByType from '../components/services/FilterByType.vue'

export default {
	name: 'Reservation',
	components: {
		Weekly,
		FilterByType
	},
	created(){
	}
}
</script>
