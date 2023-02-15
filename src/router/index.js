import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'

const routes = [
  {
    path: '/',
    name: 'anasayfa',
    component: Index,
  },
  {
    path: '/services2/:slug?',
    name: 'services2',
    component: () => import('@/views/Services2'),
  },
  {
    path: '/kurumsal',
    name: 'kurumsal',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/haberler',
    name: 'haberler',
    component: () => import('@/views/News'),
  },
  {
    path: '/haberler/haber-detay/:slug?',
    name: 'haber-detay',
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
  routes,
  // page scrool always top 
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});


export default router;