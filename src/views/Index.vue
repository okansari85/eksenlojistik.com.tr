<template>
    <main>
      <Hero/>
      <HomeServices/>
      <Map/>
      <Solutions/>
      <Team/>
      <CountryGif/>
      <Numbers/>
      <SocialBar/>
    </main>

</template>

<script>


import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import SocialBar from "@/components/global/Socialbar.vue";
import CountryGif from "@/components/home/Country-Gif.vue";



export default {
  name: 'Index',
  components: {Hero, HomeServices, Map, Solutions, Team, Numbers, SocialBar, CountryGif},
}
</script>


<style>

</style>

