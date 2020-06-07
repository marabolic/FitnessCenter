<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li v-for="crumb in crumbs" :key="crumb.href" class="breadcrumb-item"><a :href="crumb.href">{{crumb.text}}</a></li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: 'MassageCrumbs',
	components: {
	},
	data: function(){
		return {
			crumbs:0
		}
	},
	created(){
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
				text: "Massage",
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
				text: "Masaža",
			},
		]
		let lang = localStorage.getItem("lang");
		if(lang!="en")
			this.crumbs = altcrumbs;
		this.$forceUpdate();
	},
}
</script>
