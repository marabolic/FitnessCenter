<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li v-for="crumb in crumbs" :key="crumb.href" class="breadcrumb-item"><a :href="crumb.href">{{crumb.text}}</a></li>
		</ol>
	</nav>
</template>

<script>

export default {
	name: 'TrainingTypeCrumbs',
	components: {
	},
	data: function(){
		return {
			crumbs:0
		}
	},
	created(){
		let type = this.$route.params.type;
		let alttype = "";
		if(type == "Yoga")
			alttype = "Joga";
		if(type == "Core")
			alttype = "Kor";
		if(type == "Cardio")
			alttype = "Kardio";
		if(type == "Pilates")
			alttype = "Pilates";
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
				text: type,
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
				text: alttype,
			},
		]
		let lang = localStorage.getItem("lang");
		if(lang!="en")
			this.crumbs = altcrumbs;
		this.$forceUpdate();
	},
}
</script>
