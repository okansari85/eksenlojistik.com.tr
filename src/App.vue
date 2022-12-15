

<template>
 <div v-if="$route.path.includes('/news/news-detail/')">
  <Header2/>
</div>
<div v-else>
  <Header/>
</div>
  <div id="app">
    <router-view v-slot="{Component, route}">
      <transition name="fade">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>
  <Footer/>
</template>

<script>

  import Header from '@/layout/Header'
  import Header2 from '@/layout/Header2';
  import Footer from '@/layout/Footer'
  export default {
    components:{Header, Header2, Footer},
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