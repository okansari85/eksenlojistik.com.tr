import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Services from "@/views/Services";
import Services2 from "@/views/Services2";
import About from "@/views/About";
import News from "@/views/News";
import NewsDetail from "@/views/NewsDetail";
import Contact from "@/views/Contact";
import Ik from '@/views/Ik';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,

  },
  {
    path: '/services2/:slug?',
    name: 'services2',
    component: Services2,
  },
  {
    path: '/about/:slug?',
    name: 'about',
    component: About,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },

  {
    path: '/news-detail/:id?',
    name: 'news-detail',
    component: NewsDetail,

  },

  {

    path: '/services',
    name: 'services',
    component: Services,

  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {

    path: '/ik/:slug?',
    name: 'ik',
    component: Ik,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


