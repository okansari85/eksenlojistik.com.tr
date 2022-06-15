import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,

  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News'),
  },
  {

    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact'),
  },
  {

    path: '/ik',
    name: 'ik',
    component: () => import('../views/Ik'),
  },
  {
    path: '/news-detail',
    name: 'news-detail',
    component: () => import('../views/NewsDetail'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


