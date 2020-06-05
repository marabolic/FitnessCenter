<template>
    <div class= 'services'>
        <TypeLink msg="Welcome to Your Vue.js App"/>
        <MassageLink msg="Welcome to Your Vue.js App"/>
        <NutritionistLink msg="Welcome to Your Vue.js App"/>
    </div>
</template>


<script>
    import TypeLink from "../components/services/links/TypeLink"
    import MassageLink from "../components/services/links/MassageLink"
    import NutritionistLink from "../components/services/links/NutriLink"
    export default {
            name:"Services",
            components:{
                TypeLink,
                MassageLink,
                NutritionistLink
            }
    }
</script>