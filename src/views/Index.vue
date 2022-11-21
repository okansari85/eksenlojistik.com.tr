<template>
  <div>
    <main>
      <Hero/>
      <HomeServices/>
      <Map/>
      <Solutions/>
      <CalculateForm/>
      <SlideWays/>
      <Team/>
      <CountryGif/>
      <News2/>
      <Numbers/>
    </main>
  </div>

</template>

<script>


import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import CalculateForm from "@/components/global/CalculateForm";
import SlideWays from "@/components/home/SlideWays";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import News2 from "@/components/home/news/News-2.vue";
import CountryGif from "@/components/home/Country-Gif.vue";




export default {
  name: 'Index',
  components: { Hero, HomeServices, Map, Solutions, CalculateForm, SlideWays, Team, News2, CountryGif, Numbers },
}
</script>

