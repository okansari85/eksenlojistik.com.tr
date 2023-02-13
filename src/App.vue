

<template>
  <div v-if="$route.path.includes('/haberler/haber-detay/')">
   <Header2/>
 </div>
 <div>
   <Header/>
 </div>
  <div class="content-wrapper">
     <router-view v-slot="{Component, route}">
      <transition name="fade">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>
   <Footer/>
   <Cookie/>
 </template>
 
 <script>
 
   import Header from '@/layout/Header'
   import Header2 from '@/layout/Header2';
   import Footer from '@/layout/Footer'
   import Cookie from "@/components/global/Cookie.vue";

   export default {
     components:{Header, Header2, Footer, Cookie},
   }

 </script>
 
 
 <style>
 .fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
   transition-property: opacity;
   transition-timing-function: ease;
 }
 
 .fade-enter,
 .fade-leave-active {
   opacity: 0
 }
 </style>
 