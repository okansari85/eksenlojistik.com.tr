<template>

  <section class="way-slide">
    <div class="container-fluid gx-0 overflow-hidden py-5">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-4 paragraph-margin">
          <h1 class="display-3 fw-bold text-uppercase">daha iyi bir yol bulmak için kararlıyız</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum fugit totam ipsa nostrum, mollitia eos ex consequuntur accusamus dignissimos magnam impedit architecto modi nobis, sit nisi optio odio dolores.
          </p>
        </div>
        <div class="col-lg-7 text-end">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              navigation
          >
            <swiper-slide>
                <img src="../../assets/image/home/eksen_way_slide1.png" alt=""/>
            </swiper-slide>
            <div class="way-slide-btn">
              <span class="bi bi-arrow-left fs-3 way-slide-prev"></span>
              <span class="bi bi-arrow-right fs-3 way-slide-next"></span>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </section>


</template>

<script>


import { useSwiper } from 'swiper/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';



export default {
  name: "HeroSlide1",
  components: {Swiper, SwiperSlide},
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
      modules: [Navigation],
    }
  },
}
</script>

<style scoped>

</style>