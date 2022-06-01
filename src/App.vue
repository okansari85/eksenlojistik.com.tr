

<template>
  <Header/>
  <div id="app">
    <router-view v-slot="{Component, route}">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
export default {
  components:{Header, Footer}
}
</script>

<style lang="css">
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>