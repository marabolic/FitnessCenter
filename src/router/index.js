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

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/trainingdetails/:id',
		name:'Details',
		component: TrainingDetails
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/services',
		name: 'Services',
		component: Services
	},
	{
		path: '/train',
		name: 'Programs',
		component: Programs
		//component: () => import(/* webpackChunkName: "about" */ '../views/Programs.vue')
	},
	{
		path: '/massage',
		name: 'Massage',
		component: Massage
	},
	{
		path: '/nutritionist',
		name: 'Nutritionist',
		component: Nutritionist
	},
	{
		path: '/yoga/:type', 
		name: 'Yoga',
		component: TrainingType
	},
	{
		path: '/pilates/:type', 
		name: 'Pilates',
		component: TrainingType
	},
	{
		path: '/core/:type', 
		name: 'Core',
		component: TrainingType
	},
	{
		path: '/cardio/:type', 
		name: 'Cardio',
		component: TrainingType
	},
	{
		path: '/reservation/:filter',
		name: 'Reservation',
		component: Reservation
	},
	{
		path: '/reservation',
		name: 'Reservation',
		component: Reservation
	},


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
