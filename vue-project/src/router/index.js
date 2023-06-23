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
      component: () => import('../views/RoomsView.vue')
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../views/ExpensesView.vue')
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: () => import('../views/UtilitiesView.vue')
    },
    {
      path: '/autophones',
      name: 'autophones',
      component: () => import('../views/AutoPhones.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/InvoicesView.vue')
    },
    {
      path: '/installments',
      name: 'installments',
      component: () => import('../views/InstallmentsView.vue')
    },
    {
      path: '/userloglevel',
      name: 'userloglevel',
      component: () => import('../views/Userloglevel.vue')
    },
    {
      path: '/accounting',
      name: 'accounting',
      component: () => import('../views/AccountingView.vue')
    },
    {
      path: '/roomcreate',
      name: 'roomcreate',
      component: () => import('../views/RoomCreate.vue')
    },
    {
      path: '/utilityDetail',
      name: 'utilityDetail',
      component: () => import('../views/utilityDetail.vue')
    }
  ]
})

export default router
