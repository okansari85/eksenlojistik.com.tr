import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/services2/:slug?',
    name: 'services2',
    component: () => import('@/views/Services2'),
  },
  {
    path: '/about/:slug?',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News'),
  },
  {
    path: '/news/news-detail/:slug?',
    name: 'news-detail',
    component: () => import('@/views/NewsDetail'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact'),
  },
  {
    path: '/ik/:slug?',
    name: 'ik',
    component: () => import('@/views/Ik'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;


