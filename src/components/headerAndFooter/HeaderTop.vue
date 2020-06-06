<template>
<div class="container">
    <div class="text-right">
        <a @click="setEn()" href="">
            English
            <img src="../../../public/img/en.png">
        </a>
        |
        <a @click="setSr()" href="">
            Srpski
            <img src="../../../public/img/sr.png">
        </a>
    </div>
</div>
</template>


<script>

export default {
	name: 'FilteredTrainingList',
	components: {
	},
	created: function(){
        this.filter=this.$route.params.filter;
	},
	methods:{
		setEn: function(){
			localStorage.setItem("lang", "en");
			window.location.reload(false);

		},
		setSr: function(){
			localStorage.setItem("lang", "sr");
			window.location.reload(false);
		}
	},
	data: function(){
		return{
		}
	}, }
</script>
