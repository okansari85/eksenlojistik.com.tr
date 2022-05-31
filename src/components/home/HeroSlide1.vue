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
          <swiper :options="swiperOption">
            <swiper-slide>
                <img src="../../assets/image/home/eksen_way_slide1.png" alt=""/>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/image/home/eksen_way_slide1.png" alt=""/>
            </swiper-slide>
            <div class="way-slide-btn">
              <div slot="button-prev">
                <span class="bi bi-arrow-left fs-3 way-slide-prev" @click="$refs.swiper.swiperInstance.slidePrev()"></span>
              </div>
              <div slot="button-next">
                <span class="bi bi-arrow-right fs-3 way-slide-next" @click="$refs.swiper.swiperInstance.slideNext()"></span>
              </div>

            </div>
          </swiper>
        </div>
      </div>
    </div>
  </section>


</template>

<script>


import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
  name: "HeroSlide1",
  components: {Swiper, SwiperSlide},
  data()  {
    return {
      swiperOption: {
        spaceBetween: 20,
        loop:true,
        navigation: {
          nextEl: ".way-slide-next",
          prevEl: ".way-slide-prev"
        }
      }
    }
  },
}
</script>

<style scoped>

</style>