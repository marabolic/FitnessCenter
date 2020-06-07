<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li v-for="crumb in crumbs" :key="crumb.href" class="breadcrumb-item"><a :href="crumb.href">{{crumb.text}}</a></li>
		</ol>
	</nav>
</template>

<script>
import trainings from "../../data/programs.js"

export default {
	name: 'TrainingDetailsCrumbs',
	components: {
	},
	data: function(){
		return {
			crumbs:0
		}
	},
	created(){
        let id = Number(this.$route.params.id);
        let temp_train = trainings.find(
            training=>training.id==id
        );
        let training = temp_train;
		this.crumbs = [
			{
				text: "Home",
				href: "/"
			},
			{
				text: "Services",
				href: "/services"
			},
			{
				text: training.type,
				href: "/"+training.type.toLowerCase()+"/"+training.type
			},
			{
				text: training.subtype,
				href: "/trainingdetails/"+training.id
			},
		]
		let altcrumbs = [

			{
				text: "Početna",
				href: "/"
			},
			{
				text: "Usluge",
				href: "/services"
			},
			{
				text: training.alttype,
				href: "/"+training.type.toLowerCase()+"/"+training.type
			},
			{
				text: training.altsubtype,
				href: "/trainingdetails/"+training.id
			},
		]
		let lang = localStorage.getItem("lang");
		if(lang!="en")
			this.crumbs = altcrumbs;
		this.$forceUpdate();
	},
}
</script>
