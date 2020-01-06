import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
  
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/blog',
    name: 'blog',
  
    component: () => import('../views/blog.vue')
  },
  {
    path: '/contact',
    name: 'contact',
  
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/single-blog/:id-:slug',
    name: 'single-blog',
    props: true,
    component: () => import('../views/singleBlog.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
