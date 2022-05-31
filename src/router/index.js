import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Services from "@/views/Services";
import About from "@/views/About";
import Contact from '@/views/Contact'
import Ik from '@/views/Ik'
import News from "@/views/News";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {

    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {

    path: '/Ik',
    name: 'ik',
    component: Ik
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
