<template>
	<div class="about">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 v-if="lang=='en'"> About us </h1>
					<h1 v-else> O nama </h1>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2 v-if="lang=='en'"> Our team </h2>
					<h1 v-else> Nas tim </h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-md-12 team">
					<img src="../../public/img/Team.jpg">
				</div>
				<div class="col-lg-4 col-md-12">
					<p v-if="lang=='en'"> People who got training into their blood. People who understand that it’s not enough to start in May, 
						two months before the seaside. People who don’t train just to look good, but are satisfied with their 
						physical appearance. We know it’s not possible to create a perfect world where everybody would smile and 
						be happy. That’s why we don’t try to achieve this. However, it is possible to help people to get stronger, 
						tougher and readier to everything that life brings. That’s why we work on this, every day. 
					</p>
					<p v-else>
						Ljudi kojima je treniranje u krvi. Ljudi koji razumeju da nije dovoljno započeti u maju,
						dva meseca pre mora. Ljudi koji ne treniraju samo da bi izgledali dobro, ali su zadovoljni svojim
						fizičkim izgledom. Znamo da nije moguće stvoriti savršen svet u kojem bi se svi osmehivali i 
						buili srecni. Zato ne pokušavamo to postići. Međutim, moguće je pomoći ljudima da ojačaju,
						čvršće i čitljivije za sve što život donosi. Zato radimo na tome, svaki dan.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2 v-if="lang=='en'"> Our Achievements </h2>
					<h1 v-else> Nasi uspesi </h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-md-12 uros">
					<img src="../../public/img/Achievments.jpg">
				</div>
				<div class="col-lg-4 col-md-12 team">
					<p v-if="lang=='en'">
						Our team of professional atheletes have won many challanges and 
						competitions such as the Belgrade Marathon and Weight lifting to gain awareness 
						for breast cancer but most notable of all is our colleagues triumphant Cointoss 
						Olympic Award.
						</p>
					<p v-else>
						Naš tim profesionalnih atletičara osvojio je brojne nagrade i takmičenja kao što su 
						Beogradski maraton i dizanje tegova radi sticanja svesti za karcinomu dojke, ali 
						najznačajniji od svih je nagrada našeg kolega koji je osvojio Olimpijsku nagradu za
						bacanje novcica.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2 v-if="lang=='en'"> Where to Find Us </h2>
					<h1 v-else> Gde se nalazimo </h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div id="mapDiv">
						<div id="display-googlemap">
							<iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Maksima+Gorkog+5,+Beograd&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
							</iframe>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 text-left">
					<h3 v-if="lang=='en'"> Contact: </h3>
					<h3 v-else> Kontakt: </h3>
					
					<p  v-if="lang=='en'">
						Have any questions, call here:
						<a href="tel:01234567890">01234 567 890</a>
					</p>
					<p v-else>
						Za vise pitanja, pozovite broj: 
						<a href="tel:01234567890">01234 567 890</a>
					</p>
					<p v-if="lang=='en'">
						Or e-mail us at:
						<a href="mailto:johndoe@lorem.ips">johndoe@lorem.ips</a>
					</p>
					<p v-else>
						Ili nam posaljite e-mail na adresu:
						<a href="mailto:johndoe@lorem.ips">johndoe@lorem.ips</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
		}
	}
}
</script>

<style>

.about h1 {
	color: black;
	padding-top: 20px;
	font-size: 4.0em;
}

.about h2 {
	text-align: left;
	color: black;
	font-size: 3.0em;
}

.team p{
	font-size: 1.2em;
	margin-top: 20px;
	margin-bottom: 20px;
}

.team{
	background-color: #00BFF0;
	border-radius : 10px;
	color: black;
}

.team img{
	width: 100%;
	height: 100%;
}

.uros img{
	width: 100%;
	height: 100%;
}

#mapDiv {
	text-decoration:none;
	overflow:hidden;
	max-width:100%;
	width:500px;
	height:500px;
	margin-bottom: 25px;
}

#display-googlemap {
	height:100%;
	width:100%;
	border:0;
}

#display-googlemap iframe{
	height:100%;
	width:100%;
	border:0;
}

#display-googlemap img{
	max-width:none !important;
	background:none !important;
	font-size: inherit;
	font-weight:inherit;
}

</style>
