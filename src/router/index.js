import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (services.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (portfolio.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portfolioView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (blog.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (pricing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PricingView.vue')
    }
  ]
})

export default router
