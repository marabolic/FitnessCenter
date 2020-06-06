<template>
    <div class="menu">
			<div class="container">
				<div class="text-left">
					<router-link to="/">
						<a href="index.html"><img src="../../../public/img/logo.png" alt=""/></a>
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
									<div v-if="lang=='en'">
										<a class="nav-link" href="#">Home</a>
									</div>
									<div v-else>
										<a class="nav-link" href="#">Pocetna</a>
									</div>
								</router-link>
							</li>
							<li class="nav-item dropdown">
								<router-link to="/services">
									<div v-if="lang=='en'">
										<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
											Services
										</a>
									</div>
									<div v-else>
										<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
											Usluge
										</a>
									</div>
								</router-link>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<router-link to="/massage">
										<div v-if="lang=='en'">
											<a class="dropdown-item">Massage</a>
										</div>
										<div v-else>
											<a class="dropdown-item">Masaza</a>
										</div>
									</router-link>
									<router-link to="/nutritionist">
										<div v-if="lang=='en'">
											<a class="dropdown-item">Nutritionist</a>
										</div>
										<div v-else>
											<a class="dropdown-item">Nutricionista</a>
										</div>
									</router-link>
									<router-link to="/train">
										<div v-if="lang=='en'">
											<a class="dropdown-item">Training</a>
										</div>
										<div v-else>
											<a class="dropdown-item">Trening</a>
										</div>
									</router-link>
								</div>
							</li>
							<li class="nav-item">
								<router-link to="/reservation">
									<div v-if="lang=='en'">
										<a class="nav-link" href="#">Reservations</a>
									</div>
									<div v-else>
										<a class="nav-link" href="#">Zakazivanje</a>
									</div>
								</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about">
									<div v-if="lang=='en'">
										<a class="nav-link" href="#">My Account</a>
									</div>
									<div v-else>
										<a class="nav-link" href="#">Moj Nalog</a>
									</div>
								</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about">
									<div v-if="lang=='en'">
										<a class="nav-link" href="#">About us</a>
									</div>
									<div v-else>
										<a class="nav-link" href="#">O Nama</a>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
</template>


<script>
export default {
	name: "",
	created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
		}
	}
}
</script>