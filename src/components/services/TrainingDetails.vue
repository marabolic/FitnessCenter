<template>
    <div class='training'>
        <h3 v-if="lang=='en'"> 
            Type: {{training.type}}
        </h3>
        <h3 v-else>
              Tip: {{training.alttype}}
        </h3>
        <h5 v-if="lang=='en'">Subtype: {{training.subtype}}</h5>
        <h3 v-else>
              Podtip: {{training.altsubtype}}
        </h3>
        <div class='star'>
            <h5 v-if="lang=='en'">
                Difficulty:
            </h5>
            <h3 v-else> 
                Tezina:
            </h3>
            <div v-if="training.difficulty==1">
                <img src='../../../public/img/BlueStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
            </div>
            <div v-else-if="training.difficulty==2">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.difficulty==3">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.difficulty==4">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.difficulty==5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                </div>
            </div>
        </div>

        <h5 v-if="lang=='en'">
            Gallery:
        </h5>
        <h3 v-else> 
            Galerija:
        </h3>
        <div class='container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" :src="require(`../../../public/img//${first}`)" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" :src="require(`../../../public/img//${second}`)" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" :src="require(`../../../public/img//${third}`)" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


              
            
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <div class='star'>
            <h5 v-if="lang=='en'">
                Rating: 
            </h5>
            <h5 v-else>
                Ocena:
            </h5>
            <div v-if="training.rating<=1">
                <img src='../../../public/img/BlueStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
                <img src='../../../public/img/GrayStar.png'>
            </div>
            <div v-else-if="training.rating<=1.5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/HalfStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=2">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
             <div v-else-if="training.rating<=2.5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/HalfStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=3">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=3.5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/HalfStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=4">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating <= 4.5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/HalfStar.png'>
                </div>
            </div>
             <div v-else-if="training.rating <= 5">
                <div class='star'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                    <img src='../../../public/img/BlueStar.png'>
                </div>
            </div>
        </div>

        <h5 v-if="lang=='en'"> 
            Video gallery: {{training.video}}
        </h5>
        <h3 v-else> 
            Video galerija: {{training.video}}
        </h3>
        <h5 v-if="lang=='en'">
            Comments:{{training.comments}}
        </h5>
        <h3 v-else>  
            Komentari: {{training.coments}}
        </h3>
    </div>
  
</template>


<style>

    .item img{
         height: 20%;
        width: 20%
    }
    .star img{
        height: 3%;
        width: 3%;
    }

</style>


<script>
import trainings from '../data/programs.js'

export default {
    name: 'TrainingDetails',
     data(){
        return{
            training: {},
            trainings: trainings,
            first: "",
            second: "",
            third: ""

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

        this.first = this.training.picF;
        this.second = this.training.picS;
        this.third = this.training.picT;
        //console.log(this.training);
    }
}
</script>

