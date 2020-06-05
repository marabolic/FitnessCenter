<template>
	<div class="about">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1> About us </h1>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2>
						Our team
					</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-sm-12 team">
				</div>
				<div class="col-md-4 col-sm-12">
					<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2>
						Our Achievements
					</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-sm-12">
				</div>
				<div class="col-md-4 col-sm-12 team">
					<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<h2>
						Where to Find Us
					</h2>
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
					<h3> Contact: </h3>
					<p>
						Have any questions, call here:
						<a href="tel:01234567890">01234 567 890</a>
					</p>
					<p>
						Or e-mail us at:
						<a href="mailto:johndoe@lorem.ips">johndoe@lorem.ips</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<style>

.about h1 {
	color: #72D0F4;
	padding-top: 20px;
	font-size: 4.0em;
}

.about h2 {
	text-align: left;
	color: #00BFF0;
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
	opacity: 50%;
	color: white;
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
