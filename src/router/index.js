import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Menu from 'pages/Menu'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Programs from 'pages/Programs'

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
    path: '/menu',
    component: Menu
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
    path: '/programs',
    component: Programs  
  }

]

export default new Router({
  routes
})
