<template>
  <div>
    <main>
      <Hero/>
      <Number />
      <Solutions />
      <Cost  />
      <HeroSlide1  />
      <Safely  />
      <Team  />
      <NewsHome  />
      <SlideCountry/>
      <Country  />


    </main>
  </div>

</template>

<script>
// @ is an alias to /src

import Hero from "@/components/home/Hero";
import Number from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import Cost from "@/components/home/Cost";
import HeroSlide1 from "@/components/home/SlideWays";
import Safely from "@/components/home/Safely";
import Team from "@/components/home/Team";
import Country from "@/components/home/Country";
import NewsHome from "@/views/NewsHome";
import SlideCountry from "@/components/home/SlideCountry";



export default {
  name: 'Index',
  components: {SlideCountry, NewsHome, HeroSlide1, Hero, Solutions, Number, Cost, Safely, Team, Country },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

