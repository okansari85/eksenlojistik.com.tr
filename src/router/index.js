import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Services from "@/views/Services";

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
