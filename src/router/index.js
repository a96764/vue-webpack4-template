import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Programs from 'pages/Programs'
import Nutrition from 'pages/Nutrition'
import Bookings from 'pages/Bookings'
import Contact from 'pages/Contact'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },

  {
    path: '/programs',
    component: Programs
  },

  {
    path: '/nutrition',
    component: Nutrition
  },

  {
    path: '/bookings',
    component: Bookings
  },

  {
    path: '/contact',
    component: Contact
  }

]

export default new Router({
  routes
})
