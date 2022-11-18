<template>
  <div>
    <main>
      <Hero/>
      <Map/>
      <Solutions/>
      <CalculateForm/>
      <SlideWays/>
      <Team/>
      <NewsHome/>
      <Numbers/>
      <Country/>
    </main>
  </div>

</template>

<script>
// @ is an alias to /src

import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import SlideWays from "@/components/home/SlideWays";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import Country from "@/components/home/Country";
import NewsHome from "@/views/NewsHome";
import CalculateForm from "@/components/global/CalculateForm";
import ServicesText from "@/components/home/ServicesText.vue";




export default {
  name: 'Index',
  components: { NewsHome, SlideWays, Hero, Solutions, Map, Team, Country, Numbers, CalculateForm, ServicesText },
}
</script>

