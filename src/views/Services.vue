<template>
    <div class= 'services'>
        <div class='row'>
            <div class='col-4'>
                <TypeLink msg="Welcome to Your Vue.js App"/>
            </div>
            <div class='col-4'>
                <MassageLink msg="Welcome to Your Vue.js App"/>
            </div>
            <div class='col-4'>
                <NutritionistLink msg="Welcome to Your Vue.js App"/>
            </div>
        </div>
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