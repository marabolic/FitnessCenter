<template>
	<div class="reservation">
		<div class="row">
			<div class="slightly-gray col-2">
				<FilterByType/>
			</div>
			<div class="col-10">
				<FilteredTrainingList/>
			</div>
		</div>
	</div>
</template>

<style>
</style>

<script>

import FilteredTrainingList from '../components/services/FilteredTrainingList.vue'
import FilterByType from '../components/services/FilterByType.vue'

export default {
	name: 'Reservation',
	components: {
		FilteredTrainingList,
		FilterByType
	},
	created: function(){
	}
}
</script>
