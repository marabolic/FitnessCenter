<template>
	<div id="app">
		<div class="header-bottom">
			<div class="container">
				<div class="text-right">
					<a>
						English
						<img src="../public/img/en.png">
					</a>
					|
					<a>
						Srpski
						<img src="../public/img/sr.png">
					</a>
				</div>
			</div>
		</div>
		<div class="menu">
			<div class="container">
				<div class="text-left">
					<router-link to="/">
						<a href="index.html"><img src="../public/img/logo.png" alt=""/></a>
					</router-link>
				</div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<router-link to="/">
						<a class="navbar-brand">Navbar</a>
					</router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav justify-content-end">
							<li class="nav-item active">
								<router-link to="/">
									<a class="nav-link" href="#">Pocetna</a>
								</router-link>
							</li>
							<li class="nav-item dropdown">
								<router-link to="/about">
									<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
										Usluge
									</a>
								</router-link>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<router-link to="/about">
										<a class="dropdown-item">Masaza</a>
									</router-link>
									<router-link to="/nut">
										<a class="dropdown-item">Nutricionista</a>
									</router-link>
									<router-link to="/tren">
										<a class="dropdown-item">Trening</a>
									</router-link>
								</div>
							</li>
							<li class="nav-item">
								<router-link to="/about">
									<a class="nav-link" href="#">Zakazivanje</a>
								</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about">
									<a class="nav-link" href="#">Moj Nalog</a>
								</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about">
									<a class="nav-link" href="#">O Nama</a>
								</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
			<div id="mybanner">
				<div class="row">
					<div class="col-sm-6 col-lg-3">
						<a href = "https://www.facebook.com/">
							<img src="../public/img/face.png">
						</a>
					</div>
					<div class="col-sm-6 col-lg-3">
						<a href = "https://www.instagram.com/">
							<img src="../public/img/insta.jpg">
						</a>
					</div>
					<div class="col-sm-6 col-lg-3">
						<a href = "https://www.myspace.com/">
							<img src="../public/img/myspace.png">
						</a>
					</div>
					<div class="col-sm-6 col-lg-3">
						<a href = "https://www.biospajz.rs/">
							<img src="../public/img/biospajz.png">
						</a>
					</div>
				</div>
			</div>
			<div id="footer">
				<div class="col-12">
					<i>Copyright 2020, Mara Bolić, Edvin Maid, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu </i>
				</div>
			</div>
	</div>
</template>

<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.header-bottom {
	background: #00BFF0;
	padding:10px 0 5px 0;
	color: #C0EEFF;
	font-size: 0.85em;
}

.menu{
	padding: 2% 0 1.8% 0;
	background: #72D0F4;
	z-index: 9999;
	width: 100%;
	clear: both;
}

.toggleMenu {
	display:  none;
	background:#00BFF0;
	padding: 10px 15px;
	width: 100%;
	color: #fff;
}

.dropdown:hover>.dropdown-menu {
	display: block;
}

a {
	text-decoration: none !important;
}

#footer {
	position: relative;
	bottom: 0;
	text-align: center;
	width:100%;
	background: #00BFF0;
	color: #C0EEFF;
	font-size: 1.00em;
}

#mybanner{
	position: relative;
	bottom: 0;
	background:rgba(33, 191, 252, 0.35);
	padding-top:20px;
	padding-bottom:20px;
}

#mybanner img{
	width: 90%;
	height: 90%;
}

#mybanner img:hover{
	border: dotted 5px white;
}

</style>
