<template>
    <div class= 'services'>
        <div class='row'>
            <div class='col-12'>
                <TypeLink/>
            </div>
        </div>
        <div class="row">
            <div class='col-3 offset-3'>
                <MassageLink/>
            </div>
            <div class='col-3'>
                <NutritionistLink/>
            </div>
        </div>
    </div>
</template>

<style >

.services > *{
    margin: 10px
}

</style>


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