<template>
  <div>
    <main>
      <Hero/>
      <HomeServices/>
      <Map/>
      <Solutions/>
      <!-- <CalculateForm/> -->
      <SlideWays/>
      <Team/>
      <CountryGif/>
      <Numbers/>
      <Socialbar/>
    </main>
  </div>

</template>

<script>


import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
// import CalculateForm from "@/components/global/CalculateForm";
import SlideWays from "@/components/home/SlideWays";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import CountryGif from "@/components/home/Country-Gif.vue";
import Socialbar from "@/components/global/Socialbar.vue";




export default {
  name: 'Index',
  components: { Hero, HomeServices, Map, Solutions, SlideWays, Team, CountryGif, Numbers, Socialbar },
}
</script>

