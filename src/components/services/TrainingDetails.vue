<template>
    <div class='training' v-if="lang=='en'">
      <h3>Type: {{training.type}}</h3>
      <h5>Subtype: {{training.subtype}}</h5>
      <h5>Difficulty: {{training.difficulty}}</h5>
      <h5>Gallery: {{training.pictures}}</h5>
      <h5>Video gallery: {{training.video}}</h5>
      <h5>Comments:{{training.comments}}</h5>
      <h5>Rating: {{training.rating}}</h5>
   </div>
   <div  v-else>
      <h3>Tip: {{training.alttype}}</h3>
      <h5>Podtip: {{training.altsubtype}}</h5>
      <h5>Tezina: {{training.difficulty}}</h5>
      <h5>Galerija: {{training.pictures}}</h5>
      <h5>Video galerija: {{training.video}}</h5>
      <h5>Komentari: {{training.coments}}</h5>
      <h5>Ocena: {{training.rating}}</h5>
    </div>
</template>

<script>
import trainings from '../data/programs.js'

export default {
    name: 'TrainingDetails',
     data(){
        return{
            training: {},
            trainings: trainings
        }
    },
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
        let id = Number(this.$route.params.id);
        let temp_train = this.trainings.find(
            training=>training.id==id
        );
        this.training = temp_train;
        //console.log(this.training);
    }
}
</script>

