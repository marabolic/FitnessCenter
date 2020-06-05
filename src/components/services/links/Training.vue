<template>
    <div class='training'>
        <div >
            <div v-if="lang=='en'">
                <h3>{{training.type}}</h3>
                <h5>{{training.subtype}}</h5>
                <h5>{{training.rating}}</h5>
            </div>
            <div v-else>
                <h3>{{training.alttype}}</h3>
                <h5>{{training.altsubtype}}</h5>
                <h5>{{training.rating}}</h5>
            </div>
        </div>
    </div>
</template>

<style>
    .card{
        width: 100%;

    }
    .card-body{
        width: 100%;

    }
</style>

<script>
export default {
    name: 'Training',
    props:[
        'training'
    ],
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
    }
}
</script>

