import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Programs from 'pages/Programs'
import Create from 'pages/Create'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Logout from 'pages/Logout'
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
    path: '/create',
    component: Create
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
    path: '/logout',
    component: Logout
  },

  {
    path: '/register',
    component: Register
  }

]

export default new Router({
  routes
})
