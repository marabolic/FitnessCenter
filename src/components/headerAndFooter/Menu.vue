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
</template>