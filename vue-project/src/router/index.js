import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import RegisterView from '../views/RegisterView.vue'
// import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      // component: RegisterView
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('../views/Rooms.vue')
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import('../views/Invoice.vue')
    }
  ]
})

export default router
