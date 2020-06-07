<template>
    <div class='programs'>
        <div class="row">
            <div class="slightly-gray col-2">
				<SortItems/>
			</div>
			<div class="col-10">
				<TrainingList/>
			</div>
        </div>
    </div>
</template>


<script>
    import TrainingList from '../components/services/TrainingList.vue'
    import SortItems from '../components/services/SortItems.vue'
    export default {
        name:'Programs',
        components:{
            TrainingList,
            SortItems
        },
    }
</script>
