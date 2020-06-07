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

          <div class='star'>
            <h5 v-if="lang=='en'">
                Rating: 
            </h5>
            <h5 v-else>
                Ocena:
            </h5>
            <div v-if="training.rating<=1">
                <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                <img @click="twoStar" src='../../../public/img/GrayStar.png'>
                <img @click="threeStar" src='../../../public/img/GrayStar.png'>
                <img @click="fourStar" src='../../../public/img/GrayStar.png'>
                <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
            </div>
            <div v-else-if="training.rating<=1.5">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/HalfStar.png'>
                    <img @click="threeStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fourStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=2">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fourStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
             <div v-else-if="training.rating<=2.5">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/HalfStar.png'>
                    <img @click="fourStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=3">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fourStar" src='../../../public/img/GrayStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=3.5">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fourStar" src='../../../public/img/HalfStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating<=4">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fourStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fiveStar" src='../../../public/img/GrayStar.png'>
                </div>
            </div>
            <div v-else-if="training.rating <= 4.5">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fourStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fiveStar" src='../../../public/img/HalfStar.png'>
                </div>
            </div>
             <div v-else-if="training.rating <= 5">
                <div class='star'>
                    <img @click="oneStar" src='../../../public/img/BlueStar.png'>
                    <img @click="twoStar" src='../../../public/img/BlueStar.png'>
                    <img @click="threeStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fourStar" src='../../../public/img/BlueStar.png'>
                    <img @click="fiveStar" src='../../../public/img/BlueStar.png'>
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

      

        <h5 v-if="lang=='en'"> 
            Video gallery:
            
        </h5>
        <h3 v-else> 
            Video galerija: 
        </h3>
        <div>
            <iframe width="560" height="315" :src=training.video frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h5 v-if="lang=='en'">
            Comments:
        </h5>
        <h3 v-else>  
            Komentari: 
        </h3>


        <div class = 'row'>
            <div class ='col-6 offset-3'>
                <div class="comment" v-for='comm in fixedComments' :key="comm">
                    <div>
                        {{comm}}
                    </div>
                    <div class="col-3 offset-8">
                        ~Anon
                    </div>
                </div>
                <div class="comment" v-for='comm in commentsForType' :key="comm.id">
                    <div>
                        {{comm}}
                    </div>
                    <div class="col-3 offset-8">
                        ~Anon
                    </div>
                </div>
            </div>
        </div>

        <div v-if="check()" class='comments'>
            <form>
                <table>                           
                    <tr>
                        <td>
                            <textarea id="mycomment" v-model="mycomment" rows="2" cols="50"> </textarea>
                        </td>
                        <td>
                            <button type="submit" @click="addComment" class='btn btn-outline-dark'>Add Comment</button>
                        </td>
                    </tr>
                   
                </table>
            </form>
		</div>
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
    .comments{
		display: flex;
		justify-content: center;
	}

    .comment{
        background-color: skyblue;
        margin-bottom: 5px;
        border: double;
        
        
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
            third: "",
            video: "",
            mycomment: "",
            commentsForType: [],
            fixedComments: [],
            ratings: []
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

        let ratings = localStorage.getItem('ratings');
        if (ratings == null || ratings == 'undefined'){
            
            ratings = [];
        }
        else{
            ratings = JSON.parse(ratings);
            for(let i = 0; i < ratings.length; i++){
                
                if(ratings[i].id == id){
                    this.training.rating = ratings[i].rating;
                }
            }
        }

        for(let i = 0; i < this.training.comments.length; i++){
            this.fixedComments.push(this.training.comments[i].com);
        }
        
        this.getComments();
        //console.log(this.training);
    },
    methods:{
        addComment(){
			if(!this.check())
				return;
            let myid = Number(this.$route.params.id);
            let temp_train = this.trainings.find(
                training=>training.id==myid
            );
            this.training = temp_train;

            let comments = localStorage.getItem('comments');
            if (comments == null || comments == 'undefined'){
                comments = [];
            }
            else{
                comments = JSON.parse(comments);
            }
            comments.push({id: myid, comment: this.mycomment});
            localStorage.setItem('comments', JSON.stringify(comments));
            this.commentsForType.push(this.mycomment);

            //document.getElementById("mycomment").value = "";
            this.$forceUpdate();

        },
        getComments(){
            this.commentsForType = []
            let myid = Number(this.$route.params.id);
            let comments = localStorage.getItem('comments');
            if (comments == null || comments == 'undefined'){
                comments = [];
            }
            else{
                comments = JSON.parse(comments);
                for (let i = 0; i < comments.length; i++){
                    if (comments[i].id == myid){
                        this.commentsForType.push(comments[i].comment);
                    }
                }
            }
            

            //for (let i = 0; i < comments.length; i++){
                //{
                  //  this.commentsForType.push(comments[i].comment);

               // }
            //}
            
        },
		check(){
            let myid = Number(this.$route.params.id);
			var attended = localStorage.getItem("attended");
			if(attended == null || attended == "undefined"){
				attended = []
			}
			else{
				attended = JSON.parse(attended);
			}
			for(let i = 0; i < attended.length; i++){
				if(attended[i].id == myid){
					return true;
				}
			}
			return false;
		},
        oneStar(){
			if(!this.check())
				return;
            console.log("one");
            this.training.rating = 1;
            let myid = Number(this.$route.params.id);

            let ratings = localStorage.getItem('ratings');
            if (ratings == null || ratings == 'undefined'){
                ratings = [];
            }
            else{
                ratings = JSON.parse(ratings);
            }
            ratings.push({id: myid, rating: this.training.rating});
            localStorage.setItem('ratings', JSON.stringify(ratings));

            this.$forceUpdate();
        },
        twoStar(){
			if(!this.check())
				return;
            console.log("two");
            this.training.rating = 2;
            let myid = Number(this.$route.params.id);
            let ratings = localStorage.getItem('ratings');
            if (ratings == null || ratings == 'undefined'){
                ratings = [];
            }
            else{
                ratings = JSON.parse(ratings);
            }
            ratings.push({id: myid, rating: this.training.rating});
            localStorage.setItem('ratings', JSON.stringify(ratings));
            this.$forceUpdate();
        },
        threeStar(){
			if(!this.check())
				return;
            console.log("three");
            this.training.rating = 3;
            let myid = Number(this.$route.params.id);
            let ratings = localStorage.getItem('ratings');
            if (ratings == null || ratings == 'undefined'){
                ratings = [];
            }
            else{
                ratings = JSON.parse(ratings);
            }
            ratings.push({id: myid, rating: this.training.rating});
            localStorage.setItem('ratings', JSON.stringify(ratings));

            this.training.rating = 3;
            this.$forceUpdate();
        },
        fourStar(){
			if(!this.check())
				return;
            console.log("four");
            this.training.rating = 4;
            let myid = Number(this.$route.params.id);
            let ratings = localStorage.getItem('ratings');
            if (ratings == null || ratings == 'undefined'){
                ratings = [];
            }
            else{
                ratings = JSON.parse(ratings);
            }
            ratings.push({id: myid, rating: this.training.rating});
            localStorage.setItem('ratings', JSON.stringify(ratings));

            this.training.rating = 4;
            this.$forceUpdate();
        },
        fiveStar(){
			if(!this.check())
				return;
            console.log("five");
            this.training.rating = 5;
            let myid = Number(this.$route.params.id);
            let ratings = localStorage.getItem('ratings');
            if (ratings == null || ratings == 'undefined'){
                ratings = [];
            }
            else{
                ratings = JSON.parse(ratings);
            }
            ratings.push({id: myid, rating: this.training.rating});
            localStorage.setItem('ratings', JSON.stringify(ratings));

            this.$forceUpdate();
        },
        
    }
}
</script>

