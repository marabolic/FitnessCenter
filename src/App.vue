<template>
	<div id="app">
		<div class="header-top">
			<HeaderTop/>
		</div>
		<div class='menu'>
			<Menu/>
			<div class='row'>
				<div class="offset-2 col-3">
					<router-view name="crumbs" />
				</div>
			</div>
		</div>
		<router-view/>
		<div id="mybanner">
			<Banners/>
		</div>
		<div id="footer">
			<Footer/>
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

.header-top {
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


<script>
import HeaderTop from './components/headerAndFooter/HeaderTop'
import Menu from './components/headerAndFooter/Menu'
import Footer from './components/headerAndFooter/Footer'
import Banners from './components/headerAndFooter/Banners'
export default {
	name: 'App',
	components: {
		HeaderTop,
		Menu,
		Banners,
		Footer,
	},
	data: function(){
		return {
			lang: 0,
			ckey: 0
		}
	},
}
</script>
