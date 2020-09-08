import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Clients from '../views/Clients.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
    children: [
      {
        name: 'details',
        path: 'Details',
        component: Details
      }
    ]

  },
  {
    path: '/clients/:id',
    name: 'Clients',
    // component: () => import('../views/Clients.vue')
    component: Clients
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
