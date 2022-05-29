<template>
  <div>
    <Nav/>
    <main>
      <Hero/>
      <Number/>
      <Solutions/>
      <Cost/>
      <HeroSlide1/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '../layout/Nav.vue'
import Hero from "@/components/home/Hero";
import Number from "@/components/home/Number";
import Solutions from "@/components/home/Solutions";
import Cost from "@/components/home/Cost";
import HeroSlide1 from "@/components/home/HeroSlide1";
import Footer from "@/layout/Footer";

export default {
  name: 'Index',
  components: {Footer, HeroSlide1, Hero, Solutions, Number, Cost, Nav }
}
</script>
