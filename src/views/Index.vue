<template>
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


    <!-- <div class="modal fade show" id="15popup" tabindex="-1" style="z-index: 9999999999;">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <a href="" class="bi bi-x-lg text-dark position-absolute fs-1" data-bs-dismiss="modal" style="z-index: 5; right:10px;"></a>
          <div class="modal-body p-0 border-0 bg-transparent">
            <div class="modal-video-inner bg-transparent p-0">
              <img src="/image/global/15yilliktecrube.jpg" alt="" class="d-flex justify-content-between">
            </div>
          </div>
        </div>
      </div>
    </div> -->

</template>

<script>


import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import SlideWays from "@/components/home/SlideWays";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import CountryGif from "@/components/home/Country-Gif.vue";
import Socialbar from "@/components/global/Socialbar.vue";




export default {
  name: 'Index',
  components: { Hero, HomeServices, Map, Solutions, SlideWays, Team, CountryGif, Numbers, Socialbar },
  mounted() {
      window.scrollTo(0, 0);
      setTimeout(function(){
        $('#15popup').modal('show');
      }, 1000);
  }
}
</script>


<style>

html {

}

</style>

