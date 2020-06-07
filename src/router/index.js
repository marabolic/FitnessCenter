import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import Massage from '../views/Massage.vue'
import Nutritionist from '../views/Nutritionist.vue'
import Services from '../views/Services.vue'
import TrainingType from '../components/services/TrainingType'
import TrainingDetails from '../components/services/TrainingDetails.vue'
import Reservation from '../views/Reservation.vue'
import Weekly from '../views/Weekly.vue'
import MyAccount from '../views/MyAccount.vue'
import About from '../views/About.vue'
import AboutCrumbs from '../components/headerAndFooter/Crumbs/AboutCrumbs.vue'
import HomeCrumbs from '../components/headerAndFooter/Crumbs/HomeCrumbs.vue'
import MassageCrumbs from '../components/headerAndFooter/Crumbs/MassageCrumbs.vue'
import MyAccountCrumbs from '../components/headerAndFooter/Crumbs/MyAccountCrumbs.vue'
import NutriCrumbs from '../components/headerAndFooter/Crumbs/NutriCrumbs.vue'
import ProgramsCrumbs from '../components/headerAndFooter/Crumbs/ProgramsCrumbs.vue'
import ReservationCrumbs from '../components/headerAndFooter/Crumbs/ReservationCrumbs.vue'
import ServicesCrumbs from '../components/headerAndFooter/Crumbs/ServicesCrumbs.vue'
import WeeklyCrumbs from '../components/headerAndFooter/Crumbs/WeeklyCrumbs.vue'
import TrainingDetailsCrumbs from '../components/headerAndFooter/Crumbs/TrainingDetailsCrumbs.vue'
import TrainingTypeCrumbs from '../components/headerAndFooter/Crumbs/TrainingTypeCrumbs.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		components: {
			default: Home,
			crumbs: HomeCrumbs
		}
	},
	{
		path: '/trainingdetails/:id',
		name:'Details',
		components: {
			default: TrainingDetails,
			crumbs: TrainingDetailsCrumbs
		}
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		components: {
			default: About,
			crumbs: AboutCrumbs
		}
	},
	{
		path: '/services',
		name: 'Services',
		components: {
			default: Services,
			crumbs: ServicesCrumbs
		}
	},
	{
		path: '/train',
		name: 'Programs',
		components: {
			default: Programs,
			crumbs: ProgramsCrumbs
		}
		//component: () => import(/* webpackChunkName: "about" */ '../views/Programs.vue')
	},
	{
		path: '/massage',
		name: 'Massage',
		components: {
			default: Massage,
			crumbs: MassageCrumbs
		}
	},
	{
		path: '/nutritionist',
		name: 'Nutritionist',
		components: {
			default: Nutritionist,
			crumbs: NutriCrumbs
		}
	},
	{
		path: '/yoga/:type', 
		name: 'Yoga',
		components: {
			default: TrainingType,
			crumbs: TrainingTypeCrumbs
		}
	},
	{
		path: '/pilates/:type', 
		name: 'Pilates',
		components: {
			default: TrainingType,
			crumbs: TrainingTypeCrumbs
		}
	},
	{
		path: '/core/:type', 
		name: 'Core',
		components: {
			default: TrainingType,
			crumbs: TrainingTypeCrumbs
		}
	},
	{
		path: '/cardio/:type', 
		name: 'Cardio',
		components: {
			default: TrainingType,
			crumbs: TrainingTypeCrumbs
		}
	},
	{
		path: '/reservation/:filter',
		name: 'Reservation',
		components: {
			default: Reservation,
			crumbs: ReservationCrumbs
		}
	},
	{
		path: '/reservation',
		name: 'Reservation',
		components: {
			default: Reservation,
			crumbs: ReservationCrumbs
		}
	},
	{
		path: '/weekly/:id',
		name: 'Weekly',
		components: {
			default: Weekly,
			crumbs: WeeklyCrumbs
		}
	},
	{
		path: '/account',
		name: 'MyAccount',
		components: {
			default: MyAccount,
			crumbs: MyAccountCrumbs
		}
	},


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
