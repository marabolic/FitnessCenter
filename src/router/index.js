import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import Services from '../views/Services.vue'
import TrainingDetails from '../components/services/TrainingDetails.vue'

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
    path: '/train',
    name: 'Programs',
    component: Programs
    //component: () => import(/* webpackChunkName: "about" */ '../views/Programs.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
