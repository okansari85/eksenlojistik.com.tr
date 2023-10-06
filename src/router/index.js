import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import store from '@/store';


const routes = [
  {
    path: '/',
    name: 'anasayfa',
    component: Index,
  },
  {
    path: '/services2/:slug?',
    name: 'services2',
    component: () => import('@/views/Services2.vue'),
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
  // {
  //   path: '/hizmetler',
  //   name: 'hizmetler',
  //   component: () => import('@/views/Services'),
  // },
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
  {
    path: '/hizmetler/karayolu-tasimaciligi',
    name: 'karayolu-tasimaciligi',
    component: () => import('@/views/Services/KarayoluTasimaciligi'),
  },
  {
    path: '/hizmetler/gumrukleme-hizmetleri',
    name: 'gumrukleme-hizmetleri',
    component: () => import('@/views/Services/GumruklemeHizmeti'),
  },
  {
    path: '/hizmetler/depolama-hizmetleri',
    name: 'depolama-hizmetleri',
    component: () => import('@/views/Services/DepolamaHizmeti'),
  },
  {
    path: '/hizmetler/minivan-tasimaciligi',
    name: 'minivan-tasimaciligi',
    component: () => import('@/views/Services/MinivanTasimacilik'),
  },
  {
    path: '/pages/:id/:slug?',
    name: 'pages',
    component: () => import('@/components/Pages'),
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