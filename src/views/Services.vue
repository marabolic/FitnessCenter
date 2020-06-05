<template>
    <div class= 'services'>
        <Programs msg="Welcome to Your Vue.js App"/>
        <Massage msg="Welcome to Your Vue.js App"/>
        <Nutritionist msg="Welcome to Your Vue.js App"/>
    </div>
</template>


<script>
    import Programs from "../views/Programs"
    import Massage from "../views/Massage"
    import Nutritionist from "../views/Nutritionist"
    export default {
            name:"Services",
            components:{
                Programs,
                Massage,
                Nutritionist
            }
    }
</script>