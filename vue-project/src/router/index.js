import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: () => import('../views/TopView.vue')
    },
    {
      path: '/contents',
      name: 'contents',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContentsView.vue')
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('../views/AccessView.vue')
    },
    {
      path: '/events',
      name: 'event',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/contents',
      name: 'contents',
      component: () => import('../views/ContentsView.vue')
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
      path: '/login',
      name: 'login',
      component: () => import('../views/Accounts/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Accounts/SignupView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Accounts/RegisterView.vue')
    }
  ]
})

export default router
