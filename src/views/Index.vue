<template>
  <div>
    <main>
      <Hero/>
      <Map/>
      <Solutions />
      <Cost  />
      <SlideWays  />
      <Safely  />
      <Team  />
      <NewsHome  />
      <Numbers />
      <Country  />


    </main>
  </div>

</template>

<script>
// @ is an alias to /src

import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import Cost from "@/components/home/Cost";
import SlideWays from "@/components/home/SlideWays";
import Safely from "@/components/home/Safely";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import Country from "@/components/home/Country";
import NewsHome from "@/views/NewsHome";




export default {
  name: 'Index',
  components: {NewsHome, SlideWays, Hero, Solutions, Map, Cost, Safely, Team, Country, Numbers }
}
</script>

