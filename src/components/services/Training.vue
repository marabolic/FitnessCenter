<template>
    <div class='training'>
        <div class='card'>
            <div class='card-body' v-if="lang=='en'">
                <h3>{{training.type}}</h3>
                <h5>{{training.subtype}}</h5>
                <h5>{{training.rating}}</h5>
            </div>
            <div class='card-body' v-else>
                <h3>{{training.alttype}}</h3>
                <h5>{{training.altsubtype}}</h5>
                <h5>{{training.rating}}</h5>
            </div>
        </div>
    </div>
</template>

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

