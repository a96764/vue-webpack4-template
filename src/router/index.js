import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Programs from 'pages/Programs'
import Nutrition from 'pages/Nutrition'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Register from 'pages/Register'

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
    path: '/contact',
    component: Contact
  },

  {
    path: '/login',
    component: Login
  },

  {
    path: '/register',
    component: Register
  }

]

export default new Router({
  routes
})
