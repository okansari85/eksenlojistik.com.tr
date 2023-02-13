import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/hakkimizda/:slug?',
    name: 'hakkimizda',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/haberler',
    name: 'haberler',
    component: () => import('@/views/News'),
  },
  {
    path: '/haberler/haber-detay/:slug?',
    name: 'news-detail',
    component: () => import('@/views/NewsDetail'),
  },
  {
    path: '/hizmetler',
    name: 'hizmetler',
    component: () => import('@/views/Services'),
  },
  {
    path: '/iletisim',
    name: 'iletisim',
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


