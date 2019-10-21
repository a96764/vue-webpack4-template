import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Menu from 'pages/Menu'
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
    path: '/menu',
    component: Menu
  },

  {
    path: '/contact',
    component: Contact
  }

]

export default new Router({
  routes
})
